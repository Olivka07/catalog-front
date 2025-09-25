import { Product } from './types';
import { createNewProduct } from './utils';

export const products: Product[] = [
    createNewProduct('Торт Бэйкер Хаус', 'chocolate', {
        price: 195,
        img: 'tort_backer_house',
        isSpecialOffer: true
    }),
    createNewProduct('Рулет маковый', 'chocolate', {
        price: 150,
        img: 'rulet_makovy_sdobny',
        isSpecialOffer: true
    }),
    createNewProduct('Киндер Шоколад', 'chocolate', {
        price: 80,
        img: 'kinder_chocolate',
        isSpecialOffer: true
    }),
    createNewProduct('Киндер Кантри', 'chocolate', {
        price: 35,
        img: 'kinder_kantri',
        isSpecialOffer: true
    }),
    createNewProduct('Киндер Буэно', 'chocolate', {
        price: 60,
        img: 'kinder_bueno',
        isSpecialOffer: true
    }),
    createNewProduct('Баунти, 55г', 'chocolate', {
        price: 45,
        img: 'bounty',
        isSpecialOffer: true
    }),
    createNewProduct('Пикник, 76г', 'chocolate', {
        price: 65,
        img: 'picnic',
        isSpecialOffer: true
    }),
    createNewProduct('Баунти, 82.5г', 'chocolate', {
        price: 65,
        img: 'bounty',
        isSpecialOffer: true
    }),
    createNewProduct('Сникерс, 81г', 'chocolate', {
        price: 65,
        img: 'snickers',
        isSpecialOffer: true
    }),
    createNewProduct('Алёнка', 'chocolate', {
        price: 90,
        img: 'alenka',
        isSpecialOffer: true
    }),
    createNewProduct('Эгоист, 95г', 'teaCoffeeCacao', {
        price: 850,
        img: 'egoiste_95'
    }),
    createNewProduct('Мерси, 250г', 'chocolate', {
        price: 270,
        isSpecialOffer: true,
        img: 'merci_250'
    }),
    createNewProduct('Нутелла, 180г', 'chocolate', {
        price: 400,
        isSpecialOffer: true,
        img: 'nutella_180'
    }),
    createNewProduct('Скумбрия копчёная', 'fish', {
        price: 650,
        isSpecialOffer: true,
        img: 'skumbriya_kopcheniya',
        measure: 'kg'
    }),
    createNewProduct('Ветчина «Альми»', 'sausageMeat', {
        price: 605,
        isSpecialOffer: false,
        img: 'vetchina_almi',
        measure: 'kg'
    }),
    createNewProduct('Ветчина «Классическая»', 'sausageMeat', {
        price: 655,
        isSpecialOffer: false,
        img: 'vetchina_classicheskaya',
        measure: 'kg'
    }),
    createNewProduct('Колбаса «Молочная» (0.5кг)', 'sausageMeat', {
        price: 360,
        isSpecialOffer: false,
        img: 'kolbasa_molochnaya_05'
    }),
    createNewProduct('Колбаса «Домашняя»', 'sausageMeat', {
        price: 425,
        isSpecialOffer: false,
        img: 'kolbasa_domashnaya',
        measure: 'kg'
    }),
    createNewProduct('Колбаса «Дельная»', 'sausageMeat', {
        price: 530,
        isSpecialOffer: false,
        img: 'kolbasa_delnaya',
        measure: 'kg'
    }),
    createNewProduct('Колбаса «Невская»', 'sausageMeat', {
        price: 450,
        isSpecialOffer: false,
        img: 'kolbasa_nevskaya',
        measure: 'kg'
    }),
    createNewProduct('Колбаса «К столу»', 'sausageMeat', {
        price: 592,
        isSpecialOffer: false,
        img: 'kolbasa_k_stolu',
        measure: 'kg'
    }),
    createNewProduct('Колбаса «Купеческая»', 'sausageMeat', {
        price: 502,
        isSpecialOffer: false,
        img: 'kolbasa_kupecheskaya',
        measure: 'kg'
    }),
    createNewProduct('Шоколад Милка в ассорт.', 'chocolate', {
        price: 90,
        isSpecialOffer: true,
        img: 'milka'
    }),
    createNewProduct('Майонез провансаль Сдобри ведро', 'sauce', {
        price: 240,
        isSpecialOffer: true,
        img: 'majonez_provancal_sdobri_vedro'
    }),
    createNewProduct('Торабика Капучино', 'teaCoffeeCacao', {
        price: 22,
        img: 'torabika_cappuccino'
    }),
    createNewProduct('Торабика Латте', 'teaCoffeeCacao', {
        price: 22,
        img: 'torabika_latte'
    }),
    createNewProduct('Нескафе 3 в 1', 'teaCoffeeCacao', {
        price: 18,
        img: 'nescafe_3_v_1'
    }),
    createNewProduct('Коровка бекова', 'chocolate', {
        price: 270,
        img: 'corovka_bekova'
    }),
    createNewProduct('Бековская сливочная помадка', 'chocolate', {
        price: 310,
        img: 'pomadka_bekova'
    }),
    createNewProduct('Лукум', 'chocolate', {
        price: 250,
        img: 'lukum'
    }),
    createNewProduct('Пряники Подмосковные', 'chocolate', {
        price: 195,
        img: 'pryaniki_podmoskovnyje'
    }),
    createNewProduct('Пряники шоколадные', 'chocolate', {
        price: 230,
        img: 'pryaniki_shokoladnye'
    }),
    createNewProduct('Пряники мраморные', 'chocolate', {
        price: 200,
        img: 'pryaniki_podmoskovnyje'
    }),
    createNewProduct('Пряники северные', 'chocolate', {
        price: 190,
        img: 'pryaniki_podmoskovnyje'
    }),
    createNewProduct('Пряники шоколадно-апельсиновые', 'chocolate', {
        price: 220,
        img: 'pryaniki_shokoladno_apelsinovyje'
    }),
    createNewProduct('Тетради 12л клетка/линейка', 'chancellery', {
        price: 5,
        isSpecialOffer: true,
        img: 'tetad'
    }),
    createNewProduct('Молоко Пестравка ТФА', 'milk', {
        price: 120,
        img: 'moloko_pestravka_tfa'
    }),
    createNewProduct('Молоко Пестравка 1.5л', 'milk', {
        price: 217,
        img: 'moloko_pestravka_1500_ml'
    }),
    createNewProduct('Молоко Добрая Бурёнка ТФА', 'milk', {
        price: 125,
        img: 'moloko_dobrya_burenka_tfa'
    }),
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
        price: 52,
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
    })
];
