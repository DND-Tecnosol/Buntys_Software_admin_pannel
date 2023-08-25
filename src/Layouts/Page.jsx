import React, { useEffect, useState } from 'react'
import {
    CostomerModel, Footer, Navbar, Sidebar, AddService,
    AddProduct,
    Appoitment, Addinvoice
} from '../Components'
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { Menu, MenuItem, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Badge, Container, Grid, Paper, Alert } from '@mui/material';
// import  from '@mui/material/Drawer';
// import  from '@mui/material/Box';
// import  from '@mui/material/AppBar';
// import  from '@mui/material/Toolbar';
// import  from '@mui/material/List';
// import  from '@mui/material/Typography';
// import  from '@mui/material/Divider';
// import  from '@mui/material/IconButton';
// import  from '@mui/material/Badge';
// import  from '@mui/material/Container';
// import  from '@mui/material/Grid';
// import  from '@mui/material/Paper';
// import  from '@mui/material/Alert'; 
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';

// import Link from '@mui/material/Link';
import routesconst from '../Constants/routesconst';
import { ToastContainer, toast } from 'react-toastify';
import { fetchAppoitment } from './../Store/Slice/All/appointmentSlice';
import { fetchInvoice } from './../Store/Slice/All/invoiceSlice';
import { fetchStore, fetchCity, fetchStorenotification, fetchStorenotificationcatygury, fetchStoretime, fetchStoreclosingdate } from './../Store/Slice/All/storeSlice';
import { fetchStaff } from "../Store/Slice/All/staffSlice";
import { fetchCostomer } from "../Store/Slice/Costomer/costumerSlice";
import { fetchcostomerCetegury, fetchserviceCetegury, fetchstuffCetegury } from './../Store/Slice/types/allCetegurytypesSlice';
import { fetchServices } from './../Store/Slice/All/serviceSlice';

import { fetchProduct, fetchProductBrand, fetchProductCategury, fetchHairWegtype, fetchHairWeg, fetchHairExtention, fetchHairExtentionType, fetchHairPatch, fetchHairPatchtype } from './../Store/Slice/All/productSlice';
import Echo from "laravel-echo";
import Pusher from 'pusher-js';
import { requestForToken } from '../Constants/firebase';
// import { OneSignal } from '../Constants/oneSignal';
import OneSignal from 'react-onesignal';
import { fetchCampign } from '../Store/Slice/Campign';
import { fetchSmsTemp } from '../Store/Slice/All/smsTemplateSlice';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Logo, LogoRound } from '../assets';
import { Stack, TextField } from '@mui/material';
import { BsFilePlus, BsPlus, BsPlusCircle } from 'react-icons/bs';
import { PowerOff } from '@mui/icons-material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { authLogout } from '../Store/Slice/Auth/authSlice';
import { fetchPoint } from '../Store/Slice/All/pointSlice';
import { AppoitmentModel } from '../Components/Models';
import { changeStateAppointmentModel } from '../Store/Slice/resourceSlice';
import { fetchFeedback } from '../Store/Slice/feedbackSlice';
const echo = new Echo({
    key: "621acca9abe83bd9e178",
    // broadcaster: 'pusher',
    broadcaster: 'pusher',
    cluster: 'ap2',
    // wsHost: window.location.hostname,
    // wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});

const defaultTheme = createTheme();

function Notification() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
            >
                <Badge badgeContent={4} color='error'>
                    <NotificationsIcon color='info' />
                </Badge>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} sx={{ display: 'flex', justifyContent: 'space-around' }} >
                    <NotificationsIcon /> Store Alert
                </MenuItem>

            </Menu>
        </div>
    );
}

function ShortCut() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dispatch = useDispatch()
    return (
        <div>
            <IconButton
                // id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
            >
                <BsPlus color='green' size={25} />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} >Create New Costomer</MenuItem>
                <MenuItem onClick={handleClose}>Create Invoice</MenuItem>
                <MenuItem onClick={() => dispatch(changeStateAppointmentModel(true))}>Add Appoitment</MenuItem>
            </Menu>
        </div>
    );
}

export default function Page({ children, header }) {
    const [open, setOpen] = React.useState(true);
    const [menuopen, setmenueOpen] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const opens = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    document.title = "Bunty's studio ";
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    useEffect(() => {
        const store = localStorage.getItem('store');
        echo.channel(`storeupdate.${store}`)
            .listen('storeUpdate', (data) => {
                console.log(data);
                toast(data.msg.msg)
                // alert(data.msg)
            });
        // requestForToken()
        requestForToken()
        dispatch(fetchHairExtention())
        dispatch(fetchHairExtentionType())
        dispatch(fetchHairPatch())
        dispatch(fetchHairPatchtype())
        dispatch(fetchHairWegtype())
        dispatch(fetchHairWeg())
        dispatch(fetchserviceCetegury())
        dispatch(fetchProduct())
        dispatch(fetchProductBrand())
        dispatch(fetchProductCategury())
        dispatch(fetchStaff())
        dispatch(fetchcostomerCetegury())
        dispatch(fetchstuffCetegury())
        dispatch(fetchServices())
        dispatch(fetchCostomer())
        dispatch(fetchStore())
        dispatch(fetchCity())
        dispatch(fetchInvoice())
        dispatch(fetchAppoitment())
        dispatch(fetchStorenotification())
        dispatch(fetchStorenotificationcatygury())
        dispatch(fetchStoretime())
        dispatch(fetchStoreclosingdate())
        dispatch(fetchCampign())
        dispatch(fetchSmsTemp())
        dispatch(fetchPoint())
        dispatch(fetchFeedback())
    }, [])
    const toggleDrawer = () => {
        setOpen(!open);
    };

    //   const { logo } = useSelector((s) => s.theme)

    return (
        <>
            <>
                <ThemeProvider theme={defaultTheme}>
                    <Box sx={{ display: 'flex' }}>
                        {/* <CssBaseline /> */}

                        <MuiAppBar position='absolute' open={open}>
                            {/* <Alert sx={{zIndex:2}} severity="warning">This is a warning alert — check it out!</Alert> */}
                            <Toolbar
                                sx={{
                                    pr: '24px', // keep right padding when drawer closed
                                }}

                            >
                                <IconButton
                                    edge="start"
                                    color='info'
                                    aria-label="open drawer"
                                    onClick={toggleDrawer}
                                // sx={{
                                //     marginRight: '36px',
                                //     ...(open && { display: 'none' }),
                                // }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                {/* <IconButton onClick={toggleDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton> */}
                                <Stack sx={{ width: '100%', height: '100%' }} direction={'row'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
                                    <TextField className='pt-2' placeholder='Serch Costomer' size='small' variant='outlined' color='secondary' sx={{ width: '50%' }} />
                                    <Stack className='pt-2 row px-3' spacing={1} direction={'row'} >
                                        <ShortCut />
                                        <Notification />
                                        <IconButton onClick={() => dispatch(authLogout())} color='error' >
                                            <PowerSettingsNewIcon color='error' />
                                        </IconButton>
                                    </Stack>
                                </Stack>
                            </Toolbar>
                        </MuiAppBar>
                        <MuiDrawer variant="permanent" open={open}>
                            <Toolbar
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    px: [1],
                                }}
                            >
                                <Link to="/" class="brand-link border-0 d-flex flex-row">
                                    <img src={Logo} height={'52px'} width="150px" style={{ opacity: 0.8 }} />
                                </Link>
                                {/* <IconButton onClick={toggleDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton> */}
                            </Toolbar>
                            <List component="nav">
                                {/* {mainListItems} */}
                                {routesconst.map((e, k) => <MainListItems data={e} key={k} />)}
                            </List>
                        </MuiDrawer>
                        <Box
                            component="main"
                            sx={{
                                // backgroundColor: (theme) =>
                                //     theme.palette.mode === 'light'
                                //         ? theme.palette.grey[100]
                                //         : theme.palette.grey[900],
                                flexGrow: 1,
                                height: '100vh',
                                overflow: 'auto',
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="lg xs sm" sx={{ mt: 4, mb: 4, borderRadius: 50 }}>
                                {/* <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert onClose={() => { }} severity='warning' >This is a success alert — check it out!</Alert>
                                </Stack> */}
                                <Outlet />
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
                <CostomerModel id={'#exampleModal'} />
                <ToastContainer />
                <AppoitmentModel />
                <AddService />
                <AddProduct />
                <Appoitment />
                <Addinvoice />
            </>
        </>
    )
}


const drawerWidth = 180;

const MuiAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    height: 80,
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const MuiDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            border: 0,
            // boxShadow:2,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {

                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('xs')]: {
                    width: theme.spacing(8),
                },
                [theme.breakpoints.only('xs')]: {
                    width: theme.spacing(0),
                },
            }),
        },
    }),
);


export const MainListItems = ({ data }) => {
    const { tag, path, icon, noty } = data
    const { appointment: { appoitment } } = useSelector(state => state)

    return (
        <>
            <Link to={path} >
                <ListItemButton>
                    <ListItemIcon>
                        <Badge badgeContent={(tag == "Appointment") ? appoitment.length : 0} color="secondary">
                            {icon}
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary={tag} />
                </ListItemButton>
            </Link>
        </>
    )
};

// { tag == "Appointment" ? <Badges data={appoitment.length} /> : null }
// { tag == "Costomer" ? <Badges /> : null }
// { tag == "Ticket" ? <Badges /> : null }
// { tag == "Feedback" ? <Badges /> : null }