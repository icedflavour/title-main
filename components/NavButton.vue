<template>
    <div @mouseenter="handleMouseEnter">
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

  const emit = defineEmits(['hover']);

  const handleMouseEnter = () => {
    emit('hover', props.label);
  };
  </script>