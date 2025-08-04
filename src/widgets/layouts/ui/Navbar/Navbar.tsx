import React from 'react';
import { routes } from 'shared/router';
import { NavLink, Icon } from 'shared/ui';

import css from './Navbar.module.scss';
import { Typography } from 'shared/ui/Typography/Typography';

export const Navbar = () => {
    return (
        <nav className={css.navbar__container}>
            <NavLink path={routes.main} icon="catalog">
                <Typography.h3 as="span">Каталог</Typography.h3>
            </NavLink>
            <NavLink path={routes.about}>
                <Typography.h3 as="span">Информация</Typography.h3>
            </NavLink>
        </nav>
    );
};
