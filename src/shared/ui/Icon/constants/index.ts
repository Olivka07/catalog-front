import {
    AttendIcon,
    BreadIcon,
    CatalogIcon,
    ChancelleryIcon,
    ChevronCloseIcon,
    ChevronOpenIcon,
    ChocolateIcon,
    CloseIcon,
    DrinkingIcon,
    FruitsIcon,
    MenuIcon,
    MenuNavigationIcon,
    MilkIcon,
    SauceIcon,
    SausageMeatIcon,
    SearchIcon,
    SortIcon,
    TeaCoffeeCacaoIcon,
    VegetablesIcon
} from 'shared/assets/icons';

export const IconMapper = {
    attend: AttendIcon,
    bread: BreadIcon,
    catalog: CatalogIcon,
    chancellery: ChancelleryIcon,
    chocolate: ChocolateIcon,
    close: CloseIcon,
    drinking: DrinkingIcon,
    fruits: FruitsIcon,
    menu: MenuIcon,
    menuNavigation: MenuNavigationIcon,
    milk: MilkIcon,
    chevronClose: ChevronCloseIcon,
    chevronOpen: ChevronOpenIcon,
    sauce: SauceIcon,
    sausageMeat: SausageMeatIcon,
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
