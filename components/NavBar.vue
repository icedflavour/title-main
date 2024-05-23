<template>
    <nav class="flex w-screen bg-[#212529] justify-center items-center px-8">
        <NavLine></NavLine>
        <NavButton label="Categories" @hover="handleHover">
        </NavButton>
        <NavLine></NavLine>
        <NavButton label="Gloves" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
        <NavButton label="Shoes" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
        <NavButton label="TOP Sales" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
        <NavButton label="New" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
        <NavButton label="Sale" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
        <NavButton label="Contacts" @hover="handleHover"></NavButton>
        <NavLine></NavLine>
      </nav>
      <NavExtend :activeLabel="activeLabel"></NavExtend>
</template>

<script setup>
import { ref } from 'vue';
import NavLine from './NavLine.vue';
import NavButton from './NavButton.vue';
import NavExtend from './NavExtend.vue';

const activeLabel = ref('');

const handleHover = (label) => {
  activeLabel.value = label;
};
</script>