<template>
    <div>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
        <p>{{ product.description }}</p>
        <p>{{ product.id }}</p>
        <img :src="product.image" class="w-60 h-auto" alt="img">
        <button class="btn flex">
            <i class="material-icons mr-2">add_shopping_cart</i>
            <span>Add to cart</span>
        </button>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>