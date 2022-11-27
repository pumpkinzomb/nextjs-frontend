import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

const ButtonGuide = () => {
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
        setAlignment(newAlignment);
    };
    return (
        <React.Fragment>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Button
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6">· Basic Button</Typography>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <Typography variant="h6" sx={{ marginTop: 4 }}>
                    · Disabled Button
                </Typography>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="text" disabled>
                        Text
                    </Button>
                    <Button variant="contained" disabled>
                        Contained
                    </Button>
                    <Button variant="outlined" disabled>
                        Outlined
                    </Button>
                </Stack>
                <Typography variant="h6" sx={{ marginTop: 4 }}>
                    · Theme Color Button
                </Typography>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="text" color={'primary'}>
                        Primary
                    </Button>
                    <Button variant="text" color={'secondary'}>
                        Secondary
                    </Button>
                    <Button variant="text" color={'success'}>
                        Success
                    </Button>
                    <Button variant="text" color={'warning'}>
                        Warning
                    </Button>
                    <Button variant="text" color={'error'}>
                        Error
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="contained" color={'primary'}>
                        Primary
                    </Button>
                    <Button variant="contained" color={'secondary'}>
                        Secondary
                    </Button>
                    <Button variant="contained" color={'success'}>
                        Success
                    </Button>
                    <Button variant="contained" color={'warning'}>
                        Warning
                    </Button>
                    <Button variant="contained" color={'error'}>
                        Error
                    </Button>
                </Stack>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="outlined" color={'primary'}>
                        Primary
                    </Button>
                    <Button variant="outlined" color={'secondary'}>
                        Secondary
                    </Button>
                    <Button variant="outlined" color={'success'}>
                        Success
                    </Button>
                    <Button variant="outlined" color={'warning'}>
                        Warning
                    </Button>
                    <Button variant="outlined" color={'error'}>
                        Error
                    </Button>
                </Stack>
                <Typography variant="h6" sx={{ marginTop: 4 }}>
                    · Toggle Button
                </Typography>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <ToggleButtonGroup
                        value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                    >
                        <ToggleButton value="left" aria-label="left aligned">
                            <FormatAlignLeftIcon />
                        </ToggleButton>
                        <ToggleButton value="center" aria-label="centered">
                            <FormatAlignCenterIcon />
                        </ToggleButton>
                        <ToggleButton value="right" aria-label="right aligned">
                            <FormatAlignRightIcon />
                        </ToggleButton>
                        <ToggleButton value="justify" aria-label="justified" disabled>
                            <FormatAlignJustifyIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Paper>
        </React.Fragment>
    );
};

export default ButtonGuide;
