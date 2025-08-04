import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { Button } from 'shared/ui';
import { themeModel } from '../../model';
import { AppTheme } from '../../constants';

interface ToggleThemeProps {
    theme: AppTheme;
}
export const ToggleTheme: FC<ToggleThemeProps> = ({ theme }) => {
    const onThemeChange = useUnit(themeModel.themeChanged);

    const handleThemeChange = () => {
        onThemeChange(theme);
    };

    return (
        <Button theme="primary" onClick={handleThemeChange}>
            {theme.toUpperCase()}
        </Button>
    );
};
