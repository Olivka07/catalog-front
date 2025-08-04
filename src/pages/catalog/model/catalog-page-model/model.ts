import { combine, createStore, sample } from 'effector';
import { Product, productModel } from 'entities/catalog';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import { querySync } from 'shared/effector/querySync';
import { routes } from 'shared/router';

export const currentRoute = routes.catalog;

export const $catalogProducts = createStore<Product[]>([]).on(
    productModel.$products,
    (_, products) => products
);

const $breadCategory = catalogIndicators.$value.map(({ bread }) => bread);
const $drinkingCategory = catalogIndicators.$value.map(
    ({ drinking }) => drinking
);
const $chocolateCategory = catalogIndicators.$value.map(
    ({ chocolate }) => chocolate
);

const $categories = combine(
    $breadCategory,
    $drinkingCategory,
    $chocolateCategory,
    (bread, drinking, chocolate) => ({
        bread,
        drinking,
        chocolate
    })
);

sample({
    clock: $categories,
    source: {
        products: productModel.$products,
        categories: $categories
    },
    fn: ({ categories, products }) =>
        Object.values(categories).some(Boolean)
            ? products.filter((p) => categories[p.category])
            : products,
    target: $catalogProducts
});

sample({
    clock: currentRoute.opened,
    source: {
        queries: currentRoute.$query,
        initProducts: productModel.$products
    },
    fn: ({ initProducts }) => initProducts,
    target: $catalogProducts
});

querySync({
    route: currentRoute,
    control: catalogIndicators
});
