import { useEventListener } from '../useEventListener';

const MIN_DISTANCE_FOR_SWIPE = 40;

type UseSwipeParams = {
    target?: HTMLElement | Document;
    swipeMode?: 'horizontal' | 'vertical';
    swipeDistance?: number;
    cb: () => void;
};

export const useSwipe = (params: UseSwipeParams) => {
    const {
        cb,
        target = document,
        swipeMode = 'horizontal',
        swipeDistance = MIN_DISTANCE_FOR_SWIPE
    } = params;

    let startX: number;
    let startY: number;

    useEventListener('touchstart', (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    useEventListener(
        'touchmove',
        (e: TouchEvent) => {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;

            const xDistance = currentX - startX;
            const yDistance = currentY - startY;

            switch (swipeMode) {
                case 'horizontal':
                    if (xDistance >= swipeDistance) {
                        // предотвращает скролл, фиксируя только свайп
                        e.preventDefault();
                        cb();
                    }
                    break;
                case 'vertical':
                    if (yDistance >= swipeDistance) {
                        // предотвращает скролл, фиксируя только свайп
                        e.preventDefault();
                        cb();
                    }
                    break;
            }
        },
        target
    );
};
