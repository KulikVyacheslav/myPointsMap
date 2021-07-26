<template>
    <v-card class="mx-auto" width="100%" height="100%" tile>
        <v-list flat>
            <v-subheader>Координаты</v-subheader>
            <v-list-item-group v-model="selectedMarker" :color="applicationColorTheme">
                <v-list-item v-for="{ coordinates, id } in markers" :key="id">
                    <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="`${coordinates[0]} ${coordinates[1]}`"></v-list-item-title>
                    </v-list-item-content>
                    <v-btn icon>
                        <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { MAP_MODULE } from '@/store/modulesName';
import { SET_SELECTED_MARKER_ID } from '@/store/modules/mutation-types';
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { applicationColorTheme } from '@/constants/global';

export default Vue.extend({
    name: 'CoordinateList',
    data: () => ({
        applicationColorTheme
    }),
    updated() {
        console.log(this.$store.state.mapModule.selectedMarkerId);
    },
    computed: {
        ...mapState('mapModule', ['markers']),
        selectedMarker: {
            get() {
                return this.$store.getters.getSelectedMarkerIndex;
            },
            set(index: number | undefined) {
                this.$store.commit(
                    getTypeOfModule(MAP_MODULE, SET_SELECTED_MARKER_ID),
                    index !== undefined ? this.markers[index].id : undefined
                );
            }
        }
    }
});
</script>

<style scoped lang="scss"></style>
