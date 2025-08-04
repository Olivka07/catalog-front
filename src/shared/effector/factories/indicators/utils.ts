import { IndicatorsRecord, Resets } from './types';
import {
    isBooleanString,
    isFalsyValue,
    isNumberLike,
    isUndefined,
    parseBooleanString,
    shallowEqualArrays
} from 'shared/helpers';

export function stringifyIndicators<T extends IndicatorsRecord>(
    indicators: Partial<T>,
    defaults: Partial<T>,
    excludedKeys: Array<keyof T>,
    includedKeys: Array<keyof T>
) {
    const result: Partial<T> = {};

    const mustSkipSerialize = (
        key: string,
        value: unknown,
        defaultValue: unknown
    ) => {
        const mode = Array.isArray(excludedKeys)
            ? 'exclude'
            : Array.isArray(includedKeys)
              ? 'include'
              : 'default';

        switch (mode) {
            case 'include':
                if (!includedKeys.includes(key)) {
                    return true;
                }
                break;

            case 'exclude':
                if (excludedKeys.includes(key)) return true;
                break;
        }

        return isFalsyValue(value) || value === defaultValue;
    };

    for (const key in indicators) {
        const value = indicators[key];
        const defaultValue = defaults[key];

        if (mustSkipSerialize(key, value, defaultValue)) continue;

        result[key] = indicators[key];
    }

    return new URLSearchParams(result).toString();
}

export function applyIndicatorsFromSearch<T extends IndicatorsRecord>(
    indicators: Partial<T>,
    search: string | Partial<T>
) {
    function parseValue(value: string): any {
        if (isNumberLike(value)) {
            return Number(value);
        }

        if (isBooleanString(value)) {
            return parseBooleanString(value);
        }

        // @ts-ignore
        return value.trim();
    }

    function parseArray(value: string): any {
        return value.split(',').map(parseValue);
    }

    const indicatorsFromSearch: Partial<T> = {};
    const searchParams = new URLSearchParams(search);

    searchParams.forEach((value, key: keyof T) => {
        if (Array.isArray(indicators[key])) {
            indicatorsFromSearch[key] = parseArray(value);
        } else {
            indicatorsFromSearch[key] = parseValue(value);
        }
    });

    return applyIndicators(indicators, indicatorsFromSearch);
}

export function applyIndicators<T extends IndicatorsRecord>(
    indicators: Partial<T>,
    values: Partial<T>
) {
    const newValue = { ...indicators };

    function validateValue<T extends any>(value: T) {
        if (Array.isArray(value))
            return value.filter((v) => !isFalsyValue(v)) as T;

        return value;
    }

    for (const key in values) {
        newValue[key] = validateValue(values[key]);
    }

    return newValue;
}

interface UtilsOptions<T extends IndicatorsRecord> {
    indicators: Partial<T>;
    values: Partial<T>;
    defaults: Partial<T>;
    ignoredForReset: (keyof T & string)[];
    ignoredKeys: (keyof T & string)[];
    resets: Resets<T>;
}

export function updateIndicators<T extends IndicatorsRecord>(
    options: UtilsOptions<T>
): Partial<T> {
    const indicators = applyIndicators(options.indicators, options.values);

    return resetDependents({
        ...options,
        indicators
    });
}

function resetDependents<T extends IndicatorsRecord>({
    defaults,
    resets,
    indicators,
    values,
    ignoredKeys
}: UtilsOptions<T>) {
    if (!resets) return indicators;

    const newIndicators = { ...indicators };

    const updatedKeys = Object.keys(values) as (keyof T)[];

    for (let [updatedKey, dependents] of Object.entries(resets)) {
        if (updatedKeys.includes(updatedKey) || updatedKey === '*') {
            // если нужно скинуть все поля (dependents) при изменении данного (updatedKey)
            if (dependents === '*') {
                dependents = Object.keys(indicators).filter(
                    (resetKey) =>
                        !(
                            ignoredKeys.includes(resetKey) ||
                            resetKey === updatedKey
                        )
                );
            }

            for (const resetKey of dependents) {
                // for case:
                // resets: { *: 'foo' }
                // values: { foo: 'newValue' }
                // where updatedKey=*, updatedKeys=['foo'], resetKey='foo'
                if (updatedKey === '*' && updatedKeys.includes(resetKey))
                    continue;

                if (isUndefined(defaults[resetKey])) {
                    delete newIndicators[resetKey];
                } else {
                    newIndicators[resetKey] = defaults[resetKey];
                }
            }
        }
    }

    return newIndicators;
}

export function resetToDefaults<T extends IndicatorsRecord>({
    indicators,
    defaults,
    ignoredForReset
}: Pick<UtilsOptions<T>, 'indicators' | 'defaults' | 'ignoredForReset'>) {
    const newIndicators = { ...indicators };

    for (const key in newIndicators) {
        if (ignoredForReset.includes(key)) continue;

        if (isUndefined(defaults[key])) {
            delete newIndicators[key];
        } else {
            newIndicators[key] = defaults[key];
        }
    }
    return newIndicators;
}

export function isDirty<T extends IndicatorsRecord>({
    indicators,
    defaults,
    ignoredKeys,
    ignoredForReset
}: Pick<
    UtilsOptions<T>,
    'indicators' | 'defaults' | 'ignoredKeys' | 'ignoredForReset'
>) {
    const shallowEqual = (first: unknown, second: unknown) => {
        if (Array.isArray(first) && Array.isArray(second)) {
            return shallowEqualArrays(first, second);
        }
        return Object.is(first, second);
    };

    for (const key in indicators) {
        if (ignoredKeys.includes(key) || ignoredForReset.includes(key))
            continue;

        if (!shallowEqual(indicators[key], defaults[key])) return true;
    }

    return false;
}
