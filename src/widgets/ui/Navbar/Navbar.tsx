import React from 'react';
import { routes } from 'shared/router';
import { NavLink } from 'shared/ui';
import css from './Navbar.module.scss';
import { CatalogIcon } from 'shared/assets/icons';
import { Icon } from 'features/ui';

export const Navbar = () => {
    return (
        <nav className={css.navbar__container}>
            <NavLink path={routes.main}>
                <Icon icon="catalog" width={32} height={32} />
                Каталог
            </NavLink>
            <NavLink path={routes.about}>Информация</NavLink>
        </nav>
    );
};
