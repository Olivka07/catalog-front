import { useEventListener } from '../useEventListener';

const MIN_DISTANCE_FOR_SWIPE = 100;

type UseSwipeParams = {
    target: HTMLElement;
    swipeMode?: 'horizontal' | 'vertical';
    swipeSide?: 'left' | 'right' | 'top' | 'down';
    swipeDistance?: number;
    cb: () => void;
};

export const useSwipe = (params: UseSwipeParams) => {
    const {
        cb,
        target,
        swipeMode = 'horizontal',
        swipeSide = 'left',
        swipeDistance = MIN_DISTANCE_FOR_SWIPE
    } = params;

    let startX: number;
    let startY: number;
    let rafId: number;
    let xDistance: number;
    let yDistance: number;
    let isRightSwipeSide: boolean;
    let isLeftSwipeSide: boolean;
    let isDownSwipeSide: boolean;
    let isTopSwipeSide: boolean;

    useEventListener('touchstart', (e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    useEventListener(
        'touchmove',
        (e: TouchEvent) => {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;

            xDistance = currentX - startX;
            yDistance = currentY - startY;

            isRightSwipeSide = xDistance > 0;
            isLeftSwipeSide = xDistance < 0;
            isDownSwipeSide = yDistance > 0;
            isTopSwipeSide = yDistance < 0;

            switch (swipeMode) {
                case 'horizontal':
                    if (
                        (swipeSide === 'left' && isLeftSwipeSide) ||
                        (swipeSide === 'right' && isRightSwipeSide)
                    ) {
                        // предотвращает скролл, фиксируя только свайп
                        e.preventDefault();
                        target.setAttribute(
                            'style',
                            `width: calc(100% - 200px);`
                        );
                    }
                    break;
                case 'vertical':
                    if (
                        (swipeSide === 'top' && isTopSwipeSide) ||
                        (swipeSide === 'down' && isDownSwipeSide)
                    ) {
                        // предотвращает скролл, фиксируя только свайп
                        e.preventDefault();
                        rafId = window.requestAnimationFrame(() => {
                            target.setAttribute(
                                'style',
                                `height: calc(100% - ${yDistance}px);`
                            );
                        });
                    }
                    break;
            }
        },
        target
    );

    useEventListener('touchend', () => {
        switch (swipeMode) {
            case 'horizontal':
                if (
                    Math.abs(xDistance) >= swipeDistance &&
                    ((swipeSide === 'left' && isLeftSwipeSide) ||
                        (swipeSide === 'right' && isRightSwipeSide))
                ) {
                    cb();
                }
                break;
            case 'vertical':
                if (
                    Math.abs(yDistance) >= swipeDistance &&
                    ((swipeSide === 'top' && isTopSwipeSide) ||
                        (swipeSide === 'down' && isDownSwipeSide))
                ) {
                    cb();
                }
        }

        if (rafId) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
        }
    });
};
