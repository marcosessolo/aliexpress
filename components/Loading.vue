<template>
    <div class="fixed bg-black bg-opacity-40 inset-0 w-full z-40 flex items-center justify-center h-[100vh] overflow-hidden">
        <div class="p-3 rounded-md bg-black bg-opacity-20">
            <client-only>
                <div class="flex items-center justify-center">
                    <font-awesome-icon :icon="['fas', 'spinner']" spin color="#FD374F" size="2xl" />
                </div>
            </client-only>
            <div class="text-center pt-5 text-xl font-bold text-white">Loading...</div>
        </div>
    </div>
</template>

<script setup>
</script>