import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

function DrawerComp() {
    const [openDrawer,setOpenDrawer]=useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
        >
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>
                            test
                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    test
                </ListItemButton>
            </List>
        </Drawer>
    </React.Fragment>
  )
}

export default DrawerComp