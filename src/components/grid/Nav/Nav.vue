<template>
    <v-navigation-drawer v-model="open" absolute bottom temporary>
        <v-list-item>
            <v-container>
                <v-row align="center" justify="center">
                    <v-icon large>mdi-map-marker-radius</v-icon>
                </v-row>
            </v-container>
        </v-list-item>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6 text-center">{{ applicationName }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list nav dense>
            <v-list-item-group v-model="selectedItem" active-class="deep-purple--text text--accent-4">
                <v-list-item :key="name" v-for="{ name, goTo, icon } in navigationItems" @click="goTo">
                    <v-list-item-icon
                        ><v-icon>{{ icon }}</v-icon></v-list-item-icon
                    >
                    <v-list-item-title>{{ name }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import navigationItems from '@/components/grid/Nav/constants';
import { applicationName } from '@/constants/global';

export default Vue.extend({
    name: 'Nav',
    props: {
        isOpen: { type: Boolean, required: true },
        selectedItemIndex: { required: true }
    },
    data: () => ({
        navigationItems,
        applicationName
    }),
    computed: {
        open: {
            get(): boolean {
                return this.isOpen;
            },
            set(value) {
                this.$emit('toggleNavBar', value);
            }
        },
        selectedItem: {
            get(): number {
                return this.selectedItemIndex;
            },
            set(value) {
                this.$emit('setSelectedItemIndex', value);
            }
        }
    }
});
</script>

<style scoped lang="scss"></style>
