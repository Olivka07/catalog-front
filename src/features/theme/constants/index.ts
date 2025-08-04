export const THEME_KEY = 'theme';

export enum AppTheme {
    LIGHT = 'light',
    DARK = 'dark'
}

export const ThemeLangName: Record<AppTheme, string> = {
    [AppTheme.DARK]: 'dark_theme_name',
    [AppTheme.LIGHT]: 'light_theme_name'
};
