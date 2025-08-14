import { useEffect } from 'react';

export const useEventListener = <K extends keyof DocumentEventMap>(
    type: K,
    listener: EventListener,
    target: HTMLElement | Document = document
) => {
    useEffect(() => {
        target.addEventListener(type, listener);

        return () => {
            target.removeEventListener(type, listener);
        };
    }, []);
};
