<template>
    <v-app>
        <div>
            <Header :toggleNavBar="toggleNavBar" />
            <Nav
                @toggleNavBar="navBarIsOpen = $event"
                :isOpen="navBarIsOpen"
                :selectedItemIndex="selectedItemIndex"
                @setSelectedItemIndex="setSelectedItemIndex"
            />
            <v-main>
                <!--            <v-container fluid>-->
                <router-view />
                <!--            </v-container>-->
            </v-main>

            <Footer />
        </div>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/grid/Footer/Footer.vue';
import Header from '@/components/grid/Header/Header.vue';
import Nav from '@/components/grid/Nav/Nav.vue';
import { getItemIndexByName } from '@/components/grid/Nav/constants';

export default Vue.extend({
    name: 'MainLayout',
    components: {
        Footer,
        Header,
        Nav
    },
    data: () => ({
        navBarIsOpen: false,
        selectedItemIndex: undefined
    }),
    methods: {
        toggleNavBar() {
            this.navBarIsOpen = !this.navBarIsOpen;
        },
        setSelectedItemIndex(value: number | undefined) {
            this.selectedItemIndex = value;
        }
    },
    watch: {
        selectedItemIndex() {
            this.navBarIsOpen = false;
        }
    },
    mounted() {
        this.selectedItemIndex = getItemIndexByName(this.$route.name);
    }
});
</script>

<style scoped lang="scss">
@import 'src/assets/styles/global.scss';
</style>
