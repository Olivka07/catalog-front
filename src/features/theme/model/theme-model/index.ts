import {
    attach,
    createEffect,
    createEvent,
    createStore,
    sample
} from 'effector';
import { isAppTheme } from './utils';
import { THEME_KEY, AppTheme } from '../../constants';
import { initApp } from 'shared/model/app-model';

const getThemeFromStorageFx = createEffect(() => {
    const theme = localStorage.getItem(THEME_KEY);
    if (isAppTheme(theme)) return theme;
    throw new Error('It is not AppTheme');
});

const setThemeToStorageFx = createEffect((theme: AppTheme) => {
    localStorage.setItem(THEME_KEY, theme);
});

const initThemeToStorageFx = attach({ effect: setThemeToStorageFx });

sample({
    clock: initApp,
    target: getThemeFromStorageFx
});

sample({
    clock: getThemeFromStorageFx.failData,
    fn: () => AppTheme.LIGHT,
    target: initThemeToStorageFx
});

export const themeChanged = createEvent<AppTheme>();

sample({
    clock: themeChanged,
    target: setThemeToStorageFx
});

export const $theme = createStore<AppTheme>(null)
    .on(getThemeFromStorageFx.doneData, (_, theme) => theme)
    .on(initThemeToStorageFx.done, (_, { params: theme }) => theme)
    .on(themeChanged, (_, theme) => theme);
