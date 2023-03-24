<template>
    <div>
        <h1>Find the <span>right business</span> <br /> for the right task.</h1>
        <p>Browse through 5000 businesses and find the right product or service</p>
        <div class="search">
            <Icon icon="ic:round-search" class="icon" width="1.5rem" />
            <input type="text" :value="store.search" 
            @input="(event) => store.setSearch((event.target as HTMLInputElement).value)"
            placeholder="Search anything...">
        </div>
        <AppButton text="Search" @click="() => {
            router.push({path: `/search`})
        }
        "/>
    </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import AppButton from './AppButton.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useSearchStore } from '@/stores/search';
const router = useRouter()
const store = useSearchStore();
</script>

<style scoped>
div {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 2rem;
    font-family: Montserrat Alternates;
}

.icon {
    color: var(--primary-color);
    opacity: 0.5;

}

.search {
    padding: 0 1rem;
    width: 100%;
    max-width: 1080px;
    display: flex;
    flex-direction: row;
    background-color: var(--secondary-color);
    align-items: center;
    border-radius: .5rem;
}

h1 {
    font-size: 24px;
    text-align: center;
    margin: 0px;
}

span {
    color: white;
    background-color: var(--primary-color);
    padding: 0 4px;
}

p {
    font-weight: 500;
    font-size: 12px;
    text-align: center;
}

input {
    width: 100%;
    height: 3rem;
    font-weight: 500;
    color: var(--primary-color);
    padding: 0 1rem;
    font-size: 14px;
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