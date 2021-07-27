import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Map from '@/views/Map/Map.vue';
import About from '@/views/About/About.vue';

Vue.use(VueRouter);

export const routesNames = {
    home: {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Домашняя страница'
        }
    },
    map: {
        path: '/map',
        name: 'Map',
        meta: {
            title: 'Карта'
        }
    },
    about: {
        path: '/about',
        name: 'About',
        meta: {
            title: 'О задании'
        }
    }
};

const routes: Array<RouteConfig> = [
    {
        ...routesNames.home,
        redirect: { name: routesNames.map.name }
    },
    {
        ...routesNames.map,
        component: Map
    },
    {
        ...routesNames.about,
        component: About
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export const goToPath = {
    goToMap: (): void => {
        router.push(routesNames.map.path).catch(() => {});
    },
    goToAbout: (): void => {
        router.push(routesNames.about.path).catch(() => {});
    },
    goToHome: (): void => {
        router.push(routesNames.home.path).catch(() => {});
    }
};

export default router;
