import { cn } from 'shared/helpers';
import css from './MenuItem.module.scss';
import { Icon } from 'shared/ui';

type MenuItemProps = {
    onClick?: () => void;
};

export const MenuItem = (props: MenuItemProps) => {
    const { onClick } = props;

    const handleMenuItemClick = () => {
        console.log('sdf');
        onClick?.();
    };

    return (
        <div
            onClick={handleMenuItemClick}
            className={cn(css.item__icon, css.item__menu)}
        >
            <Icon icon="menu" size="large" />
        </div>
    );
};
