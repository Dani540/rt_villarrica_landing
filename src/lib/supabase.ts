import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    import.meta.env.SUPABASE_URL,
    import.meta.env.SUPABASE_KEY,
);

(async () => {
    const { data, error } = await supabase.from('inscriptions').select('*');
    if (error) {
        console.error('Error al conectar a Supabase:', error);
    } else {
        console.log('Conexión a Supabase exitosa:', data);
    }
})();