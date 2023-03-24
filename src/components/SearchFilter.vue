<template>
    <div id="main">
        <h1>FILTERS</h1>
        <a @click="resetFilters">Reset</a>
        <h2>Certified</h2>
        <button :class="{picked: filter.certified == 'all'}" @click.prevent="filter.setCertified('all')">All</button>
        <button :class="{picked: filter.certified == 'certified'}" @click.prevent="filter.setCertified('certified')">Certified</button>
        <!-- <a 
        :href="'/search?q='+ search.search +'&l=' + filter.location + '&c=' + filter.certified"
        class="submit">Apply</a> -->

    </div>
</template>

<script setup lang="ts">
import { useFilterStore, useSearchStore } from '@/stores/search';
import { useRouter } from 'vue-router';
const filter = useFilterStore()
const search = useSearchStore()
const router = useRouter();

function resetFilters() {
    filter.setCertified('all');
}
</script>

<style scoped>
#main {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    min-width: 80px;
    max-width: 200px;
    text-align: center;
}

label {
    font-size: 10px;
    font-family: Montserrat Alternates;
    font-weight: 500;
}

h1 {
    font-family: Montserrat;
    font-size: 14px;
    margin: 0;
}

button, .submit{
    text-decoration: none;
    font-size: 10px;
    font-family: Montserrat;
    border-radius: .25rem;
    text-align: center;
    font-weight: Bold;
    width: 80%;
    height: 1rem;
    margin-bottom: 5px;
    display: block;
    border: 1px solid var(--tertiary-color);
    color: var(--tertiary-color);
    transition: color 150ms ease-in-out;
}

.picked {
    background-color: var(--tertiary-color);
    color: white;
}
.submit {
    margin-top: 20px;
    border: 1px solid var(--primary-color);
    background-color: var(--primary-color);
    color: white;
}
h2 {
    font-family: Montserrat;
    font-size: 12px;
}

a {
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 10px;
    color: var(--primary-color);
    margin: 0;
    cursor: pointer;
}

a:hover {
    text-decoration: underline;
}

input {}
</style>