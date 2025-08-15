import { useUnit } from 'effector-react';
import { SortingOptions } from 'entities/catalog/lib/constants';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import React from 'react';
import { Select } from 'shared/ui/Select';

type CatalogSortProps = {
    className?: string;
};
export const CatalogSort = (props: CatalogSortProps) => {
    const { className } = props;
    const { indicators, updateIndicators } = useUnit(catalogIndicators);

    const handleChangeSortWay = (name: string, value: number) => {
        updateIndicators({ [name]: value });
    };

    return (
        <Select
            name="sort"
            inputPlacehoder="Отсортировать"
            className={className}
            value={indicators.sort}
            options={SortingOptions}
            onChange={handleChangeSortWay}
        />
    );
};
