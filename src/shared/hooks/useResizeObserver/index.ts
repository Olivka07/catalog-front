import { useRef, useState, useSyncExternalStore } from 'react';
import { NoopFn } from 'shared/types';

type UseResizeObserverProps = {
    querySelector?: string;
};

export const useResizeObserver = <T extends HTMLElement = HTMLElement>(
    props: UseResizeObserverProps = {}
) => {
    const { querySelector } = props;
    const ref = useRef<T>(null);

    const [size, setSize] = useState({ width: 0, height: 0 });

    const getShapshot = () => size;

    const subscribe = (callback: NoopFn) => {
        const observer = new ResizeObserver((entries) => {
            if (entries[0]) {
                const { width, height } = entries[0].contentRect;
                if (size.height !== height || size.width !== width) {
                    setSize({ width, height });
                }
                callback();
            }
        });

        if (querySelector && !ref.current) {
            ref.current = document.querySelector(querySelector);
        }

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    };

    return [ref, useSyncExternalStore(subscribe, getShapshot)] as const;
};
