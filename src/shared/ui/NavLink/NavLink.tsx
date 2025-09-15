import { RouteInstance, RouteParams } from 'atomic-router';
import { Link } from 'atomic-router-react';
import React, { FC, PropsWithChildren } from 'react';

import css from './NavLink.module.scss';
import { IconName, IconSize } from '../Icon/types';
import { Icon } from '../Icon';
import { cn } from 'shared/helpers';

interface NavLinkProps {
    path: string | RouteInstance<RouteParams>;
    icon?: IconName;
    iconSize?: IconSize;
    hasHovered?: boolean;
    hovered?: boolean;
    hasActive?: boolean;
    active?: boolean;
}
export const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
    path,
    icon,
    iconSize = 'small',
    hasHovered = true,
    hasActive = true,
    hovered = false,
    active = false,
    children
}) => {
    return (
        <Link
            className={cn(css.NavLink, {
                [css.NavLink__hasHover]: hasHovered,
                [css.NavLink__hasHover_hovered]: hasHovered && hovered,
                [css.NavLink_active]: hasActive && active
            })}
            activeClassName={hasActive ? css.NavLink_active : ''}
            to={path}
        >
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
