import React, { PropsWithChildren } from 'react';
import './Page.scss';
import { cn } from 'shared/helpers';
type PageProps = PropsWithChildren<{
    withSidebar?: boolean;
}>;
export const Page = (props: PageProps) => {
    const { withSidebar, children } = props;

    return (
        <main className={cn('page', { page__withSidebar: withSidebar })}>
            {children}
        </main>
    );
};
