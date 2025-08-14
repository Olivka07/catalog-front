import React from 'react';
import { FiltersSidebar } from '../FiltersSidebar';
import { useUnit } from 'effector-react';
import css from './MobileMenuSidebar.module.scss';
import { cn } from 'shared/helpers';
import { mobileMenuModel } from 'features/sidebar';

export const MobileMenuSidebar = () => {
    const [isMobileMenuShown, toggleIsMobileMenuShown] = useUnit([
        mobileMenuModel.$isMobileMenuShown,
        mobileMenuModel.toggleIsMobileMenuShown
    ]);
    return (
        <>
            <div
                onClick={toggleIsMobileMenuShown}
                className={cn(css.mobileMenu, {
                    [css.openned]: isMobileMenuShown
                })}
            >
                <FiltersSidebar />
            </div>
        </>
    );
};
