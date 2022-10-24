
import { AppBar, IconButton, Toolbar, Typography, Grid, Tabs, Tab, Button } from '@mui/material'
import { pages } from "./pages";
import { Link } from "react-router-dom";
import * as React from 'react'
import Carousel from '../carousel/Carousel';
import { useStyles } from "./useStyles";
import DrawerComp from './Drawer/DrawerComp';
import Login from '../Login/Login';
import LinkButton from './LinkButton';
import logo from '../../Assets/img/logo.png'



export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <AppBar sx={{position:'fixed' ,backgroundColor: 'transparent', zIndex: '7' }}>
        <Toolbar>
          <img src={logo} width="150px" />

          <Grid sx={{ display: 'flex', justifyContent: 'space-between', margin: 'auto' }}>
            {pages.map((page, index) => (
              <LinkButton link={page.link} name={page.title} key={index} />


            ))}
          </Grid>
          <Grid sx={{ margin: '1 1 auto' }}></Grid>
          <Grid>
            <Login />
          </Grid>


        </Toolbar>
      </AppBar>

    </React.Fragment>
  )

}
