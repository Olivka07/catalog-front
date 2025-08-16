import { useEventListener } from '../useEventListener';

export const useClickOutside = (
    ref: React.MutableRefObject<HTMLDivElement>,
    cb: EventListener,
    target: HTMLElement | Document = document
) => {
    useEventListener(
        'click',
        (e) => {
            if (!ref.current || ref.current.contains(e.target as Node)) return;
            cb(e);
        },
        target
    );
};
