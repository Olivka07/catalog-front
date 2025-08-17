import { lazy } from 'react';
import { Loadable } from 'shared/ui';

export const Page = Loadable(
    lazy(() =>
        import('./page/Page').then((module) => ({ default: module.Page }))
    )
);
