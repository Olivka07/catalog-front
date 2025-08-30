import { createFactory } from '@withease/factories';
import { attach, createEvent, createStore, sample } from 'effector';
import { tracerSdk } from 'shared/lib/performance';

type FactoryParams = {
    sampleName: string;
};

type SendEventTriggeredPayload = {
    unauthId: string;
    platform: string;
    isMobile: boolean;
};

export const pagePerformanceSendModelFactory = createFactory(
    (params: FactoryParams) => {
        const { sampleName } = params;

        const setStartTime = createEvent();
        const $startTime = createStore<number>(null).on(setStartTime, () =>
            new Date().getTime()
        );

        const sendEventTriggered = createEvent<SendEventTriggeredPayload>();

        const sendEventToAppTracerFx = attach({
            source: $startTime,
            effect: (
                startTime,
                { unauthId, isMobile, platform }: SendEventTriggeredPayload
            ) => {
                const endTime = new Date().getTime() - startTime;
                const pseudoSample = new Error(sampleName);

                tracerSdk?.error(pseudoSample, {
                    keys: {
                        unauthId: unauthId,
                        platform: platform,
                        isMobile: isMobile,
                        sampleName: sampleName,
                        time: endTime
                    }
                });
            }
        });

        sample({
            clock: sendEventTriggered,
            target: sendEventToAppTracerFx
        });

        return {
            setStartTime,
            sendEventTriggered
        };
    }
);
