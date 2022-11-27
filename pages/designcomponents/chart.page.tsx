import Loadable from '@react-loadable/revised';
import { LayoutType1 } from '@/components/layouts';
import ClientOnly from '@/components/commons/ClientOnly';
import { Loading, ContainerLoading } from '@/components/commons/Loadings';

const LoadableChartsComponents = Loadable({
    loader: () => import('@/components/guide/DesignComponents/components/ChartComponents'),
    loading: ContainerLoading,
});

export default function DesignChartsComponentsPage() {
    return (
        <LayoutType1>
            <LoadableChartsComponents />
        </LayoutType1>
    );
}
