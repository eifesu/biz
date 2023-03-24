<template>
    <main>
        <SearchFilter />
        <Suspense>
            <SearchResults :key="(store.search as string) + (filter.certified as string)" />
            <template #fallback>
                <LoadingComponent />
            </template>
        </Suspense>
    </main>
</template>

<script setup lang="ts">
// @ts-ignore
import SearchFilter from '@/components/SearchFilter.vue'
import { useFilterStore, useSearchStore } from '@/stores/search';
import LoadingComponent from './LoadingComponent.vue';
import SearchResults from './SearchResults.vue';
const filter = useFilterStore();
const store = useSearchStore();
</script>
<style scoped>
main {
    display: flex;
    gap: .25rem;
    justify-content: space-between;
}
</style>