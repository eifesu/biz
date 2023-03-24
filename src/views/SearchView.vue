<template>
    <main>
        <SearchBar />
        <SearchPanes />
    </main>
</template>

<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchPanes from '@/components/SearchPanes.vue'
</script>

<style scoped>
main {
    padding: .5rem;
}
</style>