<template>
    <div class="border p-4 rounded-lg shadow">
      <h2 class="text-lg font-bold">{{ item.title }}</h2>
      <p class="text-gray-600">{{ formatCurrency(item.price) }}</p>
      <button @click="addToCart" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">BUY</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import { useCartStore } from '@/stores/cart';
  import { formatCurrency } from '@/utils/currency';
  import type { CartItem } from '@/types/cart';
  
  const props = defineProps<{
    item: CartItem
  }>();
  
  const cartStore = useCartStore();
  
  const addToCart = () => {
    cartStore.addItem(props.item);
  };
  </script>