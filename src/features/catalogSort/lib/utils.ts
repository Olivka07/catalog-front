import { Product } from 'entities/catalog';
import {
    CatalogSortingMethod,
    CatalogSortingMethodValue
} from 'entities/catalog/lib/constants';

export const sortCatalogByWay = (
    sortingWay: CatalogSortingMethodValue,
    products: Product[]
) => {
    switch (sortingWay) {
        case CatalogSortingMethod.NO_SORTING:
            return products;
        case CatalogSortingMethod.PRICE_TO_HIGH:
            return sortToHighPrice(products);
        case CatalogSortingMethod.PRICE_TO_LOW:
            return sortToLowPrice(products);
        case CatalogSortingMethod.SPECIAL_OFFER_FORWARD:
            return sortSpecialOfferFoward(products);
        default:
            return products;
    }
};

// по возрастанию цены
function sortToHighPrice(products: Product[]) {
    return products.toSorted((p1, p2) => (p1?.price ?? 0) - (p2.price ?? 0));
}

// по убыванию цены
function sortToLowPrice(products: Product[]) {
    return products.toSorted((p1, p2) => (p2?.price ?? 0) - (p1.price ?? 0));
}

// сначала со спец предложением
function sortSpecialOfferFoward(products: Product[]) {
    return products.toSorted((p1, p2) =>
        p1.isSpecialOffer && !p2.isSpecialOffer
            ? -1
            : (!p1.isSpecialOffer && !p2.isSpecialOffer) ||
                (p1.isSpecialOffer && p2.isSpecialOffer)
              ? 0
              : 1
    );
}
