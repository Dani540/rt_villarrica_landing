import { writeFile, readFile, mkdir } from 'fs/promises';
import type { APIRoute } from 'astro';
import path from 'path';
import { supabase } from '@/lib/supabase';

export const prerender = false;

//const filePath = path.join(process.cwd(), 'src/data/inscriptions.json');

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.json();
        console.log("Datos recibidos en el backend:", formData);

        const { data: supaData, error: supaError } = await supabase
            .from('inscriptions')
            .insert([formData]);

        if (supaError) {
            console.error('Error al insertar en Supabase:', supaError);
        } else {
            console.log('Inserción en Supabase exitosa:', supaData);
        }

        //TODO: Para desarrollo local
        /*
        await mkdir(path.dirname(filePath), { recursive: true });
        let existingData = [];
        try {
            const data = await readFile(filePath, 'utf-8');
            existingData = JSON.parse(data);
        } catch (error) {
            console.warn("Archivo JSON no encontrado o vacío, creando uno nuevo.");
        }

        existingData.push(formData);
        await writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
        */
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("Error al guardar:", errorMessage);
        return new Response(JSON.stringify({ success: false, error: errorMessage }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
