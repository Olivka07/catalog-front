import { useUnit } from 'effector-react';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import React, { ChangeEvent } from 'react';
import { useLang } from 'shared/hooks/useLang/useLang';
import { InputField } from 'shared/ui';

export const CatalogSearch = () => {
    const { getLangKey } = useLang();

    const [{ search }, updateCatalogIndicators] = useUnit([
        catalogIndicators.$value,
        catalogIndicators.update
    ]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        updateCatalogIndicators({ search: e.target.value });
    };
    return (
        <InputField
            name="search"
            onChange={handleSearchChange}
            value={search}
            autoComplete="off"
            placeholder={getLangKey('search').toString()}
        />
    );
};
