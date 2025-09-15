import { Catalog } from 'widgets/catalog';
import { FiltersSidebar } from 'widgets/sidebar/ui/FiltersSidebar';
import { PageWrapper } from 'widgets/layouts/ui/Page/Page';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';
import { useEffect } from 'react';
import { useUnit } from 'effector-react';
import { catalogPageModel } from 'pages/catalog/model';

const CatalogPage = () => {
    const { isDesktop } = useViewportInfo();
    const triggerIsPageMounted = useUnit(
        catalogPageModel.isPageMountedTriggered
    );

    useEffect(() => {
        triggerIsPageMounted();
    }, []);

    return (
        <PageWrapper withSidebar padding={null}>
            {isDesktop && <FiltersSidebar />}
            <Catalog />
        </PageWrapper>
    );
};

export default CatalogPage;
