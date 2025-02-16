<script setup lang="ts">
import { ref, computed, nextTick } from 'vue';
import Card from './Card.vue';

interface Card {
  title: string;
  description: string;
  previewText: string;
  link?: string;
  scrollTo?: string;
}

const props = defineProps<{
  cards: Card[];
}>();

const expandedCardIndex = ref<number | null>(null);
const animationDelay = ref(0);

const handleCardClick = async (index: number) => {
  event.stopPropagation();
  if (expandedCardIndex.value === index) {
    expandedCardIndex.value = null;
  } else {
    expandedCardIndex.value = index;
    await nextTick();
    animationDelay.value = 0;
  }
};

const handleWrapperClick = () => {
  expandedCardIndex.value = null;
};

const isAnyCardExpanded = computed(() => expandedCardIndex.value !== null);
</script>

<template>
  <div :class="['card-wrapper', { 'expanded-wrapper': isAnyCardExpanded }]" @click="handleWrapperClick">
    <Card
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :is-expanded="expandedCardIndex === index"
        @click="() => handleCardClick(index)"
        :style="{ transitionDelay: `${animationDelay.value * index}s` }"
    />
  </div>
</template>

<style scoped>
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(227, 227, 227, 0.6);
  user-select: none;
  transition: all 0.1s ease-in-out;
  opacity: 1;
  border-radius: 0.5rem;
  min-width: 200px;
  min-height: 200px;
}

.card-wrapper.expanded-wrapper {
  background-color: #d3d3d3;
}

.card-wrapper > * {
  flex: 1 1 calc(33.333% - 1rem);
  max-width: calc(33.333% - 1rem);
  height: 100%;
  box-sizing: border-box;
}
</style>