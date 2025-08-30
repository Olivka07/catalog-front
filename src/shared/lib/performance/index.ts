import {
    initTracerLog,
    initTracerSdk,
    initTracerPerformanceUploader,
    initTracerPerformance,
    initTracerErrorUploader,
    initTracerError
} from '@apptracer/sdk';
import { BUILD_VERSION_CODE, BUILD_VERSION_NAME } from '../app/constants';

export const tracerSdk = !__IS_DEV__
    ? initTracerSdk(
          {
              versionName: BUILD_VERSION_NAME,
              versionCode: BUILD_VERSION_CODE,
              appToken: __APP_TRACER_TOKEN__,
              environment: 'prod'
          },
          initTracerLog,
          initTracerError,
          initTracerErrorUploader,
          initTracerPerformanceUploader,
          initTracerPerformance
      )
    : null;
