import { ToggleTheme } from 'features/ui/ToggleTheme';
import css from './ThemesContainer.module.scss';
import React from 'react';

export const ThemesContainer = () => {
    return (
        <div className={css.themeContainer}>
            <ToggleTheme theme='light' key='light' />
            <ToggleTheme theme='dark' key='dark' />
        </div>
    );
};
