import * as React from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Image from 'next/image';

import { DialogHeader, DialogActions, DialogContent, DialogTitle } from './ConfirmDialog.styled';

type ConfirmDialogProps = {
    onClose: () => void;
    onSubmit?: () => void;
    children: React.ReactNode;
    submitButtonText?: {
        text: string;
        color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
        variant?: 'text' | 'outlined' | 'contained';
    };
    closeButtonText?: {
        text: string;
        color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
        variant?: 'text' | 'outlined' | 'contained';
    };
    title: string;
};

const ConfirmDialog = (props: ConfirmDialogProps) => {
    const { t } = useTranslation();
    const {
        onClose,
        onSubmit,
        children,
        title,
        submitButtonText = { text: t(`common::label::Submit`), color: 'error', variant: 'contained' },
        closeButtonText = { text: t(`common::label::Cancel`), color: 'secondary', variant: 'outlined' },
    } = props;
    return (
        <React.Fragment>
            <DialogHeader direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <DialogTitle>{title}</DialogTitle>
                <IconButton onClick={() => onClose()}>
                    <Image src={'/svg/close.svg'} alt={'icon-close'} draggable={false} priority />
                </IconButton>
            </DialogHeader>
            <DialogContent>{children}</DialogContent>
            <DialogActions>
                <Button
                    variant={closeButtonText.variant || 'outlined'}
                    color={closeButtonText.color || 'secondary'}
                    onClick={() => onClose()}
                >
                    {closeButtonText.text}
                </Button>
                {onSubmit && (
                    <Button
                        variant={submitButtonText.variant || 'contained'}
                        color={submitButtonText.color || 'error'}
                        onClick={() => onSubmit()}
                    >
                        {submitButtonText.text}
                    </Button>
                )}
            </DialogActions>
        </React.Fragment>
    );
};

export default ConfirmDialog;
