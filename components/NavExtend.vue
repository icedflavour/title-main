<template>
    <div class="flex flex-col bg-[#2B2F32] w-screen h-100 text-[#F8F9FA]">
        <p>Category 1</p>
        <p>Category 2</p>
        <p>Category 3</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    activeLabel: String
  });
  </script>