import React, { useMemo } from 'react';
import { IModal } from './types';
import { useUnit } from 'effector-react';
import { modalsModel } from 'shared/model/modals';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';

import './Modal.scss';
import { cn } from 'shared/helpers';
import { Separator } from '../Separator';
import { Icon } from '../Icon';
import { ModalsPosition } from 'shared/model/modals/constants';

export const Modal: IModal = (props) => {
    const { id, children } = props;
    const [shownModals, hideModal] = useUnit([
        modalsModel.$shownModals,
        modalsModel.hideModal
    ]);

    const { isMobile } = useViewportInfo();

    const handleModalClose = () => {
        hideModal(id);
    };

    const zIdx = useMemo(() => {
        const idx = shownModals.findIndex((modal) => modal === id);
        return idx;
    }, [shownModals, id]);

    const handleModalClick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    if (isMobile) {
        return (
            <div
                onClick={handleModalClick}
                className={cn('modal', 'modalMobile', `modalZIndex_${zIdx}`)}
            >
                {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                        handleModalClose
                    })
                )}
            </div>
        );
    }

    return (
        <div
            onClick={handleModalClick}
            className={cn('modal', 'modalDesktop', `modalZIndex_${zIdx}`)}
        >
            {React.Children.map(children, (child) =>
                React.cloneElement(child, {
                    handleModalClose
                })
            )}
        </div>
    );
};

Modal.Header = (props) => {
    const { children, className, handleModalClose } = props;
    return (
        <>
            <div
                aria-label="modal-header"
                className={cn('modalHeader', className)}
            >
                {children}
                <Icon
                    onClick={handleModalClose}
                    className="modalHeader__icon"
                    icon="close"
                    size="large"
                    withAppereance
                />
            </div>
        </>
    );
};

Modal.Body = (props) => {
    const { children, className } = props;
    return <div className={cn('modalBody', className)}>{children}</div>;
};

Modal.FooterButtons = (props) => {
    const { children, className } = props;
    return (
        <>
            <div className={cn('modalFooter', className)}>{children}</div>
        </>
    );
};
