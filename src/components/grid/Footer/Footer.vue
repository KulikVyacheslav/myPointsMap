<template>
    <v-footer app padless dark>
        <v-card flat tile :class="[applicationColorTheme, 'white--text text-center']" width="100%">
            <v-card-text>
                <v-btn v-for="{ icon, link } in socialIcons" :key="icon" class="mx-4 white--text" icon>
                    <a :href="link" target="_blank">
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </a>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0 w-100">
                Приложение разработано в рамках выполнения тестового задания для компании SquareGPS
            </v-card-text>

            <v-divider />

            <v-card-text class="white--text"> {{ currentYear }} — <strong>Кулик Вячеслав</strong> </v-card-text>
        </v-card>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import socialIcons from '@/components/grid/Footer/constants';
import { applicationColorTheme } from '@/constants/global';

export default Vue.extend({
    name: 'Footer',
    data: () => ({
        socialIcons,
        currentYear: new Date().getFullYear(),
        applicationColorTheme
    })
});
</script>

<style scoped lang="scss">
@import 'style.scss';
</style>
