import * as React from 'react';
import { ComponentType, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Drawer as MuiDrawer, DrawerProps } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItem as MuiListItem, ListItemProps } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

type MenuType = {
    text: string;
    iconComponent: React.ReactNode;
    link: string;
};

type SideMenuPart = {
    [index: number]: MenuType;
} & MenuType;

type SideMenuListType = {
    subMenuList: SideMenuPart[];
};

type SideMenuType = SideMenuPart & SideMenuListType;

type SideNavType1Props = {
    sideMenuList: SideMenuType[];
    onDrawerOpen: () => void;
    onDrawerClose: () => void;
    open: boolean;
    drawerWidth: number;
};

export const ListItem = styled(MuiListItem)(
    (props) => `
        a {
            display:flex;
            text-decoration: none;
            color: ${props.theme.palette.grey.A100};
            &:active {
                color: #000;
                border-bottom-color: #000;
            }
        }
    `,
) as ComponentType<ListItemProps & any>;

const openedMixin = (theme: any, drawerWidth: number) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: any, drawerWidth: number) => {
    return {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
    };
};

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    borderBottom: '1px solid #cdcdd9',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

// const DrawerHeader = styled('div')(
//     (props) => `
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     padding: ${props.theme.spacing(0, 1)};
//     border-bottom: 1px solid #cdcdd9;
// `,
// );

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open, drawerwidth }: any) => ({
        width: drawerwidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme, drawerwidth),
            '& .MuiDrawer-paper': openedMixin(theme, drawerwidth),
        }),
        ...(!open && {
            ...closedMixin(theme, drawerwidth),
            '& .MuiDrawer-paper': closedMixin(theme, drawerwidth),
        }),
    }),
) as ComponentType<DrawerProps & any>;

const SideNavType1 = (props: SideNavType1Props) => {
    const { sideMenuList, onDrawerClose, open, drawerWidth } = props;
    const [openSecondLevel, setOpenSecondLevel] = useState(-1);
    const router = useRouter();
    const theme = useTheme();

    const handleClickMenu = (index: number, link: string) => {
        if (index !== -1) {
            setOpenSecondLevel(openSecondLevel === index ? -1 : index);
        }
        if (link !== '') {
            router.push(link);
        }
    };

    const findSideMenuIndex = (menu: SideMenuType[], pathname: string) => {
        let findIndex = -1;
        menu.forEach((item: any, index) => {
            let findFromChildren = -1;
            if (item.subMenuList.length > 0) {
                findFromChildren = findSideMenuIndex(item.subMenuList, pathname);
            }
            findIndex = findIndex !== -1 ? findIndex : item.link === pathname ? index : findFromChildren;
        });
        return findIndex;
    };

    useEffect(() => {
        const { pathname } = router;
        const findIndex = findSideMenuIndex(sideMenuList, pathname);
        setOpenSecondLevel(findIndex);
    }, [router]);

    return (
        <Drawer variant="permanent" open={open} drawerwidth={drawerWidth}>
            <DrawerHeader>
                <IconButton onClick={onDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            </DrawerHeader>
            <List>
                {sideMenuList.map((item, index) => {
                    const { text, iconComponent, link, subMenuList } = item;
                    const customLink = subMenuList.length > 0 ? '' : link;
                    return (
                        <React.Fragment key={index}>
                            <ListItem button key={index} onClick={() => handleClickMenu(index, customLink)}>
                                <ListItemIcon>{iconComponent}</ListItemIcon>
                                <ListItemText primary={text} />
                                {subMenuList.length > 0 ? (
                                    <ListItemIcon sx={{ minWidth: '24px' }}>
                                        {openSecondLevel === index ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemIcon>
                                ) : (
                                    ''
                                )}
                            </ListItem>
                            {subMenuList.length > 0 && (
                                <Collapse in={openSecondLevel === index} timeout="auto" unmountOnExit>
                                    <List>
                                        {subMenuList.map((item, index) => {
                                            const { text, iconComponent, link } = item;
                                            return (
                                                <ListItem
                                                    button
                                                    key={index}
                                                    onClick={() => {
                                                        handleClickMenu(-1, link);
                                                    }}
                                                >
                                                    <ListItemIcon>{iconComponent}</ListItemIcon>
                                                    <ListItemText secondary={text} sx={{ fontSize: 1 }} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    );
                })}
            </List>
        </Drawer>
    );
};

export default SideNavType1;
