import { createStore, is, Store, StoreWritable } from 'effector';

export function toStore<T extends any>(
    value: T | StoreWritable<T>,
    name?: string
): StoreWritable<T>;
export function toStore<T extends any>(
    value: T | Store<T>,
    name?: string
): Store<T>;

export function toStore<T extends any>(
    value: T | Store<T> | StoreWritable<T>,
    name?: string
) {
    if (is.store(value)) return value;

    return createStore(value, { name });
}
