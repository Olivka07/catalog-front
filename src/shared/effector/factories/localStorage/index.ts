import { createEffect, createEvent, sample } from 'effector';
import { createFactory } from '@withease/factories';

export const createLocalStorageModelFactory = createFactory(
    ({ key }: { key: string }) => {
        const setItem = createEvent<string>();

        const setItemFx = createEffect((value: string) => {
            localStorage.setItem(key, value);
        });

        sample({
            clock: setItem,
            target: setItemFx
        });

        const getItem = createEvent();

        const getItemFx = createEffect(() => {
            return localStorage.getItem(key) ?? null;
        });

        sample({
            clock: getItem,
            target: getItemFx
        });

        const itemGotSuccessed = getItemFx.doneData;

        return {
            getItem,
            setItem,

            itemGotSuccessed
        };
    }
);
