import { useContext } from 'react';
import { DeviceInfoContext } from 'shared/contexts';

export const useDeviceInfo = () => useContext(DeviceInfoContext);
