import { useUnit } from 'effector-react';
import { MenuItem } from '../MenuItem';
import { Navbar } from '../Navbar';
import { ThemesContainer } from '../ThemesContainer';
import { Header } from './Header';
import css from './Header.module.scss';
import { mobileMenuModel } from 'features/sidebar';

export const HeaderMobile = () => {
    const toggleIsMobileMenuShown = useUnit(
        mobileMenuModel.toggleIsMobileMenuShown
    );

    const handleMenuItemClick = () => {
        console.log('sdf');
        toggleIsMobileMenuShown();
    };

    return (
        <Header className={css.header__mobile}>
            <MenuItem onClick={handleMenuItemClick} />
            <ThemesContainer className={css.rightThemeToggle} />
        </Header>
    );
};
