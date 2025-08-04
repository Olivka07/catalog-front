import { RoutesView } from './routes';

import { withProviders } from './providers';
import { useUnit } from 'effector-react';

import 'shared/styles/index.scss';
import { cn } from 'shared/helpers/cn';
import { themeModel } from 'features/theme';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { ModalWrapper } from 'shared/ui/Modal/ModalWrapper';
import { ModalPage } from 'shared/ui/Modal/ModalPage';
import { MENU_MODAL, VEDRO_MODAL } from 'shared/model/modals/constants';
import { MenuModal } from 'modals/menu';
import { VedroModal } from 'modals/vedro';

const App = () => {
    const theme = useUnit(themeModel.$theme);
    const { isDesktop, isMobile, isLargeScreen, isTablet } = useViewportInfo();

    return (
        <div
            className={cn(
                theme,
                {
                    desktop: isDesktop,
                    largeScreen: isLargeScreen,
                    tablet: isTablet,
                    mobile: isMobile
                },
                'app'
            )}
        >
            <RoutesView />
            <ModalWrapper>
                <ModalPage id={MENU_MODAL} key={MENU_MODAL}>
                    <MenuModal id={MENU_MODAL} />
                </ModalPage>
                <ModalPage id={VEDRO_MODAL} key={VEDRO_MODAL}>
                    <VedroModal id={VEDRO_MODAL} />
                </ModalPage>
            </ModalWrapper>
        </div>
    );
};

function AppWrapper() {
    return <App />;
}

export default withProviders(AppWrapper);
