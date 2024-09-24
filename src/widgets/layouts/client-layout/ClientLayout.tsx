import React, { FC, PropsWithChildren } from 'react';
import { ThemesContainer, Navbar } from 'widgets/ui';
import { Header } from 'widgets/ui';

export const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header>
                <ThemesContainer />
                <Navbar />
            </Header>
            <main>{children}</main>
        </>
    );
};
