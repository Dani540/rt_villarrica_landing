import { reactive } from 'vue';
import type { Inscription, Assists } from '@/types/FormReg';

export function useRegistration() {

    const formData = reactive({
        asisto: false,
        compito: false,
        name: '',
        email: '',
        conditions: false,
        contact: '',
        free: false,
        speed: false,
        sex: ''
    });

    // Reinicia el formulario a su estado inicial
    const resetForm = () => {
        formData.asisto = false;
        formData.compito = false;
        formData.name = '';
        formData.email = '';
        formData.conditions = false;
        formData.contact = '';
        formData.free = false;
        formData.speed = false;
        formData.sex = '';
    };

    // Función para enviar el formulario según las opciones marcadas
    const handleSubmit = async () => {
        // Validaciones comunes: nombre, email y condiciones deben estar completos
        if (!formData.name.trim() || !formData.email.trim()) {
            alert('Por favor, complete nombre y email.');
            return;
        }
        if (!formData.conditions) {
            alert('Debe aceptar las condiciones.');
            return;
        }
        // Si no se marca "Asisto", no se permite enviar el formulario
        if (!formData.asisto) {
            alert('Debe marcar al menos "Asisto" para continuar.');
            return;
        }

        // Caso 1: Solo "Asisto" (no compito)
        if (formData.asisto && !formData.compito) {
            // Armar objeto de asistencia
            const assistData: Assists = {
                name: formData.name,
                email: formData.email,
                conditions: formData.conditions
            };
            const assistRes = await fetch('/api/assists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(assistData)
            });
            const assistResult = await assistRes.json();
            if (!assistRes.ok) {
                alert('Error al registrar asistencia: ' + assistResult.error);
            } else {
                alert('Asistencia registrada correctamente.');
                resetForm();
                window.close();
            }
            return;
        }

        // Caso 2: "Asisto" y "Compito" marcados
        if (formData.asisto && formData.compito) {
            // Validar campos adicionales
            if (!formData.contact.trim()) {
                alert('Debe ingresar un contacto de emergencia.');
                return;
            }
            if (!formData.sex) {
                alert('Debe seleccionar el tipo de competencia.');
                return;
            }
            if (!formData.free && !formData.speed) {
                alert('Debe seleccionar al menos una competencia: Freestyle o Speed.');
                return;
            }

            // Primero, registrar la asistencia
            const assistData: Assists = {
                name: formData.name,
                email: formData.email,
                conditions: formData.conditions
            };
            const assistRes = await fetch('/api/assists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(assistData)
            });
            const assistResult = await assistRes.json();
            if (!assistRes.ok) {
                alert('Error al registrar asistencia: ' + assistResult.error);
                return;
            }
            // Se asume que el endpoint de asistencia retorna un objeto con el registro creado y su id
            const assistId = assistResult[0]?.id;
            if (!assistId) {
                alert('No se pudo obtener el ID de la asistencia.');
                return;
            }

            const inscriptionData: Inscription = {
                contact: formData.contact,
                free: formData.free,
                speed: formData.speed,
                sex: formData.sex,
                assist_id: assistId,

            };
            const inscriptionRes = await fetch('/api/inscriptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inscriptionData)
            });
            const inscriptionResult = await inscriptionRes.json();
            if (!inscriptionRes.ok) {
                alert('Error al registrar inscripción: ' + inscriptionResult.error);
            } else {
                alert('Inscripción registrada correctamente.');
                resetForm();
                window.close();
            }
        }
    };

    return {
        formData,
        resetForm,
        handleSubmit
    };
}
