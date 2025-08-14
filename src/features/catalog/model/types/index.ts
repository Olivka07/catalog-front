import { CatalogSortingMethodValue } from 'entities/catalog/lib/constants';

export type CatalogIndicators = {
    search: string;
    sort: CatalogSortingMethodValue;

    bread: boolean;
    drinking: boolean;
    chocolate: boolean;
    milk: boolean;
    teaCoffeeCacao: boolean;
    vegetables: boolean;
};
