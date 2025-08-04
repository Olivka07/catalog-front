import compose from 'compose-function';
import { withRouter } from './withRouter';
import { withAdaptivity } from './withAdaptivity';

export const withProviders = compose(withAdaptivity, withRouter);
