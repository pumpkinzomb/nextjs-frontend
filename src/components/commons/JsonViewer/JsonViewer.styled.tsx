import { Box as MuiBox, Stack as MuiStack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Stack = styled(MuiStack)(
    ({ theme }) => `
        width: 100%;
        height: 100%;
    `,
);

export const Box = styled(MuiBox)(
    ({ theme }) => `
        .react-json-view {
            word-break: break-all;
            font-size: 14px;
            @media only screen and (max-width: 640px) {
                font-size: 12px;
                //outline:1px solid red;
                padding:0.5rem !important;
            }
            
        }
    `,
);
