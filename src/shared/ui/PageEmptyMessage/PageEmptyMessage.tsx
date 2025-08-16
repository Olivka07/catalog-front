import React from 'react';
import css from './PageEmptyMessage.module.scss';
import { cn } from 'shared/helpers';
import { Typography, TypographyProps } from '../Typography/Typography';
import { LangValue } from 'shared/languages/utils';

type PageEmptyMessageProps = {
    className?: string;
    text: string | LangValue;
    textProps?: TypographyProps;
};
export const PageEmptyMessage = (props: PageEmptyMessageProps) => {
    const { className, text, textProps = {} } = props;
    return (
        <Typography.h2
            as="p"
            fontAlign="center"
            weightFont={600}
            {...textProps}
            className={cn(css.text, className)}
        >
            {text.toString()}
        </Typography.h2>
    );
};
