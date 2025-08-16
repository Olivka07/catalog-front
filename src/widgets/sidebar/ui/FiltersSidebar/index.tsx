import css from './FiltersSidebar.module.scss';
import { FilterItem } from './FilterItem';
import { filters } from 'widgets/sidebar/model/constants';
import { MenuItem } from 'widgets/layouts/ui/MenuItem';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { cn } from 'shared/helpers';
import { LegacyRef, MutableRefObject, forwardRef } from 'react';

export const FiltersSidebar = forwardRef((_, ref: LegacyRef<HTMLElement>) => {
    const { isDesktop } = useViewportInfo();
    return (
        <nav
            ref={ref}
            className={cn(css.nav, {
                [css.nav__mobile]: !isDesktop
            })}
        >
            {isDesktop && <MenuItem />}
            <div className={css.scroll}>
                <ul className={css.list}>
                    {filters.map((f) => (
                        <FilterItem key={f.name} filter={f} />
                    ))}
                </ul>
            </div>
        </nav>
    );
});
