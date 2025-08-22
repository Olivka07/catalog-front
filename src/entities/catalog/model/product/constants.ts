import { Product } from './types';
import { createNewProduct } from './utils';

export const products: Product[] = [
    createNewProduct('Волжские просторы', 'chocolate', {
        price: 750,
        isSpecialOffer: false,
        img: 'voljskie_prostori'
    }),
    createNewProduct('Фурор', 'chocolate', {
        price: 380,
        isSpecialOffer: false,
        img: 'furor'
    }),
    createNewProduct('Choco Pie Яшки', 'chocolate', {
        price: 420,
        isSpecialOffer: false,
        img: 'choco_pie_jashki'
    }),
    createNewProduct('Elle', 'chocolate', {
        price: 630,
        isSpecialOffer: false,
        img: 'elle'
    }),
    createNewProduct('Baby Fox 18г', 'chocolate', {
        price: 15,
        isSpecialOffer: true,
        isAbsent: true,
        img: 'baby_fox_18'
    }),
    createNewProduct('Торт вафельный фундук Яшки', 'chocolate', {
        price: 155,
        isSpecialOffer: false,
        img: 'tort_vafelniy_funduk_jashki'
    }),
    createNewProduct('Фрутто Белло', 'chocolate', {
        price: 18,
        isSpecialOffer: false,
        img: 'frutto_bello'
    }),
    createNewProduct('Baby Fox 50г', 'chocolate', {
        price: 49,
        isSpecialOffer: false,
        img: 'baby_fox_50'
    }),
    createNewProduct('Луссо (Смородина)', 'chocolate', {
        price: 340,
        isSpecialOffer: false,
        img: 'lusso_smorodina'
    }),
    createNewProduct('Харитоша', 'chocolate', {
        price: 405,
        isSpecialOffer: false,
        img: 'haritosha'
    }),
    createNewProduct('Глейс с кокосом', 'chocolate', {
        price: 320,
        isSpecialOffer: false,
        img: 'glase_s_kokosom'
    }),
    createNewProduct('Глейс с шоколадом', 'chocolate', {
        price: 345,
        isSpecialOffer: false,
        img: 'glase_s_shokoladom'
    }),
    createNewProduct('Версаль', 'chocolate', {
        price: 425,
        isSpecialOffer: false,
        img: 'versale'
    }),
    createNewProduct('Бон Тайм', 'chocolate', {
        price: 9,
        isSpecialOffer: false,
        img: 'bon_time'
    }),
    createNewProduct('Джумка', 'chocolate', {
        price: 32,
        isSpecialOffer: false,
        img: 'jumka'
    }),
    createNewProduct('Чио Рио', 'chocolate', {
        price: 500,
        isSpecialOffer: false,
        img: 'chio_rio'
    }),
    createNewProduct('Мармелад Baby Fox, 30г', 'chocolate', {
        price: 16,
        isSpecialOffer: false,
        img: 'baby_fox_marmelad'
    }),
    createNewProduct('Мармелад Хиппо Бонди, 30г', 'chocolate', {
        price: 16,
        isSpecialOffer: false,
        img: 'hippo_bondi_marmelad'
    }),
    createNewProduct('Чай Принцесса Ява зел., 25шт', 'teaCoffeeCacao', {
        price: 55,
        isSpecialOffer: false,
        img: 'tea_princess_java_green_25'
    }),
    createNewProduct('Молочный коктейль', 'milk', {
        price: 50
    })
];
