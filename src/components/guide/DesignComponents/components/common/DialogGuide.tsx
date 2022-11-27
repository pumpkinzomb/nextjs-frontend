import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

import { useDialog } from '@/components/providers/DialogProvider';

const DialogGuide = () => {
    const [openDialog, closeDialog] = useDialog();
    const handleOpenDialog = () => {
        openDialog({
            children: (
                <React.Fragment>
                    <DialogTitle sx={{ m: 0, p: 2 }}>
                        Modal title
                        <IconButton
                            aria-label="close"
                            onClick={closeDialog}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                            egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus
                            vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                            auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{ m: 1 }}>
                        <Button autoFocus variant={'contained'} onClick={closeDialog}>
                            Close Modal
                        </Button>
                    </DialogActions>
                </React.Fragment>
            ),
        });
    };
    return (
        <React.Fragment>
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Dialog (Modal)
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                <Typography variant="h6">· Basic Dialog</Typography>
                <Stack spacing={2} direction="row" sx={{ marginTop: 2, alignItems: 'center' }}>
                    <Button variant="outlined" onClick={handleOpenDialog}>
                        Open dialog
                    </Button>
                </Stack>
            </Paper>
        </React.Fragment>
    );
};

export default DialogGuide;
