import { Grid, Typography } from '@mui/material'
import React from 'react'
import ImageService from '../../Assets/img/serviceImg.jpg'
import { serviceStyle } from './ServiceStyle'
function Service() {
    const classes = serviceStyle()
    return (
        <>
            <Grid xs={12} container sx={{ zIndex: 2, marginBottom: '3%', position: 'relative', display: 'flex' }}>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ImageService} className={classes.imageService} />
                </Grid>


                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid container xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >

                            <Typography className={classes.serviceTitle} >Our Service</Typography>

                        </Grid>

                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography className={classes.serviceText} display='block'>Hot Ticket make it easy and straightforward for users to find and match you we have it in our platform best events</Typography>

                        </Grid>
                    </Grid>
                </Grid>



            </Grid>

        </>
    )
}

export default Service