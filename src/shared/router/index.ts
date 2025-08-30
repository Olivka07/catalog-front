import { createHistoryRouter, createRoute } from 'atomic-router';

export const Paths = {
    Main: '/',
    Catalog: '/catalog',
    About: '/about'
} as const;

export const routes = {
    main: createRoute(),
    about: createRoute(),
    catalog: createRoute()
};

const mappedRoutes = [
    {
        path: Paths.Main,
        route: routes.main
    },
    {
        path: Paths.Catalog,
        route: routes.catalog
    },
    {
        path: Paths.About,
        route: routes.about
    }
];

export const router = createHistoryRouter({
    routes: mappedRoutes
});
