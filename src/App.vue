<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/grid/Header/Header.vue';

export default Vue.extend({
    name: 'App',
    components: { Header }
});
</script>

<style lang="scss">
@import 'assets/styles/global.scss';
</style>
