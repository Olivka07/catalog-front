import { createIndicatorsControl } from 'shared/effector';
import { CatalogIndicators } from '../types';

export const catalogIndicators = createIndicatorsControl<CatalogIndicators>({
    defaultValues: {
        search: '',
        sort: null,

        attend: false,
        bread: false,
        chocolate: false,
        chancellery: false,
        drinking: false,
        fish: false,
        fruits: false,
        milk: false,
        sauce: false,
        sausageMeat: false,
        teaCoffeeCacao: false,
        vegetables: false
    }
});
