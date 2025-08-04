import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from 'history';
import { initApp } from 'shared/model/app-model';
import { router } from 'shared/router';
import './init';

import App from 'app';

// history setting
const history = createBrowserHistory();
router.setHistory(history);

const root = createRoot(document.getElementById('root'));
initApp();

root.render(<App />);
