import React, { useState } from 'react';
import { useEvent } from 'shared/hooks/useEvent/useEvent';
import { Button, InputField } from 'shared/ui';
import { Typography } from 'shared/ui/Typography/Typography';

const MainPage = () => {
    return (
        <div>
            Main
            <div>
                <InputField label="Имя" />
                <Button theme="warn">Отправить</Button>
                <Typography.h1 as={'a'} weightFont={200}>
                    asdasd
                </Typography.h1>
                <Typography.h2 as="div">asdasd</Typography.h2>
            </div>
        </div>
    );
};

export default MainPage;
