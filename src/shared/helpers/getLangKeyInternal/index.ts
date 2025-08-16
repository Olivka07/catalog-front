/**
 * если необходимо получить перевод вне React
 */

import { languages } from 'shared/languages';
import { GetLangKey } from 'shared/languages/types';
import { LangValue, languageStorageModel } from 'shared/languages/utils';
import { withReplace } from '../withReplace';

export const getLangKeyInternal = (key: GetLangKey) => {
    let lang = languageStorageModel.getLanguage();
    if (!lang) {
        lang = 'ru';
        languageStorageModel.setLanguage('ru');
    }

    const resString = new LangValue(languages[lang][key] ?? '', withReplace);

    return resString;
};
