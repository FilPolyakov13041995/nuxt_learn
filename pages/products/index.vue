<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products" :key="product.id" class="p-3 border border-gray-100 rounded-md bg-slate-200">
                <!-- <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink> -->
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>


definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>