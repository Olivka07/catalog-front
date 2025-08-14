import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { cn } from 'shared/helpers/cn';
import css from './Button.module.scss';
import { IconName } from '../Icon/types';
import { Icon } from '../Icon';

type ButtonType = 'warn' | 'primary' | 'normal' | 'transparent';

const UnmappedButtonCss: Record<ButtonType, string> = {
    primary: css.button_primary,
    warn: css.button_warn,
    normal: css.button_normal,
    transparent: css.button_transparent
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonType;
    iconName?: IconName;
    iconBefore?: boolean;
    iconAppereance?: boolean;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const {
        theme = 'normal',
        className,
        children,
        iconName,
        iconBefore = true,
        iconAppereance = false,
        ...otherProps
    } = props;

    const icon = iconName ? (
        <Icon withAppereance={iconAppereance} icon={iconName} size="medium" />
    ) : null;

    return (
        <button
            className={cn(css.button, UnmappedButtonCss[theme], className)}
            {...otherProps}
        >
            {iconBefore && icon}
            {children}
            {!iconBefore && icon}
        </button>
    );
};
