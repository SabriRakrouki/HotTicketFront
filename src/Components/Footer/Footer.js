
import { Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <>
            <Grid container xs={12} sx={{ padding: '3%', position: 'relative', backgroundColor: 'white' }}>
                <Grid item xs={4}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


                        <Typography >Contact Us</Typography>
                        <Typography >hello@HotTicket.com</Typography>

                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>


                        <Typography >Quick Links</Typography>
                        <Typography >Home</Typography>
                        <Typography >About</Typography>
                        <Typography >Event</Typography>
                        <Typography >Contact</Typography>


                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <Typography >Check Our Media</Typography>


                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Footer