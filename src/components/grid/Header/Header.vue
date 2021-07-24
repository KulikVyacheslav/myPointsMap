<template>
    <v-app-bar dense color="deep-purple accent-4" dark>
        <v-app-bar-nav-icon @click.stop="toggleNavBar" />

        <v-app-bar-title>{{ pageName }}</v-app-bar-title>
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Header',
    props: {
        toggleNavBar: { type: Function, required: true }
    },
    computed: {
        pageName() {
            return this.$route.name;
        }
    }
});
</script>

<style scoped lang="scss"></style>
