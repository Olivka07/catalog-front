import css from './ThemesContainer.module.scss';
import lightThemeBackground from 'shared/assets/images/theme/light_theme_background.png';
import lightThemeToggle from 'shared/assets/images/theme/light_toggle.png';
import darkThemeBackground from 'shared/assets/images/theme/dark_theme_background.png';
import darkThemeToggle from 'shared/assets/images/theme/dark_toggle.png';
import React, { useEffect, useRef } from 'react';

import { ToggleTheme } from 'features/theme/ui';
import { AppTheme } from 'features/theme/constants';
import { useUnit } from 'effector-react';
import { themeModel } from 'features/theme';
import { cn } from 'shared/helpers';

type ThemesContainerProps = {
    className?: string;
};

export const ThemesContainer = (props: ThemesContainerProps) => {
    const { className } = props;
    const [theme, onThemeChange] = useUnit([
        themeModel.$theme,
        themeModel.themeChanged
    ]);
    const isComponentMountedRef = useRef(false);
    const isLightTheme = theme === AppTheme.LIGHT;

    const handleThemeToggleClick = () => {
        onThemeChange(theme === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK);
    };

    useEffect(() => {
        isComponentMountedRef.current = true;
    }, []);

    return (
        <div
            title="Сменить тему"
            className={cn(css.themeContainer, className)}
            onClick={handleThemeToggleClick}
        >
            <img
                src={lightThemeBackground}
                alt="Фон: светлая тема"
                className={cn(css.background, {
                    [css.lightTheme]: isLightTheme,
                    [css.themeChanged]:
                        !isLightTheme && isComponentMountedRef.current
                })}
            />
            <img
                src={darkThemeBackground}
                alt="Фон: тёмная тема"
                className={cn(css.background, {
                    [css.darkTheme]: !isLightTheme,
                    [css.themeChanged]:
                        isLightTheme && isComponentMountedRef.current
                })}
            />
            <img
                src={lightThemeToggle}
                alt="Тоггл: светлая тема"
                className={cn(css.toggle, {
                    [css.lightTheme]: isLightTheme,
                    [css.themeChanged]:
                        !isLightTheme && isComponentMountedRef.current
                })}
                onClick={handleThemeToggleClick}
            />
            <img
                src={darkThemeToggle}
                alt="Тоггл: тёмная тема"
                className={cn(css.toggle, {
                    [css.darkTheme]: !isLightTheme,
                    [css.themeChanged]:
                        isLightTheme && isComponentMountedRef.current
                })}
                onClick={handleThemeToggleClick}
            />
        </div>
    );
};
