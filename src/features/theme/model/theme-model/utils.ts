import { AppTheme } from '../../constants';

export function isAppTheme(theme: unknown): theme is AppTheme {
    return theme === AppTheme.LIGHT || theme === AppTheme.DARK;
}
