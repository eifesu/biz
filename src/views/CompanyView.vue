<template> 
    <Suspense>
        <CompanyComponent />
        <template #fallback>
            <LoadingComponent />
        </template>
    </Suspense>
</template>

<script setup lang="ts">
import CompanyComponent from '@/components/CompanyComponent.vue';
import LoadingComponent from '@/components/LoadingComponent.vue';


</script>

<style scoped>
main {
    padding: .5rem;
}
</style>