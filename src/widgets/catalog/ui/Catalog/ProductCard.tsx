import { Product } from 'entities/catalog';
import React from 'react';
import { Card, Image } from 'shared/ui';
import css from './Catalog.module.scss';
import { cn } from 'shared/helpers';
import { ProductImage } from 'shared/assets/images/products';
import { Typography } from 'shared/ui/Typography/Typography';
import { useLang } from 'shared/hooks/useLang/useLang';

type ProductCardProps = {
    product: Product;
};
export const ProductCard = (props: ProductCardProps) => {
    const { product } = props;

    const imgSrc = ProductImage[product.img];

    const { getLangNumericKey } = useLang();

    const price = product.price;

    return (
        <li
            className={cn(css.products__item)}
            data-category={product.category}
            data-id={product.id}
        >
            <Card
                className={cn({ [css.specialOffer]: product.isSpecialOffer })}
            >
                <Card.Header>
                    <Typography.card>
                        {product.title.toUpperCase()}
                    </Typography.card>
                </Card.Header>
                <Card.Body className={css.item__image}>
                    {!!imgSrc && <Image src={imgSrc} alt={product.title} />}
                </Card.Body>
                {!!product.price && (
                    <Card.Footer>
                        <Typography.card>
                            {getLangNumericKey(price, 'rubles')}
                        </Typography.card>
                    </Card.Footer>
                )}
            </Card>
        </li>
    );
};
