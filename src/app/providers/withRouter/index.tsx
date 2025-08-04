import { RouterProvider } from 'atomic-router-react';
import { ReactNode } from 'react';
import { router } from 'shared/router';

export const withRouter = (component: () => ReactNode) =>
    function AppRouterProvider() {
        return <RouterProvider router={router}>{component()}</RouterProvider>;
    };
