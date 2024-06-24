<template>
    <div>
        <SliderCarousel></SliderCarousel>
        <Catalog />
    </div>
</template>

<script>
import SliderCarousel from '~/components/SliderCarousel.vue';
import CartIcon from '@/components/CartIcon.vue';
import Catalog from '@/components/Catalog.vue';

    definePageMeta({
        layout: 'default'
    })
</script>