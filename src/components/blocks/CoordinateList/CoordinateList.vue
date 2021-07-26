<template>
    <v-card class="mx-auto" width="100%" height="100%" tile>
        <v-list flat>
            <v-subheader>Координаты</v-subheader>
            <v-skeleton-loader
                v-if="isLoading"
                class="mx-auto"
                max-width="300"
                type="list-item, list-item-three-line"
            />
            <v-list-item-group
                v-else
                :value="getSelectedMarkerIndex"
                @change="onMarkerChange"
                :color="applicationColorTheme"
            >
                <v-list-item v-for="{ coordinates, id } in markers" :key="id">
                    <v-list-item-icon>
                        <v-icon>mdi-map-marker</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="getCoordinatesTitle(coordinates)"></v-list-item-title>
                    </v-list-item-content>
                    <v-btn icon @click.stop="onDeleteCoordinates(id)">
                        <v-icon color="grey lighten-1">mdi-delete</v-icon>
                    </v-btn>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapState } from 'vuex';
import { MAP_MODULE } from '@/store/modulesName';
import { SET_SELECTED_MARKER_ID } from '@/store/modules/mutation-types';
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { applicationColorTheme } from '@/constants/global';
import { ASYNC_DELETE_COORDINATES } from '@/store/modules/action-types';
import { getCoordinatesTitle } from './constants';

export default Vue.extend({
    name: 'CoordinateList',
    data: () => ({
        applicationColorTheme
    }),
    methods: {
        onDeleteCoordinates(id: string) {
            this.$store.dispatch(getTypeOfModule(MAP_MODULE, ASYNC_DELETE_COORDINATES), id);
        },
        onMarkerChange(index: number | undefined) {
            this.$store.commit(
                getTypeOfModule(MAP_MODULE, SET_SELECTED_MARKER_ID),
                index !== undefined ? this.markers[index].id : undefined
            );
        },
        getCoordinatesTitle
    },
    computed: {
        ...mapState('mapModule', ['markers', 'isLoading']),
        ...mapGetters('mapModule', ['getSelectedMarkerIndex'])
    }
});
</script>

<style scoped lang="scss"></style>
