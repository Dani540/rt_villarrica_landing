<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface Card {
  title: string;
  description: string;
  previewText: string;
  link?: string;
  scrollTo?: string;
}

const props = defineProps<{
  card?: Card;
  isExpanded: boolean;
}>();

const emit = defineEmits(['click']);

const handleClick = () => {
  if (props.isExpanded) {
    if (props.card?.link) {
      const url = new URL(props.card.link, window.location.origin);
      url.searchParams.append('from', window.location.pathname);
      window.open(url.toString(), '_blank');
    } else if (props.card?.scrollTo) {
      const element = document.getElementById(props.card.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  emit('click');
};
</script>

<template>
  <div
      class="card"
      :class="{ expanded: isExpanded }"
      @click="handleClick"
  >
    <h2>{{ card?.title }}</h2>
    <p v-if="isExpanded">{{ card?.description }}</p>
    <p v-else>{{ card?.previewText }}</p>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  min-width: 200px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  opacity: 1;
  cursor: pointer;
}

.card.expanded {
  position: absolute;
  width: auto;
  height: auto;
  z-index: 10;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.1s ease-in-out;
}

.card:not(.expanded) {
  opacity: 0.6;
}

.card:not(.expanded):hover {
  opacity: 0.7;
}

.card:hover {
  border-color: #1b4e6e;
  box-shadow: 0 0 15px rgba(0, 128, 255, 0.5);
}

.card:hover h2,
.card:hover p {
  color: #0005da;
}

@media (max-width: 480px) {
  .card:not(.expanded){
    opacity: 0.9;
  }
}
</style>