import { ClientLayout } from 'widgets/layouts';
import { currentRoute } from './model/about-page-model';
import { Page } from './ui/lazy';

export const AboutPageRoute = {
    route: currentRoute,
    view: Page,
    layout: ClientLayout
};
