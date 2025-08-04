export enum ScreenWidth {
    LARGE_SCREEN = 1,
    DESKTOP = 2,
    TABLET = 3,
    MOBILE = 4
}

export const LargeScreenSize = {
    width: {
        min: 1666
    }
} as const;

export const DesktopSize = {
    width: {
        min: 1024,
        max: 1666
    }
} as const;

export const TabletSize = {
    width: {
        min: 768,
        max: 1023.5
    }
} as const;

export const MobileSize = {
    width: {
        min: 320,
        max: 767.5
    }
} as const;
