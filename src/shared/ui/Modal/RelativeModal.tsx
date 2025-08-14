import React, {
    ReactNode,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import { IModal } from './types';
import { useUnit } from 'effector-react';
import { modalsModel } from 'shared/model/modals';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';

import './Modal.scss';
import { cn } from 'shared/helpers';
import { Icon } from '../Icon';
import { useRelativeModal } from 'shared/hooks';

type RelativeModalContainerProps = {
    children: ReactNode;
    className?: string;
};
export const RelativeModalContainer = (props: RelativeModalContainerProps) => {
    const { children, className } = props;
    return (
        <div className={cn(className, 'relativeModalContainer')}>
            {children}
        </div>
    );
};

export const RelativeModal: IModal = (props) => {
    const { id, children } = props;

    const [shownModals, hideModal] = useUnit([
        modalsModel.$shownModals,
        modalsModel.hideModal
    ]);

    const { isDesktop } = useViewportInfo();

    const zIdx = useMemo(() => {
        const idx = shownModals.findIndex((modal) => modal === id);
        return idx;
    }, [shownModals, id]);

    const isShown = zIdx >= 0;

    const { relativeModalRef, translateDiff } = useRelativeModal({ isShown });

    const handleModalClose = () => {
        hideModal(id);
    };

    const handleModalClick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    if (!isShown) return null;

    if (!isDesktop) {
        return (
            <div
                style={{
                    opacity: translateDiff[0] !== null ? 1 : 0,
                    translate: `${translateDiff[0]}px ${translateDiff[1]}px`
                }}
                ref={relativeModalRef}
                onClick={handleModalClick}
                className={cn('modal', 'relativeModal', `modalZIndex_${zIdx}`)}
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
            style={{ translate: `${translateDiff[0]}px ${translateDiff[1]}px` }}
            ref={relativeModalRef}
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

RelativeModal.Header = (props) => {
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

RelativeModal.Body = (props) => {
    const { children, className } = props;
    return <div className={cn('modalBody', className)}>{children}</div>;
};

RelativeModal.FooterButtons = (props) => {
    const { children, className } = props;
    return (
        <>
            <div className={cn('modalFooter', className)}>{children}</div>
        </>
    );
};
