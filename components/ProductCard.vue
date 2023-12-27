<template>
    <div class="text-center bg-white h-full">
        <img :src="product.image" alt="imgProduct" class="w-36 h-auto mx-auto">
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">Посмотреть детали</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>