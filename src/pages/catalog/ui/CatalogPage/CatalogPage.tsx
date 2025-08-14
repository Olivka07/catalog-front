import { Catalog } from 'widgets/catalog';
import { FiltersSidebar } from 'widgets/sidebar/ui/FiltersSidebar';
import { PageWrapper } from 'widgets/layouts/ui/Page/Page';
import { useViewportInfo } from 'shared/hooks/useViewportInfo';

const CatalogPage = () => {
    const { isDesktop } = useViewportInfo();
    return (
        <PageWrapper withSidebar>
            {isDesktop && <FiltersSidebar />}
            <Catalog />
        </PageWrapper>
    );
};

export default CatalogPage;
