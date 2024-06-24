import { defineStore } from 'pinia';
import type { CartItem } from '@/types/cart';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    itemCount: (state) => state.items.length,
    totalAmount: (state) => state.items.reduce((total, item) => total + item.price, 0),
  },
  actions: {
    addItem(item: CartItem) {
      this.items.push(item);
    },
    removeItem(index: number) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
});
