import { useEventListener } from '../useEventListener';

export const useClickOutside = (
    ref: React.MutableRefObject<HTMLDivElement>,
    cb: EventListener
) => {
    useEventListener('click', (e) => {
        if (!ref.current || ref.current.contains(e.target as Node)) return;
        cb(e);
    });
};
