import { createEffect, createEvent, createStore, sample } from 'effector';
import { Languages } from './languages';
import { initApp } from '../model/app-model';
import { languageStorageModel } from './utils';

export const $language = createStore<Languages>(null);

const getLanguageFromStorageFx = createEffect(languageStorageModel.getLanguage);

sample({
    clock: initApp,
    target: getLanguageFromStorageFx
});

sample({
    clock: getLanguageFromStorageFx.doneData,
    fn: (lang) => lang ?? 'ru',
    target: $language
});

const setLanguageToStorageFx = createEffect(languageStorageModel.setLanguage);

export const changedLanguage = createEvent<Languages>();

sample({
    clock: changedLanguage,
    target: [setLanguageToStorageFx, $language]
});
