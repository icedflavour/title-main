<template>
    <h2 class="m-10 text-[#212529] p-2 font-main text-3xl">All items</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-20">
      <Card v-for="item in items" :key="item.id" :item="item" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Card from './Card.vue';
  import items from '@/assets/items.json'; // JSON file containing your items
  
  // Mock items for example
  // const items = ref([
  //   { id: 1, title: 'Item 1', price: 100 },
  //   { id: 2, title: 'Item 2', price: 200 },
  //   // more items
  // ]);
  
  </script>