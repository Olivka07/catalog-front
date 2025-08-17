import { useEventListener } from '../useEventListener';

const MIN_DISTANCE_FOR_SWIPE = 400;

type UseSwipeParams = {
    target?: HTMLElement | Document;
    swipeMode?: 'horizontal' | 'vertical';
    swipeSide?: 'left' | 'right' | 'top' | 'down';
    swipeDistance?: number;
    cb: () => void;
};

export const useSwipe = (params: UseSwipeParams) => {
    const {
        cb,
        target = document,
        swipeMode = 'horizontal',
        swipeSide = 'left',
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

            const diffX = currentX - startX;
            const diffY = currentY - startY;

            const isRightSwipeSide = diffX > 0;
            const isLeftSwipeSide = diffX < 0;
            const isDownSwipeSide = diffY > 0;
            const isTopSwipeSide = diffY < 0;

            const xDistance = Math.abs(diffX);
            const yDistance = Math.abs(diffY);

            switch (swipeMode) {
                case 'horizontal':
                    if (
                        xDistance >= swipeDistance &&
                        ((swipeSide === 'left' && isLeftSwipeSide) ||
                            (swipeSide === 'right' && isRightSwipeSide))
                    ) {
                        // предотвращает скролл, фиксируя только свайп
                        e.preventDefault();
                        cb();
                    }
                    break;
                case 'vertical':
                    if (
                        yDistance >= swipeDistance &&
                        ((swipeSide === 'top' && isTopSwipeSide) ||
                            (swipeSide === 'down' && isDownSwipeSide))
                    ) {
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
