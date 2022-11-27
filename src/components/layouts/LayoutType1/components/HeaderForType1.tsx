import * as React from 'react';
import Image from 'next/image';
import { useTheme, styled, Toolbar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useColorMode } from '@/components/providers/ProvidersWrapper';
import DSRV from '@/components/svgs/DsrvLogo';
import { AppBar as ImportedAppBar, Box, Divider, IconButton, Stack } from './HeaderForType1.styled';
import Logo from './Logo';

const SERVICE_NAME = process.env.REACT_APP_SERVICE_NAME || 'Mady by zombcatzomb';

type HeaderForType1Props = {
    open: boolean;
    onDrawerOpen: () => void;
    onDrawerClose: () => void;
    drawerWidth: number;
};

const AppBar = styled(ImportedAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }: any) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function HeaderForType1(props: HeaderForType1Props) {
    const theme = useTheme();
    const { toggleColorMode } = useColorMode();
    const { open, onDrawerClose, onDrawerOpen, drawerWidth } = props;
    const handleMenu = () => {
        if (open) {
            onDrawerClose();
        } else {
            onDrawerOpen();
        }
    };

    return (
        <React.Fragment>
            <AppBar open={open} drawerwidth={drawerWidth}>
                <Toolbar>
                    <Box>
                        {!open && (
                            <Box className="closed-appbar">
                                <IconButton onClick={handleMenu} aria-expanded={open ? 'true' : undefined}>
                                    <AppsIcon />
                                </IconButton>
                                <Divider orientation="vertical" flexItem />
                            </Box>
                        )}
                        <Logo
                            LogoComponent={
                                () => (
                                    <DSRV
                                        width={100}
                                        height={56}
                                        fill={theme.palette.mode === 'light' ? '#000' : '#fff'}
                                    />
                                )
                                // theme.palette.mode === 'light' ? (
                                //     <Image
                                //         src="/svgs/master_black.svg"
                                //         alt="dsrv_logo_lightmode"
                                //         width={100}
                                //         height={56}
                                //         draggable={false}
                                //         priority
                                //     />
                                // ) : (
                                //     <Image
                                //         src="/svgs/master_white.svg"
                                //         alt="dsrv_logo_darkmode"
                                //         color={'red'}
                                //         width={100}
                                //         height={56}
                                //         draggable={false}
                                //         priority
                                //     />
                                // )
                            }
                            serviceName={SERVICE_NAME}
                        />
                        <Stack direction="row" alignItems={'center'}>
                            <IconButton
                                sx={{ ml: 1 }}
                                color="inherit"
                                onClick={() => {
                                    toggleColorMode();
                                }}
                            >
                                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
