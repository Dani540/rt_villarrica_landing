<script setup lang="ts">
import { useInscriptionForm } from '@/composables/useInscriptionForm';
import PersonalDataGroup from './PersonalDataGroup.vue';
import CompetenciasGroup from './CompetenciasGroup.vue';
import PayPalButton from './PayPalButton.vue';

const { formData, handleSubmit } = useInscriptionForm();
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h2>Formulario de Inscripción</h2>
    </div>
    <div class="card-content">
      <form @submit.prevent="handleSubmit" class="form">
        <!-- Grupo de Datos Personales -->
        <div class="form-group-container">
          <PersonalDataGroup :formData="formData" />
        </div>

        <!-- Grupo de Competencias -->
        <div class="form-group-container">
          <CompetenciasGroup :formData="formData" />
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