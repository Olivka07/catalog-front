import { createElement, JSX, PropsWithChildren } from 'react';
import { cn } from 'shared/helpers';
import { AsComponent, AsComponentProps } from 'shared/utils/as-component/types';

import css from './Typography.module.scss';

interface TypographyProps {
    familyFont: 'Consolas';
    weightFont: 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    colorFont: 'black' | 'red';
    fontAlign: 'left' | 'center' | 'right';
    isInline?: boolean;
}

function createTypography<AS extends keyof JSX.IntrinsicElements>(
    as: AS,
    defaultClassName?: string,
    config: Partial<TypographyProps> = {}
) {
    const Component = <T extends AsComponent = typeof as>(
        props: AsComponentProps<T, PropsWithChildren<Partial<TypographyProps>>>
    ) => {
        const {
            colorFont = config?.colorFont,
            familyFont = config?.familyFont,
            weightFont = config?.weightFont,
            fontAlign = config?.fontAlign ?? 'left',
            isInline = false,
            children,
            className,
            as: asProp = as,
            ...restProps
        } = props;

        const classes = cn(
            defaultClassName,
            className,
            css[colorFont],
            css[familyFont],
            css[fontAlign],
            css[`weight-${weightFont}`],
            { [css.inline]: isInline }
        );

        const newProps = {
            ...restProps,
            className: classes
        };

        return createElement(asProp, newProps, children);
    };

    Component.displayName = `Typography.${as}`;

    return Component;
}

export const Typography = {
    h1: createTypography('h1', css.h1__header),
    h2: createTypography('h2', css.h2__header),
    h3: createTypography('h3', css.h3__header),

    card: createTypography('p', css.card, {
        fontAlign: 'center',
        weightFont: 600
    }),
    text: createTypography('p', css.text)
};
