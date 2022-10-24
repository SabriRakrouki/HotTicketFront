import { Button, Grid, Link, styled, Typography } from '@mui/material'
import React from 'react'
import { pageStyle } from './useStyle'
import { ButtonBase } from '@material-ui/core';
import Service from '../Components/Service/Service';
import homeImage from '../Assets/img/homeImageFirst.jpg'
import videoHome from '../Assets/video/test.mp4'
import { useRef } from 'react';
import { useEffect } from 'react';
function Home() {
 


  const classes = pageStyle();
  return (
    <>
      <Grid container xs={12} sx={{}}>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
          <video autoPlay loop mute  preload className={classes.firstHomeImage} >
            <source src={videoHome} type='video/mp4' />
          </video>
          <Typography className={classes.HomeText}><span className={classes.redHomeText}>Hot</span>
            <span className={classes.whiteHomeText}>Ticket</span></Typography>
          <Link href="event" underline="none" className={classes.HomeEventButton}> Check Event</Link>

        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}></Grid>


      </Grid>
      <Service />
    </>
  )
}

export default Home