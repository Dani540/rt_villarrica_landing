<script setup lang="ts">
import PersonalDataGroup from './PersonalDataGroup.vue';
import CompetenciasGroup from './CompetenciasGroup.vue';
import PayPalButton from './PayPalButton.vue';
import FormCheckbox from "@/components/vue/Inscription/FormCheckbox.vue";
import { useRegistration } from '@/composables/useRegistrations';
import { onMounted } from "vue";

const { formData, resetForm, handleSubmit } = useRegistration();

onMounted(() => {
  resetForm();
});
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>Formulario de Inscripción</h2>
    </div>
    <div class="card-content">
      <form @submit.prevent="handleSubmit" class="form">
        <div class="form-group-container">
          <FormCheckbox
              v-model="formData.asisto"
              :label="'Asisto al evento'"
              id="asisto"
          />
        </div>

        <div class="form-group-container" v-if="formData.asisto">
          <FormCheckbox
              v-model="formData.compito"
              :label="'Compito en el evento'"
              id="compito"
          />
        </div>

        <!-- Grupo de Datos Personales -->
        <div class="form-group-container">
          <PersonalDataGroup :formData="formData" />
        </div>

        <!-- Grupo de Competencias -->
        <div class="form-group-container" v-if="formData.compito">
          <CompetenciasGroup :formData="formData" />
        </div>

        <div class="form-group-container">
          <FormCheckbox
              v-model="formData.conditions"
              :label="'Acepta condiciones del evento y responsabilidad personal de cuidado. La organizacion no se hará responsable de las lesiones que se puedan producir (Sin embargo, habrá ambulancia para transporte urgente).'"
              id="conditions"
          />
        </div>

        <!-- Botón de Envío -->
        <div class="form-group-container">
          <button type="submit" class="submit-button">Enviar</button>
        </div>
      </form>
    </div>
    <!-- TODO: paypal_button
    <div class="card-footer">
      <div class="donation-section">
        <label>Donación para la Mang</label>
        <PayPalButton />
      </div>
    </div>
    -->
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}
.card-header, .card-footer {
  padding: 1rem 0;
  border-bottom: 1px solid #ccc;
}
.card-content {
  padding: 1rem 0;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group-container {
  margin-bottom: 1rem;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  background-color: #1b4e6e;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.submit-button:hover {
  background-color: #145a7a;
}
.donation-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>