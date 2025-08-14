// TODO категории

import { Category } from 'entities/catalog';

export const filters = [
    {
        name: 'bread',
        label: 'Хлеб'
    },
    {
        name: 'drinking',
        label: 'Напитки'
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
    }
] as const;

export const categoryKeyToTitleMap = filters.reduce(
    (acc, filter) => {
        return { ...acc, [filter.name]: filter.label };
    },
    {} as Record<Category, string>
);
