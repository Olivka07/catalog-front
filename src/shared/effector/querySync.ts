import { RouteInstance } from 'atomic-router';
import { IndicatorsControl } from './factories/indicators/types';
import { Store, sample } from 'effector';
import { applyIndicatorsFromSearch } from './factories/indicators/utils';
import { isFalsyValue } from 'shared/helpers';

type QuerySyncParams<P, I> = {
    route: RouteInstance<P>;
    control: IndicatorsControl<I>;
};

export function querySync<P, I>({ route, control }: QuerySyncParams<P, I>) {
    sample({
        clock: route.opened,
        source: {
            query: route.$query as Store<I>,
            indicators: control.$defaults
        },
        fn: ({ query, indicators }) =>
            applyIndicatorsFromSearch(indicators, query),
        target: control.update
    });

    sample({
        clock: control.$value,
        source: route.$params,
        fn: (params, query) => {
            const cleanQuery = Object.fromEntries(
                Object.entries(query).filter(
                    ([_, value]) => !isFalsyValue(value)
                )
            );
            return { params, query: cleanQuery };
        },
        target: route.navigate
    });
}
