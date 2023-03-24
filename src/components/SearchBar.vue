<template>
    <main>
        <div class="bar">

            <div class="search">
                <Icon icon="ic:round-search" class="icon" width="1.5rem" />
                <input type="text" placeholder="Search anything..." v-model="search">
            </div>
            <AppButton @click="searchStore.setSearch(search as string)" style="font-size: 10px; height: 1.5rem;"
                text="Search" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AppButton from './AppButton.vue';
const router = useRouter()
const route = useRoute()
const searchStore = useSearchStore()
const search = ref(searchStore.search)
const loading = ref(false)
</script>

<style scoped>
main {
    display: flex;
    gap: .5rem;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: Montserrat Alternates;
}

.bar {
    display: flex;
    align-items: center;
    width: 100%;
    gap: .5rem;
}

a {
    font-size: 12px;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}

.icon {
    color: var(--primary-color);
    opacity: 0.5;

}

.search {
    padding: 4px 16px;
    gap: .5rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: var(--secondary-color);
    align-items: center;
    border-radius: .5rem;
}


input {
    width: 100%;
    height: 1.5rem;
    font-weight: 500;
    color: var(--primary-color);
    font-size: 10px;
}

input::placeholder {
    color: var(--primary-color);
    opacity: 0.5;
}

@media only screen and (min-width: 640px) {
    h1 {
        font-size: 36px;
    }

    p {
        font-size: 16px;
    }
}
</style>