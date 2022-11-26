import * as React from 'react';
import { useTheme, styled, Toolbar, IconButton } from '@mui/material';
import { AppBar as ImportedAppBar, Box, Divider } from './HeaderForType1.styled';
import Logo from './Logo';
import LogoDSRV_B from '@/styles/svgs/master_black.svg';
import LogoDSRV_W from '@/styles/svgs/master_white.svg';
import AppsIcon from '@mui/icons-material/Apps';

const SERVICE_NAME = process.env.REACT_APP_SERVICE_NAME || 'Sonar';

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
                            <React.Fragment>
                                <IconButton onClick={handleMenu} aria-expanded={open ? 'true' : undefined}>
                                    <AppsIcon />
                                </IconButton>
                                <Divider orientation="vertical" flexItem />
                            </React.Fragment>
                        )}
                        <Logo
                            LogoComponent={() =>
                                theme.palette.mode === 'light' ? (
                                    <LogoDSRV_B width={100} height={56} />
                                ) : (
                                    <LogoDSRV_W width={100} height={56} />
                                )
                            }
                            serviceName={SERVICE_NAME}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
