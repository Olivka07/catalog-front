import React, { ComponentPropsWithoutRef } from 'react';
import { cn } from 'shared/helpers';
import './Image.scss';

type ImageProps = {
    src: string;
    alt: string;
    className?: string;
} & ComponentPropsWithoutRef<'img'>;

export const Image = (props: ImageProps) => {
    const { className, ...rest } = props;

    return <img className={cn(className, 'image')} {...rest} />;
};
