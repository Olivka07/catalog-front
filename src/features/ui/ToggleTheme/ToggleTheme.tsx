import { useUnit } from 'effector-react';
import React, { FC } from 'react';
import { AppTheme, appModel } from 'shared/model/app-model';
import { Button } from 'shared/ui';

interface ToggleThemeProps {
    theme: AppTheme;
}
export const ToggleTheme: FC<ToggleThemeProps> = ({ theme }) => {
    const onThemeChange = useUnit(appModel.onThemeChange);

    function changeThemeHandler() {
        onThemeChange(theme);
    }

    return (
        <Button theme='primary' onClick={changeThemeHandler}>
            {theme.toUpperCase()}
        </Button>
    );
};
