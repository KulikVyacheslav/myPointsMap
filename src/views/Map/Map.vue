<template>
    <v-row
        ><v-col><YandexMap /></v-col
    ></v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import YandexMap from '@/components/blocks/YandexMap/YandexMap.vue';

export default Vue.extend({
    name: 'Map',
    components: {
        YandexMap
    }
});
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
