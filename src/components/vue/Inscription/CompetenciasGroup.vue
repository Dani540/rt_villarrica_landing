<script setup lang="ts">
import FormCheckbox from './FormCheckbox.vue';
import { defineProps } from 'vue';

const props = defineProps({
  formData: { type: Object, required: true },
  disabled: { type: Boolean, default: false }
});
</script>

<template>
  <div class="competencias-group">
    <label>Competencias</label>
    <div class="checkbox-group">
      <FormCheckbox id="free" label="Freestyle & Best Trick" v-model="formData.free" :disabled="disabled"/>
      <FormCheckbox id="speed" label="Speed" v-model="formData.speed" :disabled="disabled"/>
      <div class="select-group">
        <label for="sex">Tipo de compentencias:</label>
        <select id="sex" v-model="formData.sex" required :disabled="disabled">
          <option disabled value="">Selecciona una opción</option>
          <option value="femenino">Femenino</option>
          <option value="masculino">Masculino</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.competencias-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Contenedor del select */
.select-group {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 4px;
  width: 100%;
  max-width: 400px; /* Ajusta según tus necesidades */
}

/* Estilo del select */
.select-group select {
  width: 80%;
  margin-block: 4px;
  color: #333;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}


/* Cambiar color del borde al enfocar */
.select-group select:focus {
  border-color: #6b85a1;
  outline: none;
}

</style>