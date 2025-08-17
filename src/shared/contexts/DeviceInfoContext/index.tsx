import { ReactNode, createContext, useMemo, useRef } from 'react';
import { useRefState } from 'shared/hooks/useRefState';

const defaultState = {
    isTouchDevice: false
};

export const DeviceInfoContext = createContext(defaultState);

type DeviceInfoProviderProps = {
    children: ReactNode;
};
export const DeviceInfoProvider = (props: DeviceInfoProviderProps) => {
    const { children } = props;
    const deviceInfoRef = useRef(defaultState);

    deviceInfoRef.current = {
        ...deviceInfoRef.current,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0
    };

    return (
        <DeviceInfoContext.Provider value={deviceInfoRef.current}>
            {children}
        </DeviceInfoContext.Provider>
    );
};
