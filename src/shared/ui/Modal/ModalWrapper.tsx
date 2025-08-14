import { useUnit } from 'effector-react';
import React, { ReactElement, ReactNode } from 'react';
import { ModalId, modalsModel } from 'shared/model/modals';

import './ModalWrapper.scss';

type ModalWrapperProps = {
    children: ReactElement<{ id: ModalId }>;
};

export const ModalWrapper = (props: ModalWrapperProps) => {
    const { children } = props;
    const [isShown, shownModals, hideLastOpenedModalTrigger] = useUnit([
        modalsModel.$isShown,
        modalsModel.$shownModals,
        modalsModel.hideLastOpenedModalTriggered
    ]);

    if (!isShown) return null;

    const handleModalWrapperClick = () => {
        hideLastOpenedModalTrigger();
    };

    return (
        <section className="modalWrapper" onClick={handleModalWrapperClick}>
            {React.Children.map(children, (child) =>
                shownModals.includes(child.props.id) ? child : null
            )}
        </section>
    );
};
