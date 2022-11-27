import { LayoutType1 } from '@/components/layouts';
import ClientOnly from '@/components/commons/ClientOnly';
import DesignGuide from '@/components/guide/DesignGuide';

export default function DesignGuidePage() {
    return (
        <LayoutType1>
            <DesignGuide name={'Design Guide'} />
        </LayoutType1>
    );
}
