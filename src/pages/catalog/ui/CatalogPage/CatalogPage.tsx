import { Catalog } from 'widgets/catalog';
import { FiltersSidebar } from 'widgets/sidebar/ui/FiltersSidebar';
import { Page } from 'widgets/layouts/ui/Page/Page';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';

const CatalogPage = () => {
    const { isDesktop } = useViewportInfo();
    return (
        <Page withSidebar>
            {isDesktop && <FiltersSidebar />}
            <Catalog />
        </Page>
    );
};

export default CatalogPage;
