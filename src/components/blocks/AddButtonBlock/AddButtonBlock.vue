<template>
    <div>
        <v-btn @click="onChangeMode" class="mx-2" fab dark :color="applicationColorTheme">
            <v-icon dark> {{ addButtonText }} </v-icon>
        </v-btn>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { applicationColorTheme } from '@/constants/global';
import { mapGetters, mapState } from 'vuex';
import { getTypeOfModule } from '@/helpers/usefulFunction';
import { MAP_MODULE } from '@/store/modulesName';
import { TOGGLE_ADD_MODE } from '@/store/modules/mutation-types';

export default Vue.extend({
    name: 'AddButtonBlock',
    data: () => ({
        applicationColorTheme
    }),
    computed: {
        ...mapState('mapModule', ['isAddMode']),
        ...mapGetters('mapModule', ['addButtonText'])
    },
    methods: {
        onChangeMode() {
            this.$store.commit(getTypeOfModule(MAP_MODULE, TOGGLE_ADD_MODE));
        }
    }
});
</script>

<style scoped lang="scss"></style>
