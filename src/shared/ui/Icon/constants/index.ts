import {
    BreadIcon,
    CatalogIcon,
    ChocolateIcon,
    DrinkingIcon,
    MenuIcon
} from 'shared/assets/icons';

export const IconMapper = {
    bread: BreadIcon,
    catalog: CatalogIcon,
    chocolate: ChocolateIcon,
    drinking: DrinkingIcon,
    menu: MenuIcon
} as const;

export const IconSizeMapper = {
    small: {
        width: 24,
        height: 24
    },
    medium: {
        width: 32,
        height: 32
    },
    large: {
        width: 40,
        height: 40
    }
} as const;
