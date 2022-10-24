import { Button, Grid, TextareaAutosize, TextField } from '@mui/material'
import { pageStyle } from './useStyle'
import React from 'react'

function Contact() {
  const classes = pageStyle()
  return (
    <>
      <Grid container xs={12} sx={{ height: '100%', marginTop: '5%', display: 'flex', marginBottom: '10%', justifyContent: 'center' }}>


        <Grid item xs={4}></Grid>

        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container xs={12}>
            <Grid><h1 style={{ color: 'white' }}>Contanct US </h1></Grid>

            <Grid item xs={12} sx={{ marginBottom: '2%' }}>
              <TextField id="name" label="Full Name" variant="outlined" className={classes.textFormContanct} />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '2%' }}>

              <TextField id="email" label="Email" variant="outlined" className={classes.textFormContanct} />
            </Grid>

            <Grid item xs={12} sx={{ marginBottom: '2%' }}>

              <TextField id="object" label="Object" variant="outlined" className={classes.textFormContanct} />
              <textarea className={classes.textareaCSS} placeholder="Your message ...." />
            </Grid>
            <Grid item xs={12} sx={{ marginBottom: '2%', display: 'flex', justifyContent: 'flex-end' }}>
              <Button className={classes.SendContactButton} > Send</Button>
            </Grid>


          </Grid>

        </Grid>
        <Grid item xs={4}></Grid>


      </Grid>


    </>
  )
}

export default Contact