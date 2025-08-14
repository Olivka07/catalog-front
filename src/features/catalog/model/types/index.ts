import { CatalogSortingMethodValue } from 'entities/catalog/lib/constants';

export type CatalogIndicators = {
    bread: boolean;
    drinking: boolean;
    chocolate: boolean;
    milk: boolean;
    teaCoffeeCacao: boolean;
    search: string;
    sort: CatalogSortingMethodValue;
};
