import { invoke } from '@withease/factories';
import { sample } from 'effector';
import { pagePerformanceSendModelFactory } from 'shared/effector/factories/performance';
import { currentRoute, isPageMountedTriggered } from './index';
import { ABOUT_PAGE } from 'shared/router';
import { userModel } from 'entities/user/public/model';
import { appModel } from 'shared/model';

const sendAboutPagePerformanceModel = invoke(pagePerformanceSendModelFactory, {
    sampleName: ABOUT_PAGE
});

sample({
    clock: currentRoute.opened,
    target: sendAboutPagePerformanceModel.setStartTime
});

sample({
    clock: isPageMountedTriggered,
    source: {
        unauthId: userModel.$unauthId,
        platform: appModel.$platform,
        isMobile: appModel.$isMobile
    },
    target: sendAboutPagePerformanceModel.sendEventTriggered
});
