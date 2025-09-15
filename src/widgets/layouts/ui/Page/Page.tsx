import React, { PropsWithChildren } from 'react';
import './Page.scss';
import { cn } from 'shared/helpers';
type PageProps = PropsWithChildren<{
    withSidebar?: boolean;
    padding?: null | number;
}>;
export const PageWrapper = (props: PageProps) => {
    const { withSidebar, padding = 30, children } = props;

    return (
        <main
            className={cn('page', {
                page__withSidebar: withSidebar,
                [`page__padding_${padding}`]: !!padding
            })}
        >
            {children}
        </main>
    );
};
