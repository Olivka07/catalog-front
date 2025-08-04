import React from 'react';
import { FiltersSidebar } from '../FiltersSidebar';
import { useUnit } from 'effector-react';
import css from './MobileMenuSidebar.module.scss';
import { cn } from 'shared/helpers';
import { mobileMenuModel } from 'features/sidebar';

export const MobileMenuSidebar = () => {
    const isMobileMenuShown = useUnit(mobileMenuModel.$isMobileMenuShown);
    console.log(isMobileMenuShown, 'isMobileMenuShown');
    return (
        <>
            <div
                className={cn(css.mobileMenu, {
                    [css.openned]: isMobileMenuShown
                })}
            >
                <FiltersSidebar />
            </div>
        </>
    );
};
