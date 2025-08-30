import { CatalogSortingMethodValue } from 'entities/catalog/lib/constants';

export type CatalogIndicators = {
    search: string;
    sort: CatalogSortingMethodValue;

    attend: boolean; // есть в наличии
    bread: boolean;
    chancellery: boolean;
    chocolate: boolean;
    drinking: boolean;
    fruits: boolean;
    milk: boolean;
    sauce: boolean;
    teaCoffeeCacao: boolean;
    vegetables: boolean;
};
