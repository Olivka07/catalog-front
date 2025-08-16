import React, { useRef } from 'react';
import css from './Catalog.module.scss';
import { ProductCard } from './ProductCard';
import { useUnit } from 'effector-react';
import { catalogPageModel } from 'pages/catalog/model';
import { PageEmptyMessage } from 'shared/ui/PageEmptyMessage';
import { useLang } from 'shared/hooks/useLang/useLang';
import { ToUpButton } from 'features/toUp/ui';
import { useRefState } from 'shared/hooks/useRefState';

export const ProductsList = () => {
    const { getLangKey } = useLang();
    const listRef = useRefState<HTMLUListElement>(null);
    const products = useUnit(catalogPageModel.$catalogProducts);

    if (products?.length === 0)
        return <PageEmptyMessage text={getLangKey('empty_catalog')} />;

    return (
        <>
            <ul ref={listRef} className={css.products}>
                {products.map((p) => (
                    <ProductCard product={p} key={p.id} />
                ))}
            </ul>
            <ToUpButton ref={listRef} />
        </>
    );
};
