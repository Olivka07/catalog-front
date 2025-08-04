import { createEvent, createStore, sample } from 'effector';
import { not } from 'patronum';

export const toggleIsMobileMenuShown = createEvent();
export const $isMobileMenuShown = createStore(false);

sample({
    clock: toggleIsMobileMenuShown,
    source: not($isMobileMenuShown),
    target: $isMobileMenuShown
});
