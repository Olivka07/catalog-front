import { ClientLayout } from 'widgets/layouts';
import { currentRoute } from './model/catalog-page-model/model';
import { CatalogPage } from './ui';

export * from './ui';

export const CatalogPageRoute = {
    route: currentRoute,
    view: CatalogPage,
    layout: ClientLayout
};
