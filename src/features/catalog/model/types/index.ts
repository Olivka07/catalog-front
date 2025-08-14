import { CatalogSortingMethodValue } from 'entities/catalog/lib/constants';

export type CatalogIndicators = {
    search: string;
    sort: CatalogSortingMethodValue;

    bread: boolean;
    chocolate: boolean;
    drinking: boolean;
    fruits: boolean;
    milk: boolean;
    teaCoffeeCacao: boolean;
    vegetables: boolean;
};
