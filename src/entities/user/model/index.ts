import { invoke } from '@withease/factories';
import { createEffect, createEvent, restore, sample } from 'effector';
import { v4 as uuidv4 } from 'uuid';
import { createLocalStorageModelFactory } from 'shared/effector/factories/localStorage';
import { UNAUTH_ID_KEY } from '../lib/constants';
import { appModel } from 'shared/model';
import { condition } from 'patronum';

const userLocalStorageModel = invoke(createLocalStorageModelFactory, {
    key: UNAUTH_ID_KEY
});

const setUnauthId = createEvent<string>();
const $unauthId = restore(setUnauthId, null);

const createUnauthIdFx = createEffect(() => {
    return uuidv4();
});

sample({
    clock: appModel.initApp,
    target: userLocalStorageModel.getItem
});

condition({
    source: userLocalStorageModel.itemGotSuccessed,
    if: Boolean,
    then: setUnauthId,
    else: createUnauthIdFx
});

sample({
    clock: createUnauthIdFx.doneData,
    target: [userLocalStorageModel.setItem, setUnauthId]
});

export const userModel = {
    $unauthId
};
