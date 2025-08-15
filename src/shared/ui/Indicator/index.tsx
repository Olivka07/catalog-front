import { cn } from 'shared/helpers';
import './index.scss';

type IndicatorProps = {
    className?: string;
    rounded?: boolean;
    isShown?: boolean;
};
export const Indicator = (props: IndicatorProps) => {
    const { className, rounded = true, isShown = true } = props;

    if (!isShown) return null;

    return (
        <div
            className={cn(
                'indicator',
                { indicatorRounded: rounded },
                className
            )}
        />
    );
};
