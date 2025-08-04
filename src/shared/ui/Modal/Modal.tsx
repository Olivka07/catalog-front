import React, { useMemo } from 'react';
import { IModal } from './types';
import { useUnit } from 'effector-react';
import { modalsModel } from 'shared/model/modals';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';

import './Modal.scss';
import { cn } from 'shared/helpers';

export const Modal: IModal = (props) => {
    const { id, position, children } = props;
    const [shownModals, hideModal] = useUnit([
        modalsModel.$shownModals,
        modalsModel.hideModal
    ]);

    const { isMobile } = useViewportInfo();

    const handleCloseModalButtonClick = () => {
        hideModal(id);
    };

    const zIdx = useMemo(() => {
        const idx = shownModals.findIndex((modal) => modal === id);
        return idx;
    }, [shownModals, id]);

    console.log(id, zIdx, 'LOL');

    if (isMobile) {
        return (
            <div className={cn('modalMobile', `modalZIndex_${zIdx}`)}>
                {children}
            </div>
        );
    }
};

Modal.Header = () => {
    return <></>;
};

Modal.Body = () => {
    return <></>;
};

Modal.FooterButtons = () => {
    return <></>;
};
