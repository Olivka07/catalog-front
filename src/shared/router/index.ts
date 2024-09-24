import {
    UnmappedRouteObject,
    createHistoryRouter,
    createRoute
} from 'atomic-router';
import { createBrowserHistory } from 'history';

export const routes = {
    main: createRoute(),
    about: createRoute()
};

const mappedRoutes: UnmappedRouteObject<any>[] = [
    {
        path: '/',
        route: routes.main
    },
    {
        path: '/about',
        route: routes.about
    }
];

export const router = createHistoryRouter({
    routes: mappedRoutes
});

const history = createBrowserHistory();

router.setHistory(history);
