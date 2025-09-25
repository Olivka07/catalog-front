import { ProductImageKey } from 'shared/assets/images/products';
import { GetLangKey } from 'shared/languages/types';

export type Category =
    | 'bread'
    | 'drinking'
    | 'chancellery'
    | 'chocolate'
    | 'fish'
    | 'fruits'
    | 'milk'
    | 'sauce'
    | 'sausageMeat'
    | 'teaCoffeeCacao'
    | 'vegetables';

const MeasureLabel = [
    {
        name: 'kg',
        langKey: 'kg'
    }
] as const;

export type Measure = (typeof MeasureLabel)[number]['name'];

export const MeasureMapper = MeasureLabel.reduce(
    (acc, item) => ({ ...acc, [item.name]: item.langKey }),
    {} as Record<Measure, GetLangKey>
);

export type Product = {
    id: string;
    title: string;
    category: Category;
    price?: number;
    img?: ProductImageKey;
    description?: string;
    isSpecialOffer?: boolean;
    isAbsent?: boolean; // отсутствует
    measure?: Measure;
};
