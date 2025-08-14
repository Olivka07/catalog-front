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

export class LangValue {
    public value: {
        str: string;
        withReplace: (token: string, replacement: string | number) => string;
    } = {} as {
        str: string;
        withReplace: (token: string, replacement: string | number) => string;
    };

    constructor(
        str: string,
        withReplace: (token: string, replacement: string | number) => string
    ) {
        this.value.str = str;
        Object.defineProperty(this.value, 'withReplace', {
            writable: false,
            configurable: false,
            enumerable: false,
            value: withReplace.bind(null, this.value.str)
        });
    }

    toString() {
        return this.value.str;
    }

    get() {
        return this.value;
    }
}
