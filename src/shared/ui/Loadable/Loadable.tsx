import React, { JSXElementConstructor, Suspense } from 'react';
import { Loader } from '../Loader/Loader';

export function Loadable<T>(
    Component: JSXElementConstructor<T>,
    skeleton?: JSX.Element
) {
    return (props: T) => {
        return (
            <Suspense fallback={skeleton ?? <Loader />}>
                <Component {...props} />
            </Suspense>
        );
    };
}
