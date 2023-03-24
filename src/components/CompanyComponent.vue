<template> 
    <main>
        <CompanyHeader :company="company"/>
        <CompanyInfo :company="company" />
    </main>
</template>

<script setup lang="ts">
import CompanyHeader from '@/components/CompanyHeader.vue';
import CompanyInfo from '@/components/CompanyInfo.vue';
import supabase from '@/router/supabase';
import type { Item } from '@/stores/search';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
let company = ref({} as Item)
const res = await supabase.from('companies').select().eq('id', route.params.id)
company.value = res.data && res.data[0];
</script>

<style scoped>
main {
    padding: .5rem;
}
</style>