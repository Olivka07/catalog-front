import { FC } from 'react';
import { cn } from 'shared/helpers';
import { CatalogIcon } from 'shared/assets/icons';

import classes from './Icon.module.scss';

const iconMapper = {
    catalog: CatalogIcon
} as const;

type IconMapper = typeof iconMapper;

interface IconProps extends React.SVGAttributes<SVGElement> {
    icon: keyof IconMapper;
}

export const Icon: FC<IconProps> = ({ icon, className, ...otherProps }) => {
    const MappingComponent = iconMapper[icon];
    return (
        <MappingComponent
            {...otherProps}
            className={cn(className, classes.icon)}
        />
    );
};
