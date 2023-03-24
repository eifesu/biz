<script setup lang="ts">
    import {Icon} from "@iconify/vue"
</script>

<template>
    <div >
        <Icon icon="twemoji:flag-france" width="1.5rem"/>
        <p>FR</p>
    </div>
</template>

<style scoped>
    div {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    p {
        font-family: Montserrat;
        font-weight: bold;
        font-weight: 10px;
    }
</style>
