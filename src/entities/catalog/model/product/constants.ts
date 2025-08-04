import { Product } from './types';
import { createNewProduct } from './utils';

export const products: Product[] = [
    createNewProduct('Плюшка', 'bread', { img: 'bun', price: 13 }),
    createNewProduct('Плюшка сдобная', 'bread', {
        price: 26,
        isSpecialOffer: false
    }),
    createNewProduct('Кошкинский хлеб', 'bread', { price: 1 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 }),
    createNewProduct('Кошкинский лимонад', 'drinking', { price: 2121 })
];
