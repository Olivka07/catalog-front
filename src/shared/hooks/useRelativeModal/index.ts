import { useEffect, useRef, useState } from 'react';

// значение от краев
const TRASHOLD = 5;

type UseRelativeModalParams = {
    isShown: boolean;
};

export const useRelativeModal = (params: UseRelativeModalParams) => {
    const { isShown } = params;
    const [translateDiff, setTranslateDiff] = useState<[number, number]>([
        null,
        null
    ]);
    const relativeModalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isShown && relativeModalRef.current) {
            let [xDiff, yDiff]: [number, number] = [0, 0];
            const { right, left, top, bottom } =
                relativeModalRef.current.getBoundingClientRect();

            const xMax = window.visualViewport.width - TRASHOLD;
            const xMin = TRASHOLD;
            if (right > xMax) {
                xDiff = xMax - right;
            } else if (left < xMin) {
                xDiff = xMin - left;
            }

            const yMax = window.visualViewport.height - TRASHOLD;
            const yMin = TRASHOLD;
            if (bottom > yMax) {
                yDiff = yMax - bottom;
            } else if (top < yMin) {
                yDiff = yMin - top;
            }

            setTranslateDiff([xDiff, yDiff]);
        }

        if (!isShown) {
            setTranslateDiff([null, null]);
        }
    }, [isShown]);

    return {
        translateDiff,
        relativeModalRef
    };
};
