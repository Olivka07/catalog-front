import React, { FC, PropsWithChildren } from 'react';
import { Header } from '../Header';
import { ThemesContainer } from '../ThemesContainer';
import { Navbar } from '../Navbar';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { HeaderDesktop } from '../Header/HeaderDesktop';
import { HeaderMobile } from '../Header/HeaderMobile';
import { MobileMenuSidebar } from 'widgets/sidebar/ui/MobileMenuSidebar/MobileMenuSidebar';

export const ClientLayout: FC<PropsWithChildren> = ({ children }) => {
    const { isDesktop } = useViewportInfo();
    return (
        <>
            {isDesktop ? <HeaderDesktop /> : <HeaderMobile />}
            {!isDesktop && <MobileMenuSidebar />}
            {children}
        </>
    );
};
