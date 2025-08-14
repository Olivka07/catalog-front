import ruDict from './dicts/ru.json';

export const languages = {
    ru: ruDict
} as const;

export type Languages = keyof typeof languages;
