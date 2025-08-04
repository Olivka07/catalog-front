import { createRoutesView } from 'atomic-router-react';
import { AboutPageRoute } from 'pages/about';
import { CatalogPageRoute } from 'pages/catalog';
import { MainPageRoute } from 'pages/main';

export const RoutesView = createRoutesView({
    routes: [MainPageRoute, CatalogPageRoute, AboutPageRoute]
});
