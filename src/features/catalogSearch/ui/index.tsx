import { useUnit } from 'effector-react';
import { catalogIndicators } from 'features/catalog/model/filters-model/indicators';
import React, { ChangeEvent } from 'react';
import { useLang } from 'shared/hooks/useLang/useLang';
import { Button, InputField } from 'shared/ui';
import css from './index.module.scss';

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
        <>
            <InputField
                name="search"
                onChange={handleSearchChange}
                value={search}
                autoComplete="off"
                className={css.search}
                placeholder={getLangKey('search').toString()}
            />
            <Button
                iconName="close"
                theme="transparent"
                className={css.close}
            />
        </>
    );
};
