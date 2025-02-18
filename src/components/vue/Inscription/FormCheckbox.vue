<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});
</script>

<template>
  <div class="checkbox-item">
    <input
        type="checkbox"
        :id="id"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        :disabled="disabled"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<style scoped>
.checkbox-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #333;
}

.checkbox-item input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 2px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.checkbox-item input[type="checkbox"]:checked {
  background-color: #1b4e6e;
  border-color: #1b4e6e;
}

.checkbox-item label {
  cursor: pointer;
}
</style>