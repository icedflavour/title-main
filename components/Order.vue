<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Order Summary</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index" class="flex justify-between py-2">
          <span>{{ item.title }}</span>
          <span>{{ formatCurrency(item.price) }}</span>
          <button @click="removeItem(index)" class="text-red-500">Remove</button>
        </li>
      </ul>
      <div class="mt-4 text-right">
        <h2 class="text-xl font-bold">Total: {{ formatCurrency(totalAmount) }}</h2>
      </div>
      <button @click="clearCart" class="bg-red-500 text-white px-4 py-2 rounded mt-4">Clear Cart</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { useCartStore } from '@/stores/cart';
  import { formatCurrency } from '@/utils/currency';
  import type { CartItem } from '@/types/cart';
  
  const cartStore = useCartStore();
  
  const cartItems = computed(() => cartStore.items as CartItem[]);
  const totalAmount = computed(() => cartStore.totalAmount);
  
  const removeItem = (index: number) => {
    cartStore.removeItem(index);
  };
  
  const clearCart = () => {
    cartStore.clearCart();
  };
  </script>