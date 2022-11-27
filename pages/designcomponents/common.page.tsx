import Loadable from '@react-loadable/revised';
import { LayoutType1 } from '@/components/layouts';
import ClientOnly from '@/components/commons/ClientOnly';
import { Loading, ContainerLoading } from '@/components/commons/Loadings';

const LoadableCommonComponents = Loadable({
    loader: () => import('@/components/guide/DesignComponents/components/CommonComponents'),
    loading: ContainerLoading,
});

export default function DesignCommonComponentsPage() {
    return (
        <LayoutType1>
            <LoadableCommonComponents />
        </LayoutType1>
    );
}
