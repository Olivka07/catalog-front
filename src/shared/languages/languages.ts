import ruDict from './dicts/ru.json';

console.log(ruDict, 'ruDict');

export const languages = {
    ru: ruDict
} as const;

export type Languages = keyof typeof languages;
