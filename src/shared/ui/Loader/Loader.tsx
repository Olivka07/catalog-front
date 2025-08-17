import React from 'react';
import css from './Loader.module.scss';
import { cn } from 'shared/helpers';

type LoaderProps = {
    className?: string;
};

export const Loader = (props: LoaderProps) => {
    const { className } = props;
    return (
        <div className={cn(css.loader__container, className)}>
            <div className={css.loader} />
        </div>
    );
};
