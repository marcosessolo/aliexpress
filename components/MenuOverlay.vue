<template>
    <div id="MenuOverlay" class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
        <div class="flex items-center justify-between py-5">
            <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
                <img width="170" src="AliExpress-logo.png" alt="ali logo">
            </NuxtLink>
                <button @click="userStore.isMenuOverlay = false" class="rounded-full p-1 hover:bg-gray-200">
                    <font-awesome-icon :icon="['fas', 'xmark']" />
                </button>
        </div>
            <div class="flex items-center justify-between pt-5">
                <ul class="w-full">
                    <li @click="goTo('orders')"
                        class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer">
                        <div class="flex items-center text-[20px] font-semibold">
                            <font-awesome-icon :icon="['fas', 'pen-nib']" />
                            <span class="pl-4">My Orders</span>
                        </div>
                    </li>

                    <li @click="goTo('shoppingCart')"
                        class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer">
                        <div class="flex items-center text-[20px] font-semibold">
                            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                            <span class="pl-4">Cart</span>
                        </div>
                        <div
                            class="flex items-center justify-center bg-[#FF4646] h-[35px] min-w-[35px] text-lg text-white rounded-full">
                            {{ userStore.cart.length }}
                        </div>
                    </li>

                    <li v-if="false" @click="signOut()"
                        class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer">
                        <div class="flex items-center text-[20px] font-semibold">
                            <font-awesome-icon :icon="['fas', 'right-from-bracket']" />
                            <span class="pl-4">Sign Out</span>
                        </div>
                    </li>
                    <li v-else @click="signIn()"
                        class="relative flex items-center justify-between py-2.5 border-b px-3 hover:bg-gray-100 cursor-pointer">
                        <div class="flex items-center text-[20px] font-semibold">
                            <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
                            <span class="pl-4">Sign In / Register</span>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
</template>
<script setup>
import { useUserStore } from '../stores/user';
const userStore = useUserStore()

const client = useSupabaseClient()

const goTo = (url) => {
    console.log(`Navigating to: /${url}`);
    userStore.isMenuOverlay = false
    return navigateTo(`/${url}`)
}

const signOut = () => {
    client.auth.signOut()
    userStore.isMenuOverlay = false
    return navigateTo('/')
}

const signIn = () => {
    userStore.isMenuOverlay = false
    return navigateTo('/login')
}
</script>
