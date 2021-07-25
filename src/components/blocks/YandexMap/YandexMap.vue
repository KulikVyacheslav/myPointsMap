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
                :balloon="{ body: `Метка №${id}` }"
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
import settings from './constants';

export default Vue.extend({
    name: 'YandexMap',
    components: { yandexMap, ymapMarker },
    data: () => ({
        settings
    }),
    methods: {
        onMapClick(e) {
            if (this.isAddMode) {
                this.$store.commit('mapModule/addCoordinate', {
                    coordinates: e.get('coords'),
                    id: Math.random().toString()
                } as Marker);
            }
        },
        onChangeMode() {
            const cursorType = this.isAddMode ? 'grab' : 'arrow';
            this.$refs.map.myMap.cursors.push(cursorType);
            this.$store.commit('mapModule/toggleAddMode');
        }
    },
    updated() {
        console.log(this.getSelectedMarkerCoordinates, 'addButtonText');
    },
    computed: {
        ...mapState({
            isAddMode: state => state.mapModule.isAddMode,
            markers: state => state.mapModule.markers,
            selectedMarkerId: state => state.mapModule.selectedMarkerId
        }),
        ...mapGetters('mapModule', ['getSelectedMarkerCoordinates', 'addButtonText'])
    }
});
</script>

<style scoped lang="scss">
@import 'style';
</style>
