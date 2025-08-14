import { useRef, useState, useSyncExternalStore } from 'react';
import { NoopFn } from 'shared/types';

type UseResizeObserverProps<T extends HTMLElement> = {
    querySelector?: string;
    ref?: React.MutableRefObject<T>;
};

export const useResizeObserver = <T extends HTMLElement = HTMLElement>(
    props: UseResizeObserverProps<T> = {}
) => {
    const { querySelector, ref } = props;
    const innerRef = useRef<T>(ref?.current ?? null);

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

        if (querySelector && !innerRef.current) {
            innerRef.current = document.querySelector(querySelector);
        }

        if (innerRef.current) {
            observer.observe(innerRef.current);
        }

        return () => observer.disconnect();
    };

    return [innerRef, useSyncExternalStore(subscribe, getShapshot)] as const;
};
