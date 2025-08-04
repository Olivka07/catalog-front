import css from './FiltersSidebar.module.scss';
import { FilterItem } from './FilterItem';
import { filters } from 'widgets/sidebar/model/constants';
import { MenuItem } from 'widgets/layouts/ui/MenuItem';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { cn } from 'shared/helpers';

export const FiltersSidebar = () => {
    const { isDesktop } = useViewportInfo();
    return (
        <nav className={cn(css.nav, { [css.nav__mobile]: !isDesktop })}>
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
};
