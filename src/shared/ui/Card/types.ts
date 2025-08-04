import { PropsWithChildren } from 'react';

export type CardType = {
    (props: CardProps): JSX.Element;
    Header: (props: CardHeaderProps) => JSX.Element;
    Body: (props: CardBodyProps) => JSX.Element;
    Footer: (props: CardFooterProps) => JSX.Element;
};

export type CardProps = PropsWithChildren<{
    mode?: 'volume' | 'plain' | 'plain_with_bg';
    className?: string;
}>;

export type CardHeaderProps = PropsWithChildren<{
    className?: string;
    align?: 'left' | 'center' | 'right';
    withSeparator?: boolean;
}>;

export type CardFooterProps = PropsWithChildren<{
    className?: string;
    align?: 'left' | 'center' | 'right';
    withSeparator?: boolean;
}>;

export type CardBodyProps = PropsWithChildren<{
    className?: string;
}>;
