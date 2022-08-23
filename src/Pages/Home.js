import { Grid } from '@mui/material'
import React from 'react'
import Carousel from '../Components/carousel/Carousel'
function Home() {
  return (
    <>
      <Grid sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><Carousel /></Grid>

    </>
  )
}

export default Home