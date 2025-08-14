import { ProductImageKey } from 'shared/assets/images/products';

export type Category =
    | 'bread'
    | 'drinking'
    | 'chocolate'
    | 'teaCoffeeCacao'
    | 'milk';

export type Product = {
    id: string;
    title: string;
    category: Category;
    price?: number;
    img?: ProductImageKey;
    description?: string;
    isSpecialOffer?: boolean;
};
