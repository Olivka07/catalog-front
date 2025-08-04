import React from 'react';
import { ModalId } from 'shared/model/modals';
import { Modal } from 'shared/ui/Modal';

type MenuModalProps = {
    id: ModalId;
};

export const MenuModal = (props: MenuModalProps) => {
    const { id } = props;

    return <Modal id={id}>MODAL MENU</Modal>;
};
