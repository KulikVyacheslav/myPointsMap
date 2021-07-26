<template>
    <div style="width: 100%; height: 100%">
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
            ></ymap-marker>
        </yandex-map>
        <button @click="onChangeMode">{{ addButtonText }}</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { yandexMap, ymapMarker } from 'vue-yandex-maps';
import { Marker } from '@/types/data';
import { nanoid } from 'nanoid';
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { ADD_COORDINATES, TOGGLE_ADD_MODE } from '@/store/modules/mutation-types';
import { MAP_MODULE } from '@/store/modulesName';
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
                this.$store.commit(getTypeOfModule(MAP_MODULE, ADD_COORDINATES), {
                    coordinates: e.get('coords'),
                    id: nanoid()
                } as Marker);
            }
        },
        onChangeMode() {
            const cursorType = this.isAddMode ? 'grab' : 'arrow';
            this.$refs.map.myMap.cursors.push(cursorType);
            this.$store.commit(getTypeOfModule(MAP_MODULE, TOGGLE_ADD_MODE));
        }
    },
    computed: {
        ...mapState('mapModule', ['isAddMode', 'markers', 'selectedMarkerId']),
        ...mapGetters('mapModule', ['getSelectedMarkerCoordinates', 'addButtonText'])
    }
});
</script>

<style scoped lang="scss">
@import 'style';
</style>
