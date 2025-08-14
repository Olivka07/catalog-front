import { Product } from './types';
import { createNewProduct } from './utils';

export const products: Product[] = [
    createNewProduct('Плюшка', 'bread', {
        img: 'bun',
        price: 13,
        isSpecialOffer: true
    }),
    createNewProduct('Плюшка сдобная', 'bread', {
        price: 26,
        isSpecialOffer: false
    }),
    createNewProduct('Волжские просторы', 'chocolate', {
        price: 750,
        isSpecialOffer: false
    }),
    createNewProduct('Фурор', 'chocolate', {
        price: 380,
        isSpecialOffer: false
    }),
    createNewProduct('Choco Pie Яшки', 'chocolate', {
        price: 420,
        isSpecialOffer: false
    }),
    createNewProduct('Elle', 'chocolate', {
        price: 630,
        isSpecialOffer: false
    }),
    createNewProduct('Baby Fox 18г', 'chocolate', {
        price: 15,
        isSpecialOffer: true
    }),
    createNewProduct('Торт вафельный фундук Яшки', 'chocolate', {
        price: 155,
        isSpecialOffer: false
    }),
    createNewProduct('Фрутто Белло', 'chocolate', {
        price: 18,
        isSpecialOffer: false
    }),
    createNewProduct('Baby Fox 50г', 'chocolate', {
        price: 49,
        isSpecialOffer: false
    }),
    createNewProduct('Луссо (Смородина)', 'chocolate', {
        price: 340,
        isSpecialOffer: false
    }),
    createNewProduct('Харитоша', 'chocolate', {
        price: 405,
        isSpecialOffer: false
    }),
    createNewProduct('Глейс с кокосом', 'chocolate', {
        price: 320,
        isSpecialOffer: false
    }),
    createNewProduct('Глейс с шоколадом', 'chocolate', {
        price: 345,
        isSpecialOffer: false
    }),
    createNewProduct('Версаль', 'chocolate', {
        price: 425,
        isSpecialOffer: false
    }),
    createNewProduct('Бон Тайм', 'chocolate', {
        price: 9,
        isSpecialOffer: false
    }),
    createNewProduct('Джумка', 'chocolate', {
        price: 32,
        isSpecialOffer: false
    }),
    createNewProduct('Чио Рио', 'chocolate', {
        price: 500,
        isSpecialOffer: false
    }),
    createNewProduct('Мармелад Baby Fox, 30г', 'chocolate', {
        price: 16,
        isSpecialOffer: false
    }),
    createNewProduct('Мармелад Хиппо Бонди, 30г', 'chocolate', {
        price: 16,
        isSpecialOffer: false
    }),
    createNewProduct('Чай Принцесса Ява зел., 25шт', 'teaCoffeeCacao', {
        price: 55,
        isSpecialOffer: false
    }),
    createNewProduct('Молочный коктейль', 'milk', {
        price: 50
    })
];
