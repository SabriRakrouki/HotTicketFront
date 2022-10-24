import { AppBar, Box, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Tooltip, Typography } from '@mui/material'

import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { useNavigate } from 'react-router-dom';

function ToolBar() {
    let navigate = useNavigate();

    const [selectedIndex, setSelectedIndex] = React.useState();
    const handleListItemClick = (event, index, link) => {

        setSelectedIndex(index);
        navigate(link)
    };
    return (
        <>
            <div>
                <Toolbar />
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0, 'user')}
                    >
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="User" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1, 'event')}
                    >
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText primary="Events" />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2, 'ticket')}
                    >
                        <ListItemIcon>
                            <BookOnlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tickets" />
                    </ListItemButton>
                </List>
            </div>

        </>
    )
}

export default ToolBar