import { LANGUAGE_STORAGE_KEY } from './constants';
import { Languages } from './languages';

export const languageStorageModel = {
    getLanguage: () => {
        return localStorage.getItem(LANGUAGE_STORAGE_KEY) as Languages;
    },
    setLanguage: (lang: Languages) => {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
};
