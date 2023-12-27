<template>
    <div>
        <h2 class="text-3xl p-2 text-center bg-slate-300">About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ad.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ad.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, ad.</p>
    </div>
    <div>{{ data }}</div>
</template>

<script setup>

const { data } = await useFetch('/api/currency/GBP')
console.log(data)

</script>