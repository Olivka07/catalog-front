import React, { useCallback, useRef } from 'react';
import { FiltersSidebar } from '../FiltersSidebar';
import { useUnit } from 'effector-react';
import css from './MobileMenuSidebar.module.scss';
import { cn } from 'shared/helpers';
import { mobileMenuModel } from 'features/sidebar';
import { useClickOutside } from 'shared/hooks';

export const MobileMenuSidebar = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuShown, setIsMobileMenuShown] = useUnit([
        mobileMenuModel.$isMobileMenuShown,
        mobileMenuModel.setIsMobileMenuShown
    ]);

    const handleOutsideClick = useCallback(() => {
        if (isMobileMenuShown) {
            setIsMobileMenuShown(false);
        }
    }, [isMobileMenuShown]);

    useClickOutside(ref, handleOutsideClick, containerRef.current);

    return (
        <>
            <div
                ref={containerRef}
                className={cn(css.mobileMenu, {
                    [css.openned]: isMobileMenuShown
                })}
            >
                <FiltersSidebar ref={ref} />
            </div>
        </>
    );
};
