import { useUnit } from 'effector-react';
import { MenuItem } from '../MenuItem';
import { Navbar } from '../Navbar';
import { ThemesContainer } from '../ThemesContainer';
import { Header } from './Header';
import css from './Header.module.scss';
import { mobileMenuModel } from 'features/sidebar';
import { Button } from 'shared/ui';
import { modalsModel } from 'shared/model/modals';
import {
    MENU_MODAL,
    SEARCH_CATALOG_MODAL,
    SORT_CATALOG_MODAL
} from 'shared/model/modals/constants';
import { RelativeModal } from 'shared/ui/Modal';
import { RelativeModalContainer } from 'shared/ui/Modal/RelativeModal';
import { Spacing } from 'shared/ui/Spacing';
import { catalogPageModel } from 'pages/catalog/model';
import { CatalogSearch } from 'features/catalogSearch/ui';
import { CatalogSort } from 'features/catalogSort/ui';
import { Indicator } from 'shared/ui/Indicator';

export const HeaderMobile = () => {
    const [toggleIsMobileMenuShown, showModal, isCatalogPageOpened] = useUnit([
        mobileMenuModel.toggleIsMobileMenuShown,
        modalsModel.showModal,
        catalogPageModel.currentRoute.$isOpened
    ]);

    const handleMenuItemClick = () => {
        toggleIsMobileMenuShown();
    };

    const handleMenuClick = () => {
        showModal(MENU_MODAL);
    };

    return (
        <Header className={css.header__mobile}>
            {isCatalogPageOpened && <MenuItem onClick={handleMenuItemClick} />}

            <div className={css.right}>
                <CatalogSortButton />
                <CatalogSearchButton />

                <RelativeModalContainer>
                    <Button
                        iconName="menuNavigation"
                        theme="transparent"
                        onClick={handleMenuClick}
                    />

                    <RelativeModal id={MENU_MODAL}>
                        <RelativeModal.Body>
                            <Navbar />
                            <Spacing size={20} />
                            <ThemesContainer />
                        </RelativeModal.Body>
                    </RelativeModal>
                </RelativeModalContainer>
            </div>
        </Header>
    );
};

function CatalogSortButton() {
    const [showModal, isCatalogPageOpened, isSortSelected] = useUnit([
        modalsModel.showModal,
        catalogPageModel.currentRoute.$isOpened,
        catalogPageModel.$isSortSelected
    ]);

    const handleSortClick = () => {
        showModal(SORT_CATALOG_MODAL);
    };

    if (!isCatalogPageOpened) return null;

    return (
        <RelativeModalContainer className={css.mobileCatalogSort__container}>
            <Button
                iconName="sort"
                theme="transparent"
                onClick={handleSortClick}
            />

            <Indicator isShown={isSortSelected} />

            <RelativeModal id={SORT_CATALOG_MODAL}>
                <RelativeModal.Body>
                    <CatalogSort />
                </RelativeModal.Body>
            </RelativeModal>
        </RelativeModalContainer>
    );
}

function CatalogSearchButton() {
    const [showModal, isCatalogPageOpened, search] = useUnit([
        modalsModel.showModal,
        catalogPageModel.currentRoute.$isOpened,
        catalogPageModel.$search
    ]);

    const handleSearchClick = () => {
        showModal(SEARCH_CATALOG_MODAL);
    };

    if (!isCatalogPageOpened) return null;

    return (
        <RelativeModalContainer className={css.mobileCatalogSearch__container}>
            <Button
                iconName="search"
                theme="transparent"
                onClick={handleSearchClick}
            />

            <Indicator isShown={!!search} />

            <RelativeModal id={SEARCH_CATALOG_MODAL}>
                <RelativeModal.Body>
                    <CatalogSearch />
                </RelativeModal.Body>
            </RelativeModal>
        </RelativeModalContainer>
    );
}
