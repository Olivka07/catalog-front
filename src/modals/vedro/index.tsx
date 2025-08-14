import React from 'react';
import { ModalId } from 'shared/model/modals';
import { Modal } from 'shared/ui/Modal';

type VedroModalProps = {
    id?: ModalId;
};

export const VedroModal = (props: VedroModalProps) => {
    const { id } = props;

    return (
        <Modal id={id}>
            <div>VEDRO MODAL</div>
        </Modal>
    );
};
