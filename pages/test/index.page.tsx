import { LayoutType1 } from '@/components/layouts';
import { Box, Stack } from './Test.styled';

type TestProps = {
    name?: string;
};

const Test = (props: TestProps) => {
    console.log(`현재 개발환경은 : ${process.env.NEXT_PUBLIC_REACT_APP_MODE}`);
    return <Box>This is Test Page.</Box>;
};

export default Test;
