import { LayoutType1 } from '@/components/layouts';
import ClientOnly from '@/components/commons/ClientOnly';
import { Box, Stack } from './Test.styled';

type TestProps = {
    name?: string;
};

const Test = (props: TestProps) => {
    return (
        <ClientOnly>
            <LayoutType1>
                <Box>This is Test Page.</Box>
            </LayoutType1>
        </ClientOnly>
    );
};

export default Test;
