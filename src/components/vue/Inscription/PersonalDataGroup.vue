<script setup lang="ts">
import FormInput from './FormInput.vue';
import { defineProps } from 'vue';

const props = defineProps({
  formData: { type: Object, required: true }
});
</script>

<template>
  <div class="personal-data-group">
    <FormInput id="nombre" label="Nombre" v-model="formData.nombre" required />
    <FormInput id="email" label="Correo electrónico" type="email" v-model="formData.email" required />
  </div>
</template>

<style scoped>
  .personal-data-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>