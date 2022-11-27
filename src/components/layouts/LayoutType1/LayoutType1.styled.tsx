import { styled } from '@mui/material/styles';

import MuiBox from '@mui/material/Box';

export const Box = styled(MuiBox)(
    ({ theme }) => `
    display: flex;
    background: ${theme.palette.mode === 'dark' ? '#36394D' : 'white'};
`,
);

export const Main = styled(MuiBox)(
    ({ theme }) => `
    
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
`,
);
