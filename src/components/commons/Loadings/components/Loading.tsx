import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from './Loading.styled';

type LoadingProps = {
    backgroundBG?: boolean;
};

const Loading = (props: LoadingProps) => {
    const { backgroundBG = false } = props;
    return (
        <Box className={`${backgroundBG ? 'bg-on' : ''}`}>
            <CircularProgress />
        </Box>
    );
};

export default Loading;
