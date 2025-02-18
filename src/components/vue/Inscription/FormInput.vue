<script setup lang="ts">

const props = defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
  modelValue: { type: [String, Number], default: '' },
  required: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue']);

// Función para procesar la entrada del usuario
function handleInput(e: Event) {
  let input = (e.target as HTMLInputElement).value;
  if (props.type === 'tel') {

    if (!input.startsWith('+56')) {
      input = '+56' + input.replace(/^\+?56/, '');
    }
    // Se limita la parte que sigue al prefijo a 8 caracteres
    const digits = input.slice(3).slice(0, 8);
    input = '+56' + digits;
  }

  emit('update:modelValue', input);
}

</script>

<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        @input="handleInput"
        :required="required"
        :maxlength="type === 'tel' ? 12 : undefined"
        :placeholder="placeholder"
        :disabled="disabled"
    />
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
