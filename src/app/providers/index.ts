import compose from 'compose-function';
import { withRouter } from './withRouter';
import { withAdaptivity } from './withAdaptivity';
import { withDeviceInfo } from './withDeviceInfo';

export const withProviders = compose(
    withDeviceInfo,
    withAdaptivity,
    withRouter
);
