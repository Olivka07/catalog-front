import { useContext } from 'react';
import { AdaptivityContext } from 'shared/contexts';

export const useViewportInfo = () => useContext(AdaptivityContext);
