import { FC } from 'react';
import { cn } from 'shared/helpers';
import { IconMapper, IconSizeMapper } from './constants';
import { IconSize, IconName } from './types';
import classes from './Icon.module.scss';

interface IconProps extends React.SVGAttributes<SVGElement> {
    icon: IconName;
    size: IconSize;
}

export const Icon: FC<IconProps> = ({
    icon,
    size,
    className,
    ...otherProps
}) => {
    const MappingComponent = IconMapper[icon];
    return (
        <MappingComponent
            {...otherProps}
            {...IconSizeMapper[size]}
            className={cn(className, classes.icon)}
        />
    );
};
