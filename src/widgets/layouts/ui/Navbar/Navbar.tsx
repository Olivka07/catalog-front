import React from 'react';
import { routes } from 'shared/router';
import { NavLink, Icon } from 'shared/ui';

import css from './Navbar.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { cn } from 'shared/helpers';

export const Navbar = () => {
    const { isDesktop } = useViewportInfo();
    return (
        <nav
            className={cn(css.navbar__container, {
                [css.navbar__container_mobile]: !isDesktop
            })}
        >
            <NavLink path={routes.main} icon="catalog">
                <Typography.h3 as="span">Каталог</Typography.h3>
            </NavLink>
            <NavLink path={routes.about}>
                <Typography.h3 as="span">Информация</Typography.h3>
            </NavLink>
        </nav>
    );
};
