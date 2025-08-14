import { CatalogSearch } from 'features/catalogSearch/ui';
import { Navbar } from '../Navbar';
import { ThemesContainer } from '../ThemesContainer';
import { Header } from './Header';
import css from './Header.module.scss';
import { catalogPageModel } from 'pages/catalog/model';
import { useUnit } from 'effector-react';
import { CatalogSort } from 'features/catalogSort/public/ui';

export const HeaderDesktop = () => {
    const [isCatalogPageOpened] = useUnit([
        catalogPageModel.currentRoute.$isOpened
    ]);

    return (
        <Header>
            {isCatalogPageOpened && <CatalogSort className={css.catalogSort} />}
            {isCatalogPageOpened && <CatalogSearch />}
            <Navbar />
            <ThemesContainer className={css.themesContainerMobile} />
        </Header>
    );
};
