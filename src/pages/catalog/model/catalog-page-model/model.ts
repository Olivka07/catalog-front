import { combine, createEvent, createStore, sample } from 'effector';
import { Product, productModel } from 'entities/catalog';
import { CatalogSortingMethod } from 'entities/catalog/lib/constants';
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

export const $search = catalogIndicators.$value.map(({ search }) => search);
const debounceSearchChanged = debounce($search, DEBOUNCE_TIME);

const $sort = catalogIndicators.$value.map(({ sort }) => sort);
const debounceSortChanged = debounce($sort, DEBOUNCE_TIME);
export const $isSortSelected = $sort.map(
    (sort) => !!sort && sort !== CatalogSortingMethod.NO_SORTING
);

const $attend = catalogIndicators.$value.map(({ attend }) => attend);
const $breadCategory = catalogIndicators.$value.map(({ bread }) => bread);
const $drinkingCategory = catalogIndicators.$value.map(
    ({ drinking }) => drinking
);
const $chancelleryCategory = catalogIndicators.$value.map(
    ({ chancellery }) => chancellery
);
const $chocolateCategory = catalogIndicators.$value.map(
    ({ chocolate }) => chocolate
);
const $teaCoffeeCacaoCategory = catalogIndicators.$value.map(
    ({ teaCoffeeCacao }) => teaCoffeeCacao
);
const $milkCategory = catalogIndicators.$value.map(({ milk }) => milk);
const $sauceCategory = catalogIndicators.$value.map(({ sauce }) => sauce);
const $vegetables = catalogIndicators.$value.map(
    ({ vegetables }) => vegetables
);
const $fruits = catalogIndicators.$value.map(({ fruits }) => fruits);

const $categories = combine(
    $breadCategory,
    $chancelleryCategory,
    $chocolateCategory,
    $drinkingCategory,
    $fruits,
    $milkCategory,
    $sauceCategory,
    $teaCoffeeCacaoCategory,
    $vegetables,
    (
        bread,
        chancellery,
        chocolate,
        drinking,
        fruits,
        milk,
        sauce,
        teaCoffeeCacao,
        vegetables
    ) => ({
        bread,
        chancellery,
        chocolate,
        drinking,
        fruits,
        milk,
        sauce,
        teaCoffeeCacao,
        vegetables
    })
);

sample({
    clock: [$attend, $categories, debounceSortChanged, debounceSearchChanged],
    source: {
        attend: $attend,
        products: productModel.$products,
        search: $search,
        categories: $categories,
        sort: $sort
    },
    fn: ({ attend, categories, search, products, sort }) => {
        let filtered = Object.values(categories).some(Boolean)
            ? products.filter((p) => categories[p.category])
            : products;

        if (attend) {
            filtered = filtered.filter((p) => !p.isAbsent);
        }

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

export const isPageMountedTriggered = createEvent();
