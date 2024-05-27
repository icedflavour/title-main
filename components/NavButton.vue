<template>
    <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <button class="btn-nav">
        {{ label }}
      </button>
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  defineProps({
    label: String
  });

  const emit = defineEmits(['hover-change']);

  const handleMouseEnter = () => {
    emit('hover-change', true);
  };

  const handleMouseLeave = () => {
    emit('hover-change', false);
  };
  
  </script>