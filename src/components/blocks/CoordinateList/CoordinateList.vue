<template>
    <v-card class="mx-auto" width="100%" height="100%" tile>
        <v-list flat>
            <v-subheader>Координаты</v-subheader>
            <v-list-item-group v-model="selectedItem" color="deep-purple accent-4">
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

export default Vue.extend({
    name: 'CoordinateList',
    data: () => ({}),
    updated() {
        console.log(this.$store.state.mapModule.selectedMarkerId);
    },
    computed: {
        ...mapState('mapModule', ['markers']),
        selectedItem: {
            get() {
                return this.$store.getters.getSelectedMarkerIndex;
            },
            set(index: number | undefined) {
                this.$store.commit(
                    'mapModule/setSelectedMarkerId',
                    index !== undefined ? this.markers[index].id : undefined
                );
            }
        }
    }
});
</script>

<style scoped lang="scss"></style>
