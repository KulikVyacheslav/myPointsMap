<template>
    <v-row
        ><v-col md="3"><CoordinateList /></v-col><v-col md="9" class="yandex-map-container"><YandexMap /></v-col
    ></v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import YandexMap from '@/components/blocks/YandexMap/YandexMap.vue';
import CoordinateList from '@/components/blocks/CoordinateList/CoordinateList.vue';

export default Vue.extend({
    name: 'Map',
    components: {
        YandexMap,
        CoordinateList
    }
});
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
