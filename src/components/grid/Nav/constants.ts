import { goToPath, routesNames } from '@/router';

const { goToAbout, goToMap } = goToPath;
const { map, about } = routesNames;

export const navigationItems = [
    { ...about, goTo: goToAbout, icon: 'mdi-information' },
    { ...map, goTo: goToMap, icon: 'mdi-map ' }
];

export const getItemIndexByName = (parameter: string | undefined | null): number | undefined =>
    parameter ? navigationItems.findIndex(({ name }) => name === parameter) : undefined;
