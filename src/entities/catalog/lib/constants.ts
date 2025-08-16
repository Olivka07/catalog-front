import { getLangKeyInternal } from 'shared/helpers/getLangKeyInternal';
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
        label: getLangKeyInternal('no_select').toString(),
        value: CatalogSortingMethod.NO_SORTING
    },
    {
        label: getLangKeyInternal('to_high_price').toString(),
        value: CatalogSortingMethod.PRICE_TO_HIGH
    },
    {
        label: getLangKeyInternal('to_low_price').toString(),
        value: CatalogSortingMethod.PRICE_TO_LOW
    },
    {
        label: getLangKeyInternal('special_offer_forward').toString(),
        value: CatalogSortingMethod.SPECIAL_OFFER_FORWARD
    }
];
