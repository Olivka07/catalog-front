import { invoke } from '@withease/factories';
import { sample } from 'effector';
import { pagePerformanceSendModelFactory } from 'shared/effector/factories/performance';
import { currentRoute, isPageMountedTriggered } from './model';
import { CATALOG_PAGE } from 'shared/router';
import { userModel } from 'entities/user/public/model';
import { appModel } from 'shared/model';

const sendCatalogPagePerformanceModel = invoke(
    pagePerformanceSendModelFactory,
    { sampleName: CATALOG_PAGE }
);

sample({
    clock: currentRoute.opened,
    target: sendCatalogPagePerformanceModel.setStartTime
});

sample({
    clock: isPageMountedTriggered,
    source: {
        unauthId: userModel.$unauthId,
        platform: appModel.$platform,
        isMobile: appModel.$isMobile
    },
    target: sendCatalogPagePerformanceModel.sendEventTriggered
});
