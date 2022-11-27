import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const ProgressGuide = () => {
    const [alignment, setAlignment] = useState('left');
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };
    return (
        <React.Fragment>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Progress
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6">· Circular Progress</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                    <CircularProgress />
                </Box>
                <Typography variant="h6">· Linear Progress</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <Box sx={{ minWidth: 40 }}>
                        <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
                    </Box>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default ProgressGuide;
