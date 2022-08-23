
import { AppBar, IconButton, Toolbar, Typography, Grid, Tabs, Tab, Button } from '@mui/material'
import { pages } from "./pages";
import { Link } from "react-router-dom";
import * as React from 'react'
import Carousel from '../carousel/Carousel';
import { useStyles } from "./useStyles";
import DrawerComp from './Drawer/DrawerComp';
import Login from '../Login/login';



export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar sx={{ background: '#063970', position: 'sticky', opacity: "50%" }}>
        <Toolbar>
          <Typography>HOT TICKET</Typography>

          <Tabs sx={{ margin: ' auto' }} textColor='inherit ' value={value} onChange={handleChange} indicatorColor="primary">
            {pages.map((page, index) => (

              <Tab
                label={page.title}
                component={Link}
                to={page.link}
                key={index}
              />

            ))}
          </Tabs>
          <Grid>
            <Login />
          </Grid>


        </Toolbar>
        <DrawerComp />
      </AppBar>

    </React.Fragment>
  )

}
