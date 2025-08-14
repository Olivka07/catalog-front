import { ReactElement, ReactNode } from 'react';
import { ModalId } from 'shared/model/modals';
import { ModalsPosition } from 'shared/model/modals/constants';
import { NoopFn } from 'shared/types';

export type ModalProps = {
    id: ModalId;
    children: ReactElement | ReactElement[];
};

type ModalHeaderProps = {
    children: ReactNode;
    className?: string;
    handleModalClose?: NoopFn;
};

type ModalFooterButtonsProps = {
    children: ReactNode;
    className?: string;
};

type ModalBodyProps = {
    children: ReactNode;
    className?: string;
};

export interface IModal {
    (props: ModalProps): JSX.Element;
    Header: (props: ModalHeaderProps) => JSX.Element;
    Body: (props: ModalBodyProps) => JSX.Element;
    FooterButtons: (props: ModalFooterButtonsProps) => JSX.Element;
}
