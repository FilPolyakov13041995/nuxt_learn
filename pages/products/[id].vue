<template>
    <div>
        <ProductDetails :product="product" />
    </div>
    <div class="mt-5">
        <NuxtLink to="/products" class="p-2 bg-orange-600 mt-3 text-white rounded-md">Back</NuxtLink>
    </div>
    
</template>

<script setup>
import { useRoute } from 'vue-router';
const { id } = useRoute().params

definePageMeta({
    layout: 'products'
})

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${id}`)

// обработали ошибку при отсутствии продукта
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

</script>