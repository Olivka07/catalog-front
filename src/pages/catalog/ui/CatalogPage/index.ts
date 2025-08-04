import { lazy } from 'react';
import { Loadable } from 'shared/ui';

export const CatalogPage = Loadable(lazy(() => import('./CatalogPage')));
