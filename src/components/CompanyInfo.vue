<template>
    <main>
        <div class="left">
            <h1>DESCRIPTION</h1>
            <p>{{ props.company.desc }}</p>
            <h1>SERVICES</h1><br/>
                <a v-for="tag in props.company.tags" v-bind:key="tag" class="service">{{tag}}</a>
        </div>
        <div class="right">
            <div class="certified"></div>
            <div class="info">
                <h1 class="name">{{ props.company.name}}</h1>
                <p class="location">{{ props.company.location}}</p>
            </div>
            <a href="apercudigital.com">WEBSITE</a>
            <a href="tel:0505201515">TELEPHONE</a>
            <a href="mailto:apercudigital@gmail.com" class="contact">CONTACT</a>
        </div>
    </main>
</template>

<script setup lang="ts">
import type { Item } from '@/stores/search';

    interface Props {
        company: Item
    }
    const props = defineProps<Props>();
</script>

<style scoped>
main {
    display: flex;
    gap: 1rem;
}
.info {
    text-align: center;
}
    h1 {
        display: inline-block;
        font-size: 14px;
        font-family: Montserrat;
        border-bottom: 3px solid var(--primary-color);
        margin-bottom: 10px;
    }

    p {
        margin: 0;
        font-family: Montserrat;
        font-size: 10px;
        font-weight: 500;
    }

    .service {
        all: unset;
        display: block;
        width: fit-content;
        margin-bottom: 5px;
        font-size: 10px;
        font-family: Montserrat;
        border-radius: .75rem;
        font-weight: bold;
        color: var(--primary-color);
        border: 2px solid var(--primary-color);
        padding: .25rem 1rem;
    }

    .left {
        flex: 1.5;
    }

    .right {
        flex: 1;
        padding: 1rem;
        border-radius: .5rem;
        background-color: var(--secondary-color);
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: .5rem;
    }
    .right h1 {
        font-size: 16px;
        border: none;
        margin: 0;
        
    }

    .location {
        color: var(--primary-color);
        font-weight: bold;
    }
    
    a {
        text-decoration: none;
        color: black;
        background-color: white;
        font-family: Montserrat;
        font-weight: bold;
        font-size: 10px;
        width: 7rem;
        height: 2rem;
        text-align: center;
        border-radius: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact {
        background-color: var(--primary-color);
        color: white;
    }
</style>