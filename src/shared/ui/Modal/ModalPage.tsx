import { useUnit } from 'effector-react';
import React, {
    ReactElement,
    ReactNode,
    cloneElement,
    createElement,
    useMemo
} from 'react';
import { ModalId, modalsModel } from 'shared/model/modals';
import { Modal } from './Modal';
import { ModalProps } from './types';

type ModalPageProps = ModalProps;

export const ModalPage = (props: ModalPageProps) => {
    const { id, children } = props;

    return cloneElement<ModalProps>(children as ReactElement, { id });
};
