<template>
    <div>
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
  </script>