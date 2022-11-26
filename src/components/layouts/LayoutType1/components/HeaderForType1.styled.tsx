import { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import MuiDivider from '@mui/material/Divider';
import MuiAppBar from '@mui/material/AppBar';
import { CollapseProps } from '@mui/material';

export const AppBar = styled(MuiAppBar)(
    ({ theme }) => `
    height: 56px;
    transition: ${theme.transitions.create('top')};
    z-index: ${theme.zIndex.drawer + 1};
    background: ${theme.palette.mode === 'dark' ? theme.palette.background.paper : '#ffffff'};
    color: ${theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : '#000000'};
    border-bottom: 1px solid #cdcdd9;
    box-shadow: none;
    .MuiToolbar-root {
        padding-right: 0;
        padding-left: 0;
    }
`,
) as ComponentType<CollapseProps & any>;

export const Box = styled('div')`
    display: flex;
    align-items: center;
    height: 100%;
    &:empty {
        flex-grow: 1;
    }
`;

export const Divider = styled(MuiDivider)``;
