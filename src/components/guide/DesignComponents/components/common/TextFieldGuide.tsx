import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const TextFieldGuide = () => {
    return (
        <React.Fragment>
            <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 2, marginBottom: 1 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                TextField (Input)
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    · Basic TextField
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" />
                        <TextField label="Filled" variant="filled" />
                        <TextField label="Standard" variant="standard" />
                    </Stack>
                </Box>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    · Disabled TextField
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" disabled />
                        <TextField label="Filled" variant="filled" disabled />
                        <TextField label="Standard" variant="standard" disabled />
                    </Stack>
                </Box>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    · Required & Error Case
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField
                            label="Outlined"
                            variant="outlined"
                            error
                            required
                            helperText={'Incorrect value.'}
                            defaultValue={'wrong value'}
                        />
                        <TextField
                            label="Filled"
                            variant="filled"
                            error
                            required
                            helperText={'Incorrect value.'}
                            defaultValue={'wrong value'}
                        />
                        <TextField
                            label="Standard"
                            variant="standard"
                            error
                            required
                            helperText={'Incorrect value.'}
                            defaultValue={'wrong value'}
                        />
                    </Stack>
                </Box>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    · Size
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" size={'small'} />
                        <TextField label="Filled" variant="filled" size={'small'} />
                        <TextField label="Standard" variant="standard" size={'small'} />
                    </Stack>
                </Box>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" size={'medium'} />
                        <TextField label="Filled" variant="filled" size={'medium'} />
                        <TextField label="Standard" variant="standard" size={'medium'} />
                    </Stack>
                </Box>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    · Theme Color TextField
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" color={'primary'} />
                        <TextField label="Filled" variant="filled" color={'primary'} />
                        <TextField label="Standard" variant="standard" color={'primary'} />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" color={'secondary'} />
                        <TextField label="Filled" variant="filled" color={'secondary'} />
                        <TextField label="Standard" variant="standard" color={'secondary'} />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" color={'success'} />
                        <TextField label="Filled" variant="filled" color={'success'} />
                        <TextField label="Standard" variant="standard" color={'success'} />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" color={'warning'} />
                        <TextField label="Filled" variant="filled" color={'warning'} />
                        <TextField label="Standard" variant="standard" color={'warning'} />
                    </Stack>
                    <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                        <TextField label="Outlined" variant="outlined" color={'error'} />
                        <TextField label="Filled" variant="filled" color={'error'} />
                        <TextField label="Standard" variant="standard" color={'error'} />
                    </Stack>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default TextFieldGuide;
