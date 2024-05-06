<template>
    <div>
        <h2 class="bg-gray-400 p-4">Catalog Page</h2>
        <NuxtLink to="/catalog">To Catalog</NuxtLink>
        <NuxtLink to="/order">To Order</NuxtLink>
        <NuxtLink to="/">To Home</NuxtLink>
    </div>
</template>

<script>
    definePageMeta({
        layout: 'default'
    })
</script>