<script setup lang="ts">
import FormInput from './FormInput.vue';
import { defineProps } from 'vue';

const props = defineProps({
  formData: { type: Object, required: true }
});
</script>

<template>
  <div class="personal-data-group" v-if="props.formData.asisto">
    <FormInput id="nombre" label="Nombre" v-model="props.formData.name" required />
    <FormInput id="email" label="Correo electrónico" type="email" v-model="props.formData.email" required />
    <FormInput id="contact" label="Contacto de Emergencia" placeholder="+56" v-model="props.formData.contact" type="tel" required/>
  </div>
</template>

<style scoped>
  .personal-data-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>