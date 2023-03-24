<template>
    <main>
        <div class="container">
            <h1>Trending products</h1>
            <a href="" target="_blank">See all</a>
        </div>
        <div class="items">
            <HomeItem v-for="item in items" :key="item.name" :item="item" />
        </div>
    </main>
</template>

<script setup lang="ts">
import HomeItem from './HomeItem.vue';
const items = [
    {
        id: 1,
        name: '5mm screws',
        vendor: 'IVORAL',
        imgURL: 'https://picsum.photos/200/300'
    },
    {
        id: 2,
        name: 'Steel beams',
        vendor: 'IVORAL',
        imgURL: 'https://picsum.photos/200/301'
    },
    {
        id: 3,
        name: 'Iron oven',
        vendor: 'IVORAL',
        imgURL: 'https://picsum.photos/200/302'
    },

]

</script>

<style scoped>
main {
    font-family: Montserrat Alternates;
    padding: .25rem 1rem;
}


.container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.items {
    display: flex;
    overflow-y: scroll;
}

a {
    margin: 0;
    text-decoration: none;
    color: var(--primary-color);
    font-weight: bold;
    font-size: 12px;

}

h1 {
    font-size: 24px;
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

