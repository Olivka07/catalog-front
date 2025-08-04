import { useContext } from 'react';
import { AdaptivityContext } from 'shared/contexts/AdaptivityContext';

export const useViewportInfo = () => useContext(AdaptivityContext);
