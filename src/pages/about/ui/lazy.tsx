import { Suspense, lazy } from 'react';

const PageComponent = lazy(() =>
    import('./page/Page').then((module) => ({ default: module.Page }))
);

export const Page = () => (
    <Suspense fallback={<div>...loading</div>}>
        <PageComponent />
    </Suspense>
);
