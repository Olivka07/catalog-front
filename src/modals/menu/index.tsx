import React from 'react';
import { ModalId } from 'shared/model/modals';
import { Button } from 'shared/ui';
import { Modal, RelativeModal } from 'shared/ui/Modal';

type MenuModalProps = {
    id?: ModalId;
};

export const MenuModal = (props: MenuModalProps) => {
    const { id } = props;

    return (
        <RelativeModal id={id}>
            <RelativeModal.Header>Header</RelativeModal.Header>
            <RelativeModal.Body>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
                <div>Body</div>
            </RelativeModal.Body>
            <RelativeModal.FooterButtons>
                <Button>Кккуу</Button>
            </RelativeModal.FooterButtons>
        </RelativeModal>
    );
};
