import { fork } from 'effector';
import { Provider } from 'effector-react';
import { ReactNode } from 'react';

export const withEffector = (component: () => ReactNode) => {
    const scope = fork();

    return function AppEffectorScopeProvider() {
        return <Provider value={scope}>{component()}</Provider>;
    };
};
