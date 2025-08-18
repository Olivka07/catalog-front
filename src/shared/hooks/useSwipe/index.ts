import { useEvent } from '../useEvent';
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

    let initStyle: string;
    let initWidth: number;
    let initHeight: number;
    let startX: number;
    let startY: number;
    let xDistance: number;
    let yDistance: number;
    let isRightSwipeSide: boolean;
    let isLeftSwipeSide: boolean;
    let isDownSwipeSide: boolean;
    let isTopSwipeSide: boolean;

    const handleTouchStart = useEvent((e: TouchEvent) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initStyle = target.getAttribute('style');
        initWidth = target.getBoundingClientRect().width;
        initHeight = target.getBoundingClientRect().height;
    });
    useEventListener('touchstart', handleTouchStart);

    const handleTouchMove = useEvent((e: TouchEvent) => {
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
                    const currentWidth = initWidth + xDistance;
                    requestAnimationFrame(() => {
                        target.style.width = `${currentWidth}px`;
                        target.style.opacity = `${currentWidth / initWidth}`;
                        target.style.transition = 'all 0.3s ease';
                    });
                }
                break;
            case 'vertical':
                if (
                    (swipeSide === 'top' && isTopSwipeSide) ||
                    (swipeSide === 'down' && isDownSwipeSide)
                ) {
                    // предотвращает скролл, фиксируя только свайп
                    e.preventDefault();
                    const currentHeight = initHeight - yDistance;
                    requestAnimationFrame(() => {
                        target.style.width = `${currentHeight}px`;
                        target.style.opacity = `${currentHeight / initHeight}`;
                        target.style.transition = 'all 0.3s ease';
                    });
                }
                break;
        }
    });
    useEventListener('touchmove', handleTouchMove, target);

    const handleTouchEnd = useEvent(() => {
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

        requestAnimationFrame(() => {
            target.setAttribute('style', initStyle);
        });
    });
    useEventListener('touchend', handleTouchEnd);
};
