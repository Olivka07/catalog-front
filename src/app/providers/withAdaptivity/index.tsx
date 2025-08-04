import { ReactNode } from 'react';
import { AdaptivityContextProvider } from 'shared/contexts/AdaptivityContext';

export const withAdaptivity = (component: () => ReactNode) =>
    function WithAdaptivityProvider() {
        return (
            <AdaptivityContextProvider>{component()}</AdaptivityContextProvider>
        );
    };
