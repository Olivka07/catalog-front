import { combine, createStore, sample } from 'effector';
import { Product, productModel } from 'entities/catalog';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import { sortCatalogByWay } from 'features/catalogSort/lib/utils';
import { debounce } from 'patronum';
import { querySync } from 'shared/effector/querySync';
import { isIncludeStr } from 'shared/helpers';
import { routes } from 'shared/router';
import { categoryKeyToTitleMap } from 'widgets/sidebar/model/constants';

const DEBOUNCE_TIME = 600;
export const currentRoute = routes.catalog;

export const $catalogProducts = createStore<Product[]>([]).on(
    productModel.$products,
    (_, products) => products
);

const $search = catalogIndicators.$value.map(({ search }) => search);
const debounceSearchChanged = debounce($search, DEBOUNCE_TIME);

const $sort = catalogIndicators.$value.map(({ sort }) => sort);
const debounceSortChanged = debounce($sort, DEBOUNCE_TIME);

const $breadCategory = catalogIndicators.$value.map(({ bread }) => bread);
const $drinkingCategory = catalogIndicators.$value.map(
    ({ drinking }) => drinking
);
const $chocolateCategory = catalogIndicators.$value.map(
    ({ chocolate }) => chocolate
);
const $teaCoffeeCacaoCategory = catalogIndicators.$value.map(
    ({ teaCoffeeCacao }) => teaCoffeeCacao
);
const $milkCategory = catalogIndicators.$value.map(({ milk }) => milk);

const $categories = combine(
    $breadCategory,
    $drinkingCategory,
    $chocolateCategory,
    $teaCoffeeCacaoCategory,
    $milkCategory,
    (bread, drinking, chocolate, teaCoffeeCacao, milk) => ({
        bread,
        drinking,
        chocolate,
        teaCoffeeCacao,
        milk
    })
);

sample({
    clock: [$categories, debounceSortChanged, debounceSearchChanged],
    source: {
        products: productModel.$products,
        search: $search,
        categories: $categories,
        sort: $sort
    },
    fn: ({ categories, search, products, sort }) => {
        let filtered = Object.values(categories).some(Boolean)
            ? products.filter((p) => categories[p.category])
            : products;

        filtered = filtered.filter((product) =>
            isIncludeStr(
                search,
                categoryKeyToTitleMap[product.category] ?? '',
                product.description ?? '',
                product.title
            )
        );

        return sortCatalogByWay(sort, filtered);
    },
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
