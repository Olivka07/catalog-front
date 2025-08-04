import { REPLACE_TOKEN } from './constants';

export function withReplace(
    lang: string = '',
    token: string = REPLACE_TOKEN,
    replacement: string | number = ''
) {
    return lang.replace(token, replacement.toString());
}

export type WithReplace = typeof withReplace;
