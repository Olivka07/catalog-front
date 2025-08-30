import {
    createEffect,
    createEvent,
    createStore,
    restore,
    sample
} from 'effector';

export const initApp = createEvent();

// платформа
const setPlatform = createEvent<'ios' | 'android' | 'other'>();
export const $platform = restore(setPlatform, null);
const getPlatformFx = createEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) return 'android';
    if (/iPad|iPhone|iPod/.test(userAgent)) return 'ios';
    return 'other';
});

export const setIsDesktop = createEvent<boolean>();
export const $isDesktop = restore(setIsDesktop, true);

export const setIsMobile = createEvent<boolean>();
export const $isMobile = restore(setIsMobile, false);

sample({
    clock: initApp,
    target: getPlatformFx
});

sample({
    clock: getPlatformFx.doneData,
    target: setPlatform
});
