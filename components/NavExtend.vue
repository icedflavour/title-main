<template>
    <div v-if="activeLabel" class="flex flex-col bg-[#212529] shadow-md w-screen">
      <div v-if="activeLabel === 'Categories'">
        <!-- Render Categories List -->
        <p>Category 1</p>
        <p>Category 2</p>
        <p>Category 3</p>
      </div>
      <div v-else-if="activeLabel === 'Gloves'">
        <!-- Render Gloves List -->
        <p>Glove 1</p>
        <p>Glove 2</p>
        <p>Glove 3</p>
      </div>
      <div v-else-if="activeLabel === 'Shoes'">
        <!-- Render Shoes List -->
        <p>Shoe 1</p>
        <p>Shoe 2</p>
        <p>Shoe 3</p>
      </div>
      <div v-else-if="activeLabel === 'TOP Sales'">
        <!-- Render TOP Sales List -->
        <p>Sale 1</p>
        <p>Sale 2</p>
        <p>Sale 3</p>
      </div>
      <div v-else-if="activeLabel === 'New'">
        <!-- Render New Items List -->
        <p>New Item 1</p>
        <p>New Item 2</p>
        <p>New Item 3</p>
      </div>
      <div v-else-if="activeLabel === 'Sale'">
        <!-- Render Sale Items List -->
        <p>Discount 1</p>
        <p>Discount 2</p>
        <p>Discount 3</p>
      </div>
      <div v-else-if="activeLabel === 'Contacts'">
        <!-- Render Contacts List -->
        <p>Contact 1</p>
        <p>Contact 2</p>
        <p>Contact 3</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    activeLabel: String
  });
  </script>