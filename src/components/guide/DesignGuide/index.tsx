import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import PaletteIcon from '@mui/icons-material/Palette';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import JsonViewer from '@/components/commons/JsonViewer';
import { myTheme } from '@/styles/theme';
import PaletteViewer from './components/PaletteViewer';

type DesignGuideProps = {
    name: string;
};

const DesignGuide = (props: DesignGuideProps) => {
    const { palette } = myTheme;
    useEffect(() => {}, []);
    return (
        <Box>
            <Box display="flex" alignItems="center">
                <PaletteIcon sx={{ marginRight: 1 }} fontSize={'large'} />
                <Typography variant="h4" sx={{ fontWeight: 600, verticalAlign: 'middle' }}>
                    Design Guide
                </Typography>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Default Theme json
            </Typography>
            <Paper sx={{ overflow: 'hidden', padding: 2, marginBottom: 2 }}>
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    palette.json
                </Typography>
                <JsonViewer data={palette} collapsed={1} />
            </Paper>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Palette Color View
            </Typography>
            <PaletteViewer palette={palette} />
        </Box>
    );
};

export const StyledButton = styled(Button)(
    (props) => `    
        color: ${props.theme.palette.primary[50]}
    `,
);

export default DesignGuide;
