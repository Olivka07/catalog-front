import { createRoutesView } from 'atomic-router-react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { routes } from 'shared/router';
import { ClientLayout } from 'widgets/layouts/client-layout';

export const RoutesView = createRoutesView({
    routes: [
        {
            route: routes.main,
            view: MainPage,
            layout: ClientLayout
        },
        {
            route: routes.about,
            view: AboutPage,
            layout: ClientLayout
        }
    ]
});
