import { ReactNode } from 'react';
import { DeviceInfoProvider } from 'shared/contexts';

export const withDeviceInfo = (component: () => ReactNode) =>
    function WithDeviceInfoProvider() {
        return <DeviceInfoProvider>{component()}</DeviceInfoProvider>;
    };
