import { createIndicatorsControl } from 'shared/effector';
import { CatalogIndicators } from '../types';

export const catalogIndicators = createIndicatorsControl<CatalogIndicators>({
    defaultValues: {
        search: '',
        sort: null,

        bread: false,
        chocolate: false,
        drinking: false,
        fruits: false,
        milk: false,
        teaCoffeeCacao: false,
        vegetables: false
    }
});
