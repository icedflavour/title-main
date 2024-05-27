<template>
    <NavBar @hover-change="handleHoverChange"></NavBar>
    <NavExtend v-if="isHovered"></NavExtend>
</template>
  
<script setup>
const isHovered = false;

function handleHoverChange(value) {
  this.isHovered = value;
}
</script>