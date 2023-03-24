        

<template>
    <div class="main" v-if="!loading">
        <SearchResult v-for="company in (data as Item[])" :item="company" :key="company.id" />
    </div>

    <LoadingComponent v-else />
</template>

<script setup lang="ts">
import SearchResult from '@/components/SearchResult.vue'
import { useFilterStore, useSearchStore } from '@/stores/search';
import supabase from '@/router/supabase';
import type { Item } from '@/stores/search';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import LoadingComponent from './LoadingComponent.vue';


const filter = useFilterStore();
const store = useSearchStore();
const route = useRoute();
const loading = ref(false);
let data = ref([] as any[]);

async function fetch() {
    loading.value = true;
    data.value = [];
    if (filter.certified == 'certified') {
        const res = await supabase.from('companies').select().ilike('name', `%${store.search}%`).eq('certified', true);
        data.value = res.data as [];
    } else if (filter.certified == 'all'){
        const res = await supabase.from('companies').select().ilike('name', `%${store.search}%`);
        data.value = res.data as [];
    }
    loading.value = false;
}
fetch()
</script>

<style scoped>
.main {
    width: 100%;
}
</style>