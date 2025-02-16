import { reactive } from 'vue';

export function useInscriptionForm() {
    const formData = reactive({
        nombre: '',
        email: '',
        free: false,
        speed: false,
        sex: '',
    });

    const handleSubmit = async () => {
        const payload = JSON.parse(JSON.stringify(formData));
        console.log("Payload enviado:", payload);

        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            // Antes de parsear como JSON, revisa qué devuelve el servidor
            const text = await response.text();
            console.log("Respuesta cruda del servidor:", text);

            // Intenta parsear solo si la respuesta tiene contenido válido
            const result = text ? JSON.parse(text) : null;
            console.log("Respuesta del servidor (parseada):", result);

            alert("Inscrito Correctamente!");
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };



    return { formData, handleSubmit };
}
