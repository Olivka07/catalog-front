import { ProductImageKey } from 'shared/assets/images/products';

export type Category =
    | 'bread'
    | 'drinking'
    | 'chancellery'
    | 'chocolate'
    | 'milk'
    | 'sauce'
    | 'teaCoffeeCacao'
    | 'vegetables';

export type Product = {
    id: string;
    title: string;
    category: Category;
    price?: number;
    img?: ProductImageKey;
    description?: string;
    isSpecialOffer?: boolean;
    isAbsent?: boolean; // отсутствует
};
