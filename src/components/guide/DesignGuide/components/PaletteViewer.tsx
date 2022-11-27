import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';

// const Item = styled(Paper)(
//     (props) => `
//     background-color: '#1A2027';
//     text-align: 'center';
//     color: ${props.theme.palette.text.secondary}
// `,
// );

type PaletteViewerProps = {
    palette: any;
};

type ColorPaperProps = {
    label: string;
    value: any;
};

type ColorGroupPaperProps = {
    label: string;
    value: any;
};

const ColorPaper = (props: ColorPaperProps) => {
    const { label: colorName, value: colorValue } = props;
    return (
        <Grid item sx={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Paper
                sx={{
                    height: 70,
                    width: 50,
                    background: colorValue || '',
                }}
            />
            <Stack>
                <Typography variant="subtitle2">{colorName || '-'}</Typography>
                <Typography variant="subtitle2" sx={{ fontSize: '12px' }} color={grey['500']}>
                    {colorValue || '-'}
                </Typography>
            </Stack>
        </Grid>
    );
};

const ColorGroupPaper = (props: ColorGroupPaperProps) => {
    const { label, value } = props;
    return (
        <Grid container item>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6">{label || '-'}</Typography>
                <Grid container item spacing={2} sx={{ paddingTop: 1 }}>
                    {typeof value !== 'string' ? (
                        Object.entries(value).map((item, index) => {
                            const [key, value] = item;
                            return <ColorPaper label={key} value={value || '-'} key={index} />;
                        })
                    ) : (
                        <ColorPaper label={label} value={value || '-'} />
                    )}
                </Grid>
            </Paper>
        </Grid>
    );
};

const PaletteViewer = (props: PaletteViewerProps) => {
    const { palette } = props;
    return (
        <Box>
            <Grid container direction={'column'} spacing={2}>
                {Object.entries(palette).map((item, index) => {
                    const [key, value] = item;
                    return <ColorGroupPaper key={index} label={key} value={value} />;
                })}
            </Grid>
        </Box>
    );
};

export default PaletteViewer;
