import { chainRoute } from 'atomic-router';
import { debug } from 'patronum';
import { attach } from 'effector';
import { routes } from 'shared/router';

export const currentRoute = routes.main;

const redirectToCatalogRouteFx = attach({ effect: routes.catalog.open });

export const redirectedFromMainToCatalogRoute = chainRoute({
    route: currentRoute,
    beforeOpen: {
        effect: redirectToCatalogRouteFx,
        mapParams: ({ params, query }) => ({ params, query })
    }
    // cancelOn: redirectToCatalogRouteFx
});

debug(redirectToCatalogRouteFx, currentRoute.opened);
