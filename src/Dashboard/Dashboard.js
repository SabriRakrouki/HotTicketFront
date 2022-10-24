import { AppBar, Avatar, Box, Button, createMuiTheme, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import EventForm from '../Components/EventForm/EventForm'
import ToolBar from './ToolBar/ToolBar'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import FolderIcon from '@material-ui/icons/Folder'
import { Routes, BrowserRouter as Router, Switch, Route, Navigate, Outlet } from 'react-router-dom'
import TicketHomePage from './TicketMangement/ViewPage/TicketHomePage'
import UserHomePage from './UserMangement/ViewPage/UserHomePage'
import EventHomePage from './EventMangement/Viewer/EventHomePage'
import FormTicketManegment from './TicketMangement/FormPage/FormTicketManegment'
import Login from './Login/LoginPage'




const drawerWidth = 240;




function Dashboard() {
    const theme = createMuiTheme({
        overrides: {
            MuiCssBaseline: {
                "@global": {
                    "*::-webkit-scrollbar": {
                        width: "10px"
                    },
                    "*::-webkit-scrollbar-track": {
                        background: "#E4EFEF"
                    },
                    "*::-webkit-scrollbar-thumb": {
                        background: "#1D388F61",
                        borderRadius: "2px"
                    }
                }
            }
        }
    });

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>


            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                        <Typography>Dashboard</Typography>
                        <Grid></Grid>
                        <Grid></Grid>
                        <Grid></Grid>

                        <Grid></Grid>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <Avatar>
                                <FolderIcon />
                            </Avatar>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>


                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer

                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <ToolBar />
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        <ToolBar />
                    </Drawer>
                </Box>
                <Box
                    theme={theme}
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Outlet/>
                    {/* <Routes>
                      

                        <Route path='/home' excat element={<Login />} />


                        <Route path='user'  element={<UserHomePage />} />
                        <Route path='event' exact element={<EventHomePage />} />


                        <Route path="ticket" element={<TicketHomePage />} />

                    </Routes> */}




                </Box>
            </Box>


        </>
    )
}

export default Dashboard