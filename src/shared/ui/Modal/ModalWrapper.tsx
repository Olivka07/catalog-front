import { useUnit } from 'effector-react';
import { ReactNode } from 'react';
import { modalsModel } from 'shared/model/modals';

import './ModalWrapper.scss';

type ModalWrapperProps = {
    children: ReactNode;
};

export const ModalWrapper = (props: ModalWrapperProps) => {
    const { children } = props;
    const isShown = useUnit(modalsModel.$isShown);

    if (!isShown) return null;

    return <div className="modalWrapper">{children}</div>;
};
