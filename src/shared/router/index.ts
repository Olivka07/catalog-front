import { createHistoryRouter, createRoute } from 'atomic-router';

export const Paths = {
    Main: '/',
    Catalog: '/catalog',
    About: '/about'
} as const;

export const MAIN_PAGE = 'main';
export const ABOUT_PAGE = 'about';
export const CATALOG_PAGE = 'catalog';

export const LIST_PAGES = {
    MAIN_PAGE,
    ABOUT_PAGE,
    CATALOG_PAGE
};

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
