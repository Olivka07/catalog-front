import React, { MutableRefObject, forwardRef, useState } from 'react';
import { cn } from 'shared/helpers';
import { useEventListener } from 'shared/hooks';
import { useLang } from 'shared/hooks/useLang/useLang';
import { Button } from 'shared/ui';
import css from './index.module.scss';

type ToUpButtonProps = {
    className?: string;
};

export const ToUpButton = forwardRef(
    (
        props: ToUpButtonProps,
        ref: MutableRefObject<HTMLDivElement | HTMLUListElement>
    ) => {
        const { className } = props;
        const { getLangKey } = useLang();
        const [isScrolled, setIsScrolled] = useState(false);

        useEventListener(
            'scroll',
            () => {
                const scrollTop = ref?.current?.scrollTop;
                if (scrollTop > 0) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            },
            ref?.current
        );

        const handleToUpClick = () => {
            if (ref?.current) {
                ref.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        return (
            <Button
                onClick={handleToUpClick}
                className={cn(
                    css.btn,
                    { [css.btn__hidden]: !isScrolled },
                    className
                )}
                disabled={!isScrolled}
            >
                {getLangKey('to_up').toString()}
            </Button>
        );
    }
);
