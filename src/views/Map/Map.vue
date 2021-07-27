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
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { MAP_MODULE } from '@/store/modulesName';
import { ASYNC_GET_ALL_COORDINATES } from '@/store/modules/action-types';
import { MapQueryParameters } from '@/types/data';

export default Vue.extend({
    name: 'Map',
    components: {
        YandexMap,
        CoordinateList,
        AddButtonBlock
    },
    mounted() {
        const { id } = this.$route.query as MapQueryParameters;
        this.$store.dispatch(getTypeOfModule(MAP_MODULE, ASYNC_GET_ALL_COORDINATES), id);
    }
});
</script>

<style scoped lang="scss">
@import './style.scss';
</style>
