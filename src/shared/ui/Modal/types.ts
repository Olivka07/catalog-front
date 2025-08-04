import { ReactNode } from 'react';
import { ModalId } from 'shared/model/modals';
import { ModalsPosition } from 'shared/model/modals/constants';

type ModalProps = {
    position?: ModalsPosition;
    id: ModalId;
    children: ReactNode;
};

type ModalHeaderProps = {
    children: ReactNode;
    className?: string;
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
