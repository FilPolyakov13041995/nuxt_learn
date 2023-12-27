<!-- Создали страницу ошибки сайта -->
<template>
    <div class="mt-7 max-w-sm mx-auto text-center">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <!-- Создали кнопку, которая будет перенаправлять на главную и удалять ошибку -->
        <button class="mt-7 btn" @click="hundleClearError">Go Home..</button>
    </div>
</template>

<script setup>

defineProps(['error'])


const hundleClearError = () => {
    clearError({ redirect: '/' })
}
</script>