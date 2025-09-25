// TODO категории

import { Category } from 'entities/catalog';

export const filters = [
    {
        name: 'attend',
        label: 'Есть в наличии'
    },
    {
        name: 'bread',
        label: 'Хлеб'
    },
    {
        name: 'drinking',
        label: 'Напитки'
    },
    {
        name: 'fish',
        label: 'Рыба'
    },
    {
        name: 'sausageMeat',
        label: 'Мясные (колбасные) изделия'
    },
    {
        name: 'chocolate',
        label: 'Кондитерские изделия'
    },
    {
        name: 'teaCoffeeCacao',
        label: 'Чай-кофе-какао'
    },
    {
        name: 'milk',
        label: 'Молочная продукция'
    },
    {
        name: 'vegetables',
        label: 'Овощи'
    },
    {
        name: 'fruits',
        label: 'Фрукты и ягоды'
    },
    {
        name: 'sauce',
        label: 'Соусы'
    },
    {
        name: 'chancellery',
        label: 'Канцтовары'
    }
] as const;

export const categoryKeyToTitleMap = filters.reduce(
    (acc, filter) => {
        return { ...acc, [filter.name]: filter.label };
    },
    {} as Record<Category, string>
);
