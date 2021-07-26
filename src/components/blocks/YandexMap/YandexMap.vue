<template>
    <yandex-map
        ref="map"
        :coords="this.getSelectedMarkerCoordinates || settings.center"
        zoom="17"
        :settings="settings"
        @click="onMapClick"
    >
        <ymap-marker
            v-for="{ id, coordinates } in markers"
            :key="id"
            :marker-id="id"
            marker-type="placemark"
            :coords="coordinates"
            :balloon="{ body: `Метка: ${id}` }"
            @click="onMarkerClick(id)"
        ></ymap-marker>
    </yandex-map>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { Marker } from '@/types/data';
import { nanoid } from 'nanoid';
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { SET_SELECTED_MARKER_ID } from '@/store/modules/mutation-types';
import { MAP_MODULE } from '@/store/modulesName';
import { ASYNC_ADD_COORDINATES } from '@/store/modules/action-types';
import settings from './constants';

export default Vue.extend({
    name: 'YandexMap',
    components: { yandexMap, ymapMarker },
    data: () => ({
        settings
    }),
    methods: {
        onMapClick(e: { get: (type: string) => [number, number] }) {
            if (this.isAddMode) {
                this.$store.dispatch(getTypeOfModule(MAP_MODULE, ASYNC_ADD_COORDINATES), {
                    coordinates: e.get('coords'),
                    id: nanoid()
                } as Marker);
            }
        },
        onMarkerClick(id: string) {
            this.$store.commit(getTypeOfModule(MAP_MODULE, SET_SELECTED_MARKER_ID), id);
        }
    },
    computed: {
        ...mapState('mapModule', ['isAddMode', 'markers', 'selectedMarkerId', 'error']),
        ...mapGetters('mapModule', ['getSelectedMarkerCoordinates'])
    },
    watch: {
        isAddMode() {
            const cursorType = this.isAddMode ? 'arrow' : 'grab';
            this.$refs.map.myMap.cursors.push(cursorType);
        }
    }
});
</script>

<style scoped lang="scss">
@import 'style';
</style>
