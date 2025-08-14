import { useUnit } from 'effector-react';
import { $language } from '../../languages/language-model';
import { GetLangKey, GetLangNumericKey } from 'shared/languages/types';
import { languages } from 'shared/languages/languages';
import { NumericRule } from 'shared/languages/constants';
import { useEvent } from '../useEvent';
import { useMemo } from 'react';
import { WithReplace, withReplace } from 'shared/helpers/withReplace';
import { REPLACE_TOKEN } from 'shared/helpers/withReplace/constants';
import { LangValue } from 'shared/languages/utils';

/**
 *
 * @example
 */
const langNumericKeyByRule1 = (number: number, strings: string[]) => {
    if (number % 10 === 1 && number % 100 !== 11) return strings[0];

    if (number % 10 === 2 && number % 100 !== 12) return strings[1];

    if (number % 10 === 3 && number % 100 !== 13) return strings[2];

    if (number % 10 === 4 && number % 100 !== 14) return strings[3];

    return strings[4];
};

const getLangNumericKeyByRule = (
    rule: NumericRule,
    number: number,
    strings: string[]
) => {
    let resultString: string;

    switch (rule) {
        case NumericRule.rule1:
            resultString = langNumericKeyByRule1(number, strings);
            break;
        default:
            resultString = number.toString();
    }

    return withReplace(resultString, REPLACE_TOKEN, number);
};

export const useLang = () => {
    const lang = useUnit($language);

    const getLangKey = useEvent((key: GetLangKey) => {
        const resString = new LangValue(
            languages[lang][key] ?? '',
            withReplace
        );

        return resString;
    });

    const getLangNumericKey = useEvent(
        (
            number: number,
            key: GetLangNumericKey,
            rule: NumericRule = NumericRule.rule1
        ) => {
            const strings = languages[lang][key];

            return getLangNumericKeyByRule(rule, number, strings);
        }
    );

    return useMemo(() => ({ getLangKey, getLangNumericKey }) as const, [lang]);
};
