import { useUnit } from 'effector-react';
import { MenuItem } from '../MenuItem';
import { Navbar } from '../Navbar';
import { ThemesContainer } from '../ThemesContainer';
import { Header } from './Header';
import css from './Header.module.scss';
import { mobileMenuModel } from 'features/sidebar';
import { Button, InputField } from 'shared/ui';
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

    const handleSearchClick = () => {
        showModal(SEARCH_CATALOG_MODAL);
    };

    const handleSortClick = () => {
        showModal(SORT_CATALOG_MODAL);
    };

    return (
        <Header className={css.header__mobile}>
            {isCatalogPageOpened && <MenuItem onClick={handleMenuItemClick} />}

            <div className={css.right}>
                {isCatalogPageOpened && (
                    <RelativeModalContainer>
                        <Button
                            iconName="sort"
                            theme="transparent"
                            onClick={handleSortClick}
                        />

                        <RelativeModal id={SORT_CATALOG_MODAL}>
                            <RelativeModal.Body>
                                <CatalogSort />
                            </RelativeModal.Body>
                        </RelativeModal>
                    </RelativeModalContainer>
                )}

                {isCatalogPageOpened && (
                    <RelativeModalContainer>
                        <Button
                            iconName="search"
                            theme="transparent"
                            onClick={handleSearchClick}
                        />

                        <RelativeModal id={SEARCH_CATALOG_MODAL}>
                            <RelativeModal.Body>
                                <CatalogSearch />
                            </RelativeModal.Body>
                        </RelativeModal>
                    </RelativeModalContainer>
                )}

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
