import { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import {
    Box as MuiBox,
    CollapseProps,
    IconButton as MuiIconButton,
    AppBar as MuiAppBar,
    Divider as MuiDivider,
    Stack as MuiStack,
} from '@mui/material';

export const AppBar = styled(MuiAppBar)(
    ({ theme }) => `
    height: 56px;
    transition: ${theme.transitions.create('top')};
    z-index: ${theme.zIndex.drawer + 1};
    background: ${theme.palette.mode === 'dark' ? '#36394D' : '#ffffff'};
    color: ${theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : '#000000'};
    border-bottom: 1px solid #cdcdd9;
    box-shadow: none;
    .MuiToolbar-root {
        padding-right: 0;
        padding-left: 0;
    }
    
`,
) as ComponentType<CollapseProps & any>;

export const Box = styled(MuiBox)(
    ({ theme }) => `
    display: flex;
    align-items: center;
    height: 100%;
    &:empty {
        flex-grow: 1;
    }
    &.closed-appbar{
        height: calc(100% - 2px);
        background: ${theme.palette.mode === 'dark' ? '#121212' : 'white'}
    }
`,
);

export const IconButton = styled(MuiIconButton)`
    margin: 0 8px;
`;

export const Stack = styled(MuiStack)`
    margin-left: auto;
`;

export const Divider = styled(MuiDivider)``;
