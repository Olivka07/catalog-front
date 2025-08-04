import { useMemo, useRef } from 'react';

type noop = (...args: any[]) => any;

export const useEvent = <T extends noop>(fn: T): T => {
    const refFn = useRef(fn);

    refFn.current = useMemo(() => fn, [fn]);

    const memoizedFn = useRef<T>(null);

    if (!memoizedFn.current) {
        memoizedFn.current = ((...args: Parameters<T>) => {
            return refFn.current.apply(this, args);
        }) as unknown as T;
    }
    return memoizedFn.current;
};
