import { createIndicatorsControl } from 'shared/effector';
import { CatalogIndicators } from '../types';

export const catalogIndicators = createIndicatorsControl<CatalogIndicators>({
    defaultValues: {
        search: '',
        sort: null,

        bread: false,
        drinking: false,
        chocolate: false,
        milk: false,
        teaCoffeeCacao: false,
        vegetables: false
    }
});
