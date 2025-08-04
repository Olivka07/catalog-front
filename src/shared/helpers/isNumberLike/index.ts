import { isNumber } from '../isNumber';
import { isString } from '../isString';

export const isNumberLike = (value: unknown): value is number | string => {
    return isString(value) && value.length > 0
        ? !Number.isNaN(Number(value))
        : isNumber(value);
};
