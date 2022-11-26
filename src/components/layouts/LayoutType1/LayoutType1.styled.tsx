import { styled } from '@mui/material/styles';

import MuiBox from '@mui/material/Box';

export const Box = styled(MuiBox)`
    display: flex;
`;

export const Main = styled(MuiBox)`
    min-height: 100vh;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .main {
        flex-grow: 1;
        padding: 30px;
    }
    > :not(footer, .MuiToolbar-root) {
        flex-grow: 1;
        padding: 30px;
    }
`;
