import {
    BreadIcon,
    CatalogIcon,
    ChevronCloseIcon,
    ChevronOpenIcon,
    ChocolateIcon,
    CloseIcon,
    DrinkingIcon,
    MenuIcon,
    MenuNavigationIcon,
    MilkIcon,
    SearchIcon,
    SortIcon,
    TeaCoffeeCacaoIcon,
    VegetablesIcon
} from 'shared/assets/icons';

export const IconMapper = {
    bread: BreadIcon,
    catalog: CatalogIcon,
    chocolate: ChocolateIcon,
    close: CloseIcon,
    drinking: DrinkingIcon,
    menu: MenuIcon,
    menuNavigation: MenuNavigationIcon,
    milk: MilkIcon,
    chevronClose: ChevronCloseIcon,
    chevronOpen: ChevronOpenIcon,
    search: SearchIcon,
    sort: SortIcon,
    teaCoffeeCacao: TeaCoffeeCacaoIcon,
    vegetables: VegetablesIcon
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
