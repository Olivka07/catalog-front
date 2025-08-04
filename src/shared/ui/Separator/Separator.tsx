import React from 'react';
import css from './Separator.module.scss';
import { cn } from 'shared/helpers';
import { RangeNumber } from 'shared/utils/types';

type SeparatorProps = {
    size?: RangeNumber<1, 10>;
    className?: string;
};

/**
 *
 * @param size - высота сепаратора в пикселях, по умолчанию 2px
 */
export const Separator = (props: SeparatorProps) => {
    const { size = 1, className } = props;
    return (
        <div
            aria-label="Разделитель"
            className={cn(css.separator, css[`separator_${size}`], className)}
        />
    );
};
