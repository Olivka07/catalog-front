import { SelectOption } from 'shared/types/select';

export const CatalogSortingMethod = {
    NO_SORTING: 1,
    PRICE_TO_HIGH: 2,
    PRICE_TO_LOW: 3,
    SPECIAL_OFFER_FORWARD: 4
} as const;

export type CatalogSortingMethodValue =
    (typeof CatalogSortingMethod)[keyof typeof CatalogSortingMethod];

export const SortingOptions: SelectOption[] = [
    {
        label: 'Не выбрано',
        value: CatalogSortingMethod.NO_SORTING
    },
    {
        label: 'По возрастанию цены',
        value: CatalogSortingMethod.PRICE_TO_HIGH
    },
    {
        label: 'По убыванию цены',
        value: CatalogSortingMethod.PRICE_TO_LOW
    },
    {
        label: 'Сначала спец.предложение',
        value: CatalogSortingMethod.SPECIAL_OFFER_FORWARD
    }
];
