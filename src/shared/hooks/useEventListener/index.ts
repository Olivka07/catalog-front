import { useEffect } from 'react';

export const useEventListener = <K extends keyof DocumentEventMap>(
    type: K,
    listener: EventListener,
    target: HTMLElement | Document = document
) => {
    useEffect(() => {
        if (target) target.addEventListener(type, listener);

        return () => {
            if (target) target.removeEventListener(type, listener);
        };
    }, [listener, target]);
};
