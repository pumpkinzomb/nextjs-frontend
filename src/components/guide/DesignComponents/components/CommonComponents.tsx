import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SourceIcon from '@mui/icons-material/Source';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useColorMode } from '@/components/providers/ProvidersWrapper';
import ButtonGuide from './common/ButtonGuide';
import TextFieldGuide from './common/TextFieldGuide';
import SelectGuide from './common/SelectGuide';
import DialogGuide from './common/DialogGuide';
import ToastGuide from './common/ToastGuide';
import ProgressGuide from './common/ProgressGuide';

type CommonComponentsProps = {
    name?: string;
};

const CommonComponents = (props: CommonComponentsProps) => {
    const [target, setTarget] = useState('');
    const buttonRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const textfieldRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const selectRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const dialogRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const toastRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const progressRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const topRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();

    const handleMoveTo = (event: React.MouseEvent<HTMLElement>, newTarget: string) => {
        switch (newTarget) {
            case 'button':
                buttonRef.current.scrollIntoView();
                break;
            case 'textfield':
                textfieldRef.current.scrollIntoView();
                break;
            case 'select':
                selectRef.current.scrollIntoView();
                break;
            case 'dialog':
                dialogRef.current.scrollIntoView();
                break;
            case 'toast':
                toastRef.current.scrollIntoView();
                break;
            case 'progress':
                progressRef.current.scrollIntoView();
                break;
        }
        setTarget(newTarget);
    };
    return (
        <Box ref={topRef}>
            <Box display="flex" alignItems="center">
                <SourceIcon sx={{ marginRight: 1 }} fontSize={'large'} />
                <Typography variant="h4" sx={{ fontWeight: 600, verticalAlign: 'middle' }}>
                    Common Components
                </Typography>
            </Box>
            <Box sx={{ p: 2 }}>
                <ToggleButtonGroup value={target} exclusive onChange={handleMoveTo} aria-label="target guide">
                    <ToggleButton value="button" aria-label="button" color={'primary'}>
                        Button
                    </ToggleButton>
                    <ToggleButton value="textfield" aria-label="textfield" color={'primary'}>
                        Textfield
                    </ToggleButton>
                    <ToggleButton value="select" aria-label="select" color={'primary'}>
                        Select
                    </ToggleButton>
                    <ToggleButton value="dialog" aria-label="dialog" color={'primary'}>
                        Dialog
                    </ToggleButton>
                    <ToggleButton value="toast" aria-label="toast" color={'primary'}>
                        Toast
                    </ToggleButton>
                    <ToggleButton value="progress" aria-label="progress" color={'primary'}>
                        Progress
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Divider sx={{ marginTop: 1, marginBottom: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1, marginTop: 2 }}>
                <LocalOfferIcon fontSize={'small'} sx={{ marginRight: 1.5, fontSize: '16px' }} />
                Color Mode
            </Typography>
            <Paper sx={{ padding: 2, width: '100%' }}>
                {theme.palette.mode} mode
                <IconButton
                    sx={{ ml: 1 }}
                    color="inherit"
                    onClick={() => {
                        toggleColorMode();
                    }}
                >
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Paper>
            {/* Button Components */}
            <div ref={buttonRef}>
                <ButtonGuide />
            </div>
            {/* TextField Components */}
            <div ref={textfieldRef}>
                <TextFieldGuide />
            </div>
            {/* Select Components */}
            <div ref={selectRef}>
                <SelectGuide />
            </div>
            {/* Dialog Components */}
            <div ref={dialogRef}>
                <DialogGuide />
            </div>
            {/* Toast Components */}
            <div ref={toastRef}>
                <ToastGuide />
            </div>
            {/* Progress Components */}
            <div ref={progressRef}>
                <ProgressGuide />
            </div>
            <Fab
                color="primary"
                aria-label="top"
                onClick={() => {
                    topRef.current.scrollIntoView();
                }}
                sx={{
                    position: 'fixed',
                    right: '3rem',
                    bottom: '3rem',
                }}
            >
                <ExpandLessIcon />
            </Fab>
        </Box>
    );
};

export default CommonComponents;
