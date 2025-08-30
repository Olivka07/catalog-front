import { useUnit } from 'effector-react';
import { ReactNode, createContext, useMemo } from 'react';
import { useMatchMedia, useResizeObserver } from 'shared/hooks';
import { appModel } from 'shared/model';
import {
    DesktopSize,
    LargeScreenSize,
    MobileSize,
    TabletSize
} from 'shared/utils/viewport';

type AdaptivityContextValue = {
    isLargeScreen: boolean;
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;

    /* в пикселях */
    screenWidth: number;
    screenHeight: number;
};

const defaultState: AdaptivityContextValue = {
    isLargeScreen: false,
    isDesktop: false,
    isTablet: false,
    isMobile: false,

    screenWidth: 0,
    screenHeight: 0
};

export const AdaptivityContext = createContext(defaultState);

type AdaptivityContextProviderProps = {
    children: ReactNode;
};

export const AdaptivityContextProvider = ({
    children
}: AdaptivityContextProviderProps) => {
    const [setIsDesktop, setIsMobile] = useUnit([
        appModel.setIsDesktop,
        appModel.setIsMobile
    ]);
    const isLargeScreen = useMatchMedia(
        `(min-width: ${LargeScreenSize.width.min}px)`
    );
    const isDesktop = useMatchMedia(`(min-width: ${DesktopSize.width.min}px)`);
    const isTablet = useMatchMedia(
        `(min-width: ${TabletSize.width.min}px) and (max-width: ${TabletSize.width.max}px)`
    );
    const isMobile = useMatchMedia(`(max-width: ${MobileSize.width.max}px)`);

    const [_, size] = useResizeObserver({ querySelector: '#root' });

    const value = useMemo(() => {
        setIsDesktop(isDesktop);
        setIsMobile(isMobile);

        return {
            isLargeScreen,
            isDesktop,
            isTablet,
            isMobile,

            screenWidth: size.width,
            screenHeight: size.height
        };
    }, [isLargeScreen, isDesktop, isTablet, isMobile, size.height, size.width]);

    return (
        <AdaptivityContext.Provider value={value}>
            {children}
        </AdaptivityContext.Provider>
    );
};
