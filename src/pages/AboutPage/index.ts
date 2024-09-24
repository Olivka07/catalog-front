import { lazy } from 'react';
import { Loadable } from 'shared/ui';

export const AboutPage = Loadable(lazy(() => import('./AboutPage')));
