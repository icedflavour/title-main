<template>
    <div class="carousel-container">
      <swiper :slides-per-view="1" navigation pagination>
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-auto">
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  const slides = [
    { image: 'img/slider/boxers-banner-ua.jpg', alt: 'Image 1' },
    { image: 'img/slider/start-banner-ua.jpg', alt: 'Image 2' },
  ];
  </script>
  
  <style scoped>
  .carousel-container {
    width: 100%;
  }
  </style>