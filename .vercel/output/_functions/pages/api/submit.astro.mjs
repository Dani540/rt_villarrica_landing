import { createClient } from '@supabase/supabase-js';
export { renderers } from '../../renderers.mjs';

const supabase = createClient(
  "https://klkfqdbqzjhjojnbvqms.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsa2ZxZGJxempoam9qbmJ2cW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1OTY5MTIsImV4cCI6MjA1NTE3MjkxMn0.VT0USDi-pnDixWEuahnjum0NuFIY4633Oss2-0_fePw"
);
(async () => {
  const { data, error } = await supabase.from("inscriptions").select("*");
  if (error) {
    console.error("Error al conectar a Supabase:", error);
  } else {
    console.log("Conexión a Supabase exitosa:", data);
  }
})();

const prerender = false;
const POST = async ({ request }) => {
  try {
    const formData = await request.json();
    console.log("Datos recibidos en el backend:", formData);
    const { data: supaData, error: supaError } = await supabase.from("inscriptions").insert([formData]);
    if (supaError) {
      console.error("Error al insertar en Supabase:", supaError);
    } else {
      console.log("Inserción en Supabase exitosa:", supaData);
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error al guardar:", errorMessage);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
