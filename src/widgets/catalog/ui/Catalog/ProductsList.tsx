import React from 'react';
import css from './Catalog.module.scss';
import { ProductCard } from './ProductCard';
import { useUnit } from 'effector-react';
import { catalogPageModel } from 'pages/catalog/model';

export const ProductsList = () => {
    const products = useUnit(catalogPageModel.$catalogProducts);
    return (
        <ul className={css.products}>
            {products.map((p) => (
                <ProductCard product={p} key={p.id} />
            ))}
        </ul>
    );
};
