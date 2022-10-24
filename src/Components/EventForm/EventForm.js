import { Button, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DropzoneArea } from 'material-ui-dropzone';

import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


function EventForm() {
    const [birth, setBrith] = React.useState(dayjs());
    const [age, setAge] = React.useState('');
    const [file, setFile] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (

        <>
            <form>
                <Grid container xs={12} sx={{ padding: '2%', display: 'flex', justifyContent: 'center' }}>
                    <Grid item xs={12} sx={{  padding: '1%', display: 'flex', flexDirection: 'column' }}>
                        <Grid sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}> <Typography sx={{

                            fontSize: '46px',
                            fontWeight: '100',
                            lineHeight: '50px',
                            letterSpacing: '1px',
                            padding: '0 0 40px',
                            textTransform: 'Uppercase'

                        }} > Add Event Form</Typography></Grid>
                        <TextField xs={4} sx={{ marginBottom: '2%' }} label="Event name " />
                        <Grid container xs={12} sx={{ marginBottom: '2%' }}>
                            <Grid item xs={6}>
                                <Stack sx={{ width: '250px' }} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Start Date"
                                            value={birth}
                                            onChange={(newValue) => {
                                                setBrith(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Stack>
                            </Grid>
                            <Grid item xs={6}>
                                <Stack sx={{ width: '250px' }} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="End Date"
                                            value={birth}
                                            onChange={(newValue) => {
                                                setBrith(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Stack>
                            </Grid>

                        </Grid>
                        <TextField xs={4} sx={{ marginBottom: '3%' }} label="Location" />
                        <Select

                            id="demo-simple-select"
                            value={age}
                            label="Event Category"
                            onChange={handleChange}
                            sx={{ marginBottom: '2%' }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <TextField type="number" xs={4} sx={{ marginBottom: '2%' }} label="Ticket Number" />
                        <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={12}>
                            <DropzoneArea
                                acceptedFiles={['image/*']}
                                dropzoneText={"Drag and drop an image here or click to Upload your photo"}
                                onChange={(files) => {
                                    setFile(files)
                                    console.log(!file)

                                }}
                                filesLimit={4}
                            />
                        </Grid>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}><Button type='submit'>Add Event</Button></Grid>
                    </Grid>

                </Grid>

            </form>
        </>
    )
}

export default EventForm