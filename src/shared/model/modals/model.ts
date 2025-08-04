import { createEvent, createStore, sample } from 'effector';
import { ModalId } from './types';
import { MENU_MODAL, VEDRO_MODAL } from './constants';

const showModal = createEvent<ModalId>();
const hideModal = createEvent<ModalId>();

const $shownModals = createStore<ModalId[]>([]);
const $isShown = $shownModals.map((modals) => modals.length > 0);

sample({
    clock: showModal,
    source: $shownModals,
    filter: (shownModals, modal) => !shownModals.includes(modal),
    fn: (shownModals, modal) => shownModals.concat(modal),
    target: $shownModals
});

sample({
    clock: hideModal,
    source: $shownModals,
    filter: (shownModals, modal) => shownModals.includes(modal),
    fn: (shownModals, modal) =>
        shownModals.filter((shownModalId) => shownModalId !== modal),
    target: $shownModals
});

export const modalsModel = {
    $shownModals,
    $isShown,

    showModal,
    hideModal
};
