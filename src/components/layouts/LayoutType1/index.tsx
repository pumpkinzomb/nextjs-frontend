import * as React from 'react';
import { useState, useEffect } from 'react';
import PaletteIcon from '@mui/icons-material/Palette';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import StopRoundedIcon from '@mui/icons-material/StopRounded';
import StyleIcon from '@mui/icons-material/Style';
import { Toolbar } from '@mui/material';

import HeaderForType1 from './components/HeaderForType1';
import SideNavForType1 from './components/SideNavForType1';
import { Box, Main } from './LayoutType1.styled';

const drawerWidth = 240;

type LayoutType1Props = {
    children: React.ReactNode;
};

const LayoutType1 = ({ children }: LayoutType1Props) => {
    let navigationOpen = true;
    if (typeof window !== 'undefined') {
        navigationOpen = JSON.parse(localStorage.getItem('navigation_bar') || 'true');
    }

    const [open, setOpen] = useState(navigationOpen);

    useEffect(() => {
        // localStorage.setItem('navigation_bar', JSON.stringify(open));
    }, [open]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sideMenuList = [
        {
            text: 'Design Guide',
            iconComponent: <PaletteIcon />,
            link: '/designguide',
            subMenuList: [],
        },
        {
            text: 'Components',
            iconComponent: <ExtensionRoundedIcon />,
            link: '/designcomponents/common',
            subMenuList: [
                {
                    text: 'Common',
                    iconComponent: <StopRoundedIcon sx={{ fontSize: '14px', marginLeft: '4px' }} />,
                    link: '/designcomponents/common',
                    subMenuList: [],
                },
                {
                    text: 'Chart',
                    iconComponent: <StopRoundedIcon sx={{ fontSize: '14px', marginLeft: '4px' }} />,
                    link: '/designcomponents/chart',
                    subMenuList: [],
                },
            ],
        },
        {
            text: 'Samples',
            iconComponent: <StyleIcon />,
            link: '/samples/mintscan',
            subMenuList: [
                {
                    text: 'MINTSCAN',
                    iconComponent: <StopRoundedIcon sx={{ fontSize: '14px', marginLeft: '4px' }} />,
                    link: '/samples/mintscan',
                    subMenuList: [],
                },
            ],
        },
    ];

    return (
        <Box>
            <HeaderForType1
                onDrawerOpen={handleDrawerOpen}
                onDrawerClose={handleDrawerClose}
                open={open}
                drawerWidth={drawerWidth}
            />
            <SideNavForType1
                sideMenuList={sideMenuList}
                onDrawerOpen={handleDrawerOpen}
                onDrawerClose={handleDrawerClose}
                open={open}
                drawerWidth={drawerWidth}
            />
            <Main>
                <Toolbar />
                <div className="main"> {children}</div>
            </Main>
        </Box>
    );
};

export default LayoutType1;
