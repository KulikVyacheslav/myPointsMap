<template>
    <v-row
        ><v-col cols="12"
            ><v-row
                ><v-col md="3"><CoordinateList /></v-col
                ><v-col md="9" class="yandex-map-container"><YandexMap /></v-col> </v-row
        ></v-col>
        <v-col cols="12" align-self="end"
            ><div class="add-button-container">
                <AddButtonBlock /></div
        ></v-col>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import YandexMap from '@/components/blocks/YandexMap/YandexMap.vue';
import CoordinateList from '@/components/blocks/CoordinateList/CoordinateList.vue';
import AddButtonBlock from '@/components/blocks/AddButtonBlock/AddButtonBlock.vue';

export default Vue.extend({
    name: 'Map',
    components: {
        YandexMap,
        CoordinateList,
        AddButtonBlock
    }
});
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
