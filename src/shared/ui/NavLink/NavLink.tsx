import { RouteInstance, RouteParams } from 'atomic-router';
import { Link } from 'atomic-router-react';
import React, { FC, PropsWithChildren } from 'react';

import css from './NavLink.module.scss';
import { IconName, IconSize } from '../Icon/types';
import { Icon } from '../Icon';

interface NavLinkProps {
    path: string | RouteInstance<RouteParams>;
    icon?: IconName;
    iconSize?: IconSize;
}
export const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
    path,
    icon,
    iconSize = 'small',
    children
}) => {
    return (
        <Link className={css.NavLink} to={path}>
            {icon && (
                <Icon
                    icon={icon}
                    size={iconSize}
                    withAppereance
                    className={css.icon}
                />
            )}
            {children}
        </Link>
    );
};
