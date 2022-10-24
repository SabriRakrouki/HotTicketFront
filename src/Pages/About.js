import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import aboutImg from '../Assets/img/AboutP.jpg'


export default function About() {
  return (
    <>
     
          <Grid container xs={12} sx={{height:'800px',marginTop:'5%'}}>
            <Grid item xs={12}>
              <Typography sx={{ color: 'white', fontSize: '30px', textAlign: 'center' }}>About</Typography>
            </Grid>
            <Grid item xs={12}>

              <Typography sx={{ color: 'white', fontSize: '20px', textAlign: 'center' }}>
                Hot Ticket is Application made it for you
                if you can't go to get your ticket we get it for you
              </Typography>
              <Typography sx={{ color: 'Red', fontSize: '20px', textAlign: 'center' }} >
            Coming Soon

              </Typography>
            </Grid>
          </Grid>





    





    </>

  );
}