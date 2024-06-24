<!-- components/CartIcon.vue -->
<template>
  <div class="relative">
    <button @click="goToCart" class="relative flex items-center bg-transparent text-[#212529] p-2 font-main font-medium flex items-center gap-2">
      <img class="w-5 h-5 fill-red-700 mg-2" src="/assets/img/icons/shopping-cart.svg" alt="">
      <span>Cart</span>
      <span v-if="itemCount > 0" class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">{{ itemCount }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const router = useRouter();

const itemCount = computed(() => cartStore.itemCount);

const goToCart = () => {
  router.push({ name: 'order' }); // Make sure the route name matches your order page route
};
</script>
