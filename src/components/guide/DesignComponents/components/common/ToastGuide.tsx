import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import uniqId from 'uniqid';

import { useActions } from '@/components/providers/ActionsProvider';

const ToastGuide = () => {
    const [message, setMessage] = useState('default message.');
    const { NotificationActions } = useActions();

    const handleOpenToast = (type: string) => {
        const id = uniqId();
        NotificationActions.setNotification({ id, type, contents: message });
    };

    const handleChangeMessage = (event: React.ChangeEvent<any>) => {
        setMessage(event.target.value);
    };

    return (
        <React.Fragment>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Toast
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6">· Basic Dialog</Typography>
                <TextField
                    label="Message"
                    variant="outlined"
                    sx={{ marginTop: 1 }}
                    onChange={handleChangeMessage}
                    defaultValue={message}
                />
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="outlined" onClick={() => handleOpenToast('success')} color={'success'}>
                        Success Toast
                    </Button>
                    <Button variant="outlined" onClick={() => handleOpenToast('warning')} color={'warning'}>
                        Warning Toast
                    </Button>
                    <Button variant="outlined" onClick={() => handleOpenToast('error')} color={'error'}>
                        Error Toast
                    </Button>
                    <Button variant="outlined" onClick={() => handleOpenToast('default')}>
                        Default Toast
                    </Button>
                </Stack>
            </Paper>
        </React.Fragment>
    );
};

export default ToastGuide;
