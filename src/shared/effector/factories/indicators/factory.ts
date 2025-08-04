import { combine, createEvent, createStore, sample } from 'effector';
import { toStore } from 'shared/effector';

import type {
    FactoryOptions,
    IndicatorsControl,
    IndicatorsRecord
} from './types';
import {
    applyIndicators,
    isDirty,
    resetToDefaults,
    updateIndicators
} from './utils';

/**
 * @param defaultValues - initial indicators values. Must be defined for usage $isDirty flag and reset event
 * @param ignoredKeys - keys, that must be ignored in $isDirty compute and on resets deps
 * @param ignoredForReset - keys, that must be ignored on *reset* event call
 * @param resets - record of "dependencies", where each property is the changeable indicator and property value is resettable indicator
 */
export function createIndicatorsControl<T extends IndicatorsRecord>({
    defaultValues = {},
    ignoredKeys = [],
    ignoredForReset = [],
    resets = {}
}: FactoryOptions<T>): IndicatorsControl<T> {
    const $ignoredKeys = toStore(ignoredKeys);
    const $ignoredForReset = toStore(ignoredForReset);
    const $resets = toStore(resets);

    const $defaults = createStore({ ...defaultValues });

    const $indicators = createStore<Partial<T>>({ ...defaultValues });

    const $isDirty = combine(
        $defaults,
        $indicators,
        $ignoredKeys,
        $ignoredForReset,
        (defaults, indicators, ignoredKeys, ignoredForReset) =>
            isDirty({ defaults, indicators, ignoredKeys, ignoredForReset })
    );

    const _apply = createEvent<Partial<T>>();
    const update = createEvent<Partial<T>>();
    const reset = createEvent();

    sample({
        clock: _apply,
        source: $indicators,
        fn: (params, values) => applyIndicators(params, values),
        target: $indicators
    });

    sample({
        clock: update,
        source: {
            defaults: $defaults,
            indicators: $indicators,
            resets: $resets,
            ignoredKeys: $ignoredKeys,
            ignoredForReset: $ignoredForReset
        },
        fn: (source, values) => updateIndicators({ ...source, values }),
        target: $indicators
    });

    sample({
        clock: reset,
        source: {
            indicators: $indicators,
            defaults: $defaults,
            ignoredForReset: $ignoredForReset
        },
        fn: (source) => resetToDefaults(source),
        target: $indicators
    });

    return {
        _apply,
        update,
        reset,
        $isDirty,
        $value: $indicators,
        $defaults,

        '@@unitShape': () => ({
            indicators: $indicators,
            isDirty: $isDirty,
            updateIndicators: update,
            resetIndicators: reset
        })
    };
}
