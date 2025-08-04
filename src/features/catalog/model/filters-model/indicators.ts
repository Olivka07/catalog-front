import { createIndicatorsControl } from 'shared/effector';
import { CatalogIndicators } from '../types';

export const catalogIndicators = createIndicatorsControl<CatalogIndicators>({
    defaultValues: {
        bread: false,
        drinking: false,
        chocolate: false
    }
});
