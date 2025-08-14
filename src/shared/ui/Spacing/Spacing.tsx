import React from 'react';
import { cn } from 'shared/helpers';
import css from './Spacing.module.scss';

type SpacingProps = {
    size: number;
};
export const Spacing = (props: SpacingProps) => {
    const { size } = props;
    return (
        <div
            aria-hidden
            style={{ marginBottom: `${size}px` }}
            className={css.spacing}
        />
    );
};
