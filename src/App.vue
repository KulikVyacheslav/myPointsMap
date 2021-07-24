<template>
    <MainLayout />
</template>

<script lang="ts">
import Vue from 'vue';
import MainLayout from '@/components/Layouts/MainLayout/MainLayout.vue';

export default Vue.extend({
    name: 'App',
    components: {
        MainLayout
    }
});
</script>
