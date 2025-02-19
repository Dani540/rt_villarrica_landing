import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';
import type { PostgrestError } from '@supabase/supabase-js';
import type { Assists } from '@/types/FormReg';

function response(data: any[] | null, error: PostgrestError | null): Response {
    return error
        ? new Response(JSON.stringify({ error: error.message }), { status: 400 })
        : new Response(JSON.stringify(data), { status: 200 });
}

function missingID(): Response {
    return new Response(JSON.stringify({ error: 'Falta el parámetro id' }), { status: 400 });
}

/**
 * GET: Obtiene todas las asistencias o, si se pasa el parámetro "id", obtiene una asistencia en particular.
 * Ejemplo de consulta: GET /api/assists?id=1
 */
export const GET: APIRoute = async ({ url }) => {
    const id = url.searchParams.get('id');

    let query = supabase.from('assists').select('*');

    if (id) {
        query = query.eq('id', id);
    }
    const { data, error } = await query;

    return response(data, error);
};

/**
 * POST: Crea una nueva asistencia.
 * Se espera que el body contenga un JSON con los siguientes campos:
 *   - name (string)
 *   - email (string)
 *   - conditions (boolean)
 */
export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();

    const assist: Assists = {
        name: body.name,
        email: body.email,
        contact: body.contact,
        conditions: body.conditions,
    };

    const { data, error } = await supabase.from('assists').insert(assist).select();

    return response(data, error);
};

/**
 * PATCH: Actualiza una asistencia existente.
 * Se espera el parámetro "id" en la URL y en el body los campos a actualizar.
 * Ejemplo: PATCH /api/assists?id=1
 */
export const PATCH: APIRoute = async ({ request, url }) => {
    const id = url.searchParams.get('id');
    if (!id) return missingID();

    const body = await request.json();

    const updatedData: Partial<Assists> = {};

    if (body.name !== undefined) updatedData.name = body.name;
    if (body.email !== undefined) updatedData.email = body.email;
    if (body.conditions !== undefined) updatedData.conditions = body.conditions;

    const { data, error } = await supabase
        .from('assists')
        .update(updatedData)
        .eq('id', id);

    return response(data, error);
};

/**
 * DELETE: Elimina una asistencia.
 * Se espera el parámetro "id" en la URL para identificar el registro a borrar.
 * Ejemplo: DELETE /api/assists?id=1
 */
export const DELETE: APIRoute = async ({ url }) => {
    const id = url.searchParams.get('id');

    if (!id) return missingID();

    const { data, error } = await supabase.from('assists').delete().eq('id', id);

    return response(data, error);
};