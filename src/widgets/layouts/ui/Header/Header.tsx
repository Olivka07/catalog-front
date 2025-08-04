import React, { FC, PropsWithChildren } from 'react';
import css from './Header.module.scss';
import { cn } from 'shared/helpers';

type HeaderProps = PropsWithChildren<{
    className?: string;
}>;
export const Header: FC<HeaderProps> = ({
    children,
    className
}: HeaderProps) => {
    return <header className={cn(css.header, className)}>{children}</header>;
};
