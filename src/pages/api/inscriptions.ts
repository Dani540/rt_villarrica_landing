import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';
import type {PostgrestError} from "@supabase/supabase-js";
import type {Inscription} from "@/types/FormReg.ts";

function response(data:any[]|null,error:PostgrestError|null) : Response{
    return error
        ? new Response(JSON.stringify({ error: error.message }), { status: 400 })
        : new Response(JSON.stringify(data), { status: 200 });
}

function missingID() : Response{
    return new Response(JSON.stringify({ error: 'Falta el parámetro id' }), { status: 400 });
}

const updateStrategy: Record<keyof Omit<Inscription, "id">, (value: any) => any> = {
    assist_id: (v) => Number(v),
    contact: (v) => v,
    free: (v) => Boolean(v),
    speed: (v) => Boolean(v),
    sex: (v) => v
};

/**
 * GET: Obtiene todas las inscripciones o, si se pasa el parámetro "id", obtiene una inscripción en particular.
 * Ejemplo de consulta: GET /api/inscriptions?id=1
 */
export const GET: APIRoute = async ({ url }) => {
    const id = url.searchParams.get('id');

    let query = supabase.from('inscriptions').select('*');

    if (id) {
        query = query.eq('id', id);
    }
    const { data, error } = await query;

    return response(data,error);
};

/**
 * POST: Crea una nueva inscripción.
 * Se espera que el body contenga un JSON con los siguientes campos:
 *   - nombre (string)
 *   - email (string)
 *   - contact (string)
 *   - free (boolean)
 *   - speed (boolean)
 *   - sex (string)
 *   - conditions (boolean)
 */
export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    const inscription: Inscription = {
        assist_id: body.assist_id,
        contact: body.contact,
        free: body.free,
        speed: body.speed,
        sex: body.sex
    };

    const { data, error } = await supabase.from('inscriptions').insert(inscription).select();

    return response(data, error);
};

/**
 * PATCH: Actualiza una inscripción existente.
 * Se espera el parámetro "id" en la URL y en el body los campos a actualizar.
 * Ejemplo: PATCH /api/inscriptions?id=1
 */
export const PATCH: APIRoute = async ({ request, url }) => {
    const id = url.searchParams.get('id');
    if (!id) return missingID();

    const body = await request.json();

    const updatedData: Partial<Inscription> = {};

    // Iteramos sobre las claves definidas en la estrategia
    for (const key in updateStrategy) {
        if (body[key] !== undefined) {
            updatedData[key as keyof Inscription] = updateStrategy[key as keyof Omit<Inscription, "id">](body[key]);
        }
    }

    const { data, error } = await supabase
        .from('inscriptions')
        .update(updatedData)
        .eq('id', id);

    return response(data, error);
};


/**
 * DELETE: Elimina una inscripción.
 * Se espera el parámetro "id" en la URL para identificar el registro a borrar.
 * Ejemplo: DELETE /api/inscriptions?id=1
 */
export const DELETE: APIRoute = async ({ url }) => {
    const id = url.searchParams.get('id');

    if (!id) return missingID();

    const { data, error } = await supabase.from('inscriptions').delete().eq('id', id);

    return response(data,error);
};
