<script setup lang="ts">
import AppButton from './AppButton.vue';
import NavLanguageButton from './NavLanguageButton.vue';
import NavLogo from './NavLogo.vue';
import {useRoute, useRouter} from 'vue-router';
const router = useRouter();
const route = useRoute();
interface Props {

}
</script>

<template>
    <main>
        <nav>
            <NavLogo width="3rem" @click="router.push({path: '/'})"/>
            <div class="">
                <NavLanguageButton />
                <AppButton text="Sign up" />
            </div>
        </nav>
        <a v-if="route.path == '/search'" @click="router.push({path: '/'})">&lt; Home</a>
        <a v-if="route.path.includes('company')" @click="router.push({path: '/search'})">&lt; Home</a>
    </main>

</template>

<style scoped>
main {
    padding: 1rem;

}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
}

div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

 a{
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 12px;
    color: var(--primary-color);
    margin: 0;
    cursor: pointer;
    text-decoration: underline;
 }

</style>