import React from 'react';
import { CardType } from './types';
import { cn } from 'shared/helpers';
import './Card.scss';
import { Separator } from '../Separator';

export const Card: CardType = (props) => {
    const { children, className, mode = 'volume' } = props;
    return (
        <div className={cn(className, 'card', `card_${mode}`)}>{children}</div>
    );
};

Card.Header = (props) => {
    const { children, className, align = 'center', withSeparator } = props;
    return (
        <div className={cn(className, 'card__header', `card__header_${align}`)}>
            {children}
            {withSeparator && <Separator />}
        </div>
    );
};

Card.Body = (props) => {
    const { children, className } = props;
    return <div className={cn(className, 'card__body')}>{children}</div>;
};

Card.Footer = (props) => {
    const { className, children, align = 'center', withSeparator } = props;
    return (
        <div className={cn(className, 'card__footer', `card__footer_${align}`)}>
            {withSeparator && <Separator />}
            {children}
        </div>
    );
};
