<template>
    <main>
        <a :href="props.item.imgURL">
            <div class="img">
            </div>
            <div class="">
                <p class="name">{{ props.item.name }}</p>
                <p class="vendor">{{ props.item.vendor }}</p>
            </div>
        </a>
    </main>
</template>

<script setup lang="ts">
    interface Props {
        item : {
            name: string,
            vendor: string,
            imgURL: string
        }

    }
    const props = defineProps<Props>()
    const URL = props.item.imgURL ? `url('${props.item.imgURL}')` :  ''
</script>

<style scoped>
    main {
    }
    
    a {
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        color: black;

    }
    .img {
        background-color: var(--secondary-color);
        background-image: v-bind(URL);
        background-size: cover;
        height: 6rem;
        width: 6rem;
        border-radius: 1rem;
    }

    p {
        margin: 0 0;
        font-size: 12px;
    }
    .name {
        font-weight: 500;
    }

    .vendor {
        margin: 0;
        font-weight: bold;

    }
</style>