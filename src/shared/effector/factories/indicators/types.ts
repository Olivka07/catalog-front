import type { EventCallable, Store } from 'effector';

export type IndicatorsRecord = Record<string, any>;

export type Resets<T extends IndicatorsRecord> = Partial<
    Record<(keyof T & string) | '*', (keyof T)[] | '*'>
>;

export type FactoryOptions<T extends IndicatorsRecord> = Partial<{
    defaultValues: Partial<T>;
    ignoredForReset: (keyof T & string)[];
    resets: Resets<T>;
    ignoredKeys: (keyof T & string)[];
}>;

export interface IndicatorsControl<T extends IndicatorsRecord> {
    $value: Store<Partial<T>>;
    $defaults: Store<Partial<T>>;
    $isDirty: Store<boolean>;

    _apply: EventCallable<Partial<T>>;
    update: EventCallable<Partial<T>>;
    reset: EventCallable<void>;

    '@@unitShape': () => {
        indicators: Store<Partial<T>>;
        isDirty: Store<boolean>;
        resetIndicators: EventCallable<void>;
        updateIndicators: EventCallable<Partial<T>>;
    };
}
