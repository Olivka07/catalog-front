import { useSyncExternalStore } from 'react';
import { NoopFn } from 'shared/types';

export const useMatchMedia = (query: string) => {
    const getShapshot = () => window.matchMedia(query).matches;

    const subscribe = (callback: NoopFn) => {
        const mediaQueryList = window.matchMedia(query);

        mediaQueryList.addEventListener('change', callback);

        return () => mediaQueryList.removeEventListener('change', callback);
    };

    return useSyncExternalStore(subscribe, getShapshot);
};
