import { useUnit } from 'effector-react';
import React, { ReactNode, useMemo } from 'react';
import { ModalId, modalsModel } from 'shared/model/modals';

type ModalPageProps = {
    id: ModalId;
    children: ReactNode;
};

export const ModalPage = (props: ModalPageProps) => {
    const { id, children } = props;
    const shownModals = useUnit(modalsModel.$shownModals);

    const isShown = useMemo(() => {
        return shownModals.includes(id);
    }, [id, shownModals]);

    console.log(isShown, id, 'isShown');

    if (!isShown) return null;

    return children;
};
