import { Button, Dialog, Grid, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DropzoneArea } from 'material-ui-dropzone';

import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from '../../../api/axios';

function EditForm(props) {
  const URL_UPLOAD_IMAGES = "/event/images";
  const URL_UPDATE_EVENT = "/event/updateEvent";
  const [eventName, setEventName] = React.useState('');
  const [eventProvider, setEventProvider] = React.useState('');
  const [eventCategory, setEventCategory] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [dateB, setDateB] = React.useState(dayjs());
  const [dateE, setDateE] = React.useState(dayjs());
  const [ticketN, setTicketN] = React.useState('');
  const [files, setFiles] = React.useState([]);
  const [open, setOpen] = React.useState(false)
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(files)
    if (files) {

      const image = new FormData();
      image.append('files', files)
      await axios.post(URL_UPLOAD_IMAGES, image, { Headers: { 'Content-Type': 'multipart/form-dat' }, withCredentials: true }).then((res) => {
        axios.post(`${URL_UPDATE_EVENT}:${eventName}`, {
          'nameEvent': eventName, 'eventProvider': eventProvider, 'eventCategory': eventCategory, 'location': location
          , 'dateBegin': dateB, 'dateEnd': dateE, 'ticketNumber': ticketN, 'eventImages': res.data
        }, { Headers: { 'Content-Type': 'applocation/json' }, withCredentials: true })
        props.handleChangeData(true)
      })
    } else {
      await axios.post(`${URL_UPDATE_EVENT}:${eventName}`, {
        'location': location,
        "nameEvent": eventName,
        "eventProvider": eventProvider,
        "eventCategory": eventCategory,
        "dateBegin": dateB,
        "dateEnd": dateE,
        "ticketNumber": ticketN
      }, { Headers: { 'Content-Type': 'applocation/json' }, withCredentials: true })
      props.handleChangeData(true)

    }
    handleColse()
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleColse = () => {
    setOpen(false)
  }
  const handleChange = (event) => {
    setEventCategory(event.target.value);
  };

  return (
    <>
      <Button variant='outlined' color='info' onClick={handleClickOpen}> Event Event</Button>
      <Dialog
        open={open}
        onClose={handleColse}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <form onSubmit={handleSubmit} >
          <Grid container xs={12} sx={{ padding: '2%', display: 'flex', justifyContent: 'center' }}>
            <Grid item xs={12} sx={{ padding: '1%', display: 'flex', flexDirection: 'column' }}>
              <Grid sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}> <Typography sx={{

                fontSize: '46px',
                fontWeight: '100',
                lineHeight: '50px',
                letterSpacing: '1px',
                padding: '0 0 40px',
                textTransform: 'Uppercase'

              }} > Event Event Form</Typography></Grid>
              <TextField xs={4} sx={{ marginBottom: '2%' }} label="Event name " onChange={(event) => { setEventName(event.target.value) }} />
              <Grid container xs={12} sx={{ marginBottom: '2%' }}>
                <Grid item xs={6}>
                  <Stack sx={{ width: '250px' }} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Start Date"
                        value={dateB}
                        onChange={(newValue) => {
                          setDateB(newValue);
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
                        value={dateE}
                        onChange={(newValue) => {
                          setDateE(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Stack>
                </Grid>

              </Grid>
              <TextField xs={4} sx={{ marginBottom: '3%' }} label="Location" onChange={(event) => { setLocation(event.target.value) }} />
              <Select

                id="demo-simple-select"
                value={eventCategory}
                label="Event Category"
                onChange={handleChange}
                sx={{ marginBottom: '2%' }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <TextField type="number" xs={4} sx={{ marginBottom: '2%' }} label="Ticket Number" onChange={(event) => { setTicketN(event.target.value) }} />
              <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={12}>
                <DropzoneArea
                  acceptedFiles={['image/*']}
                  dropzoneText={"Drag and drop an image here or click to Upload your photo"}
                  onChange={(files) => {
                    setFiles(files)

                  }}
                  filesLimit={4}
                />
              </Grid>
              <Grid sx={{ display: 'flex', justifyContent: 'center' }}><Button type='submit'>Edit Event</Button></Grid>
            </Grid>

          </Grid>

        </form>
      </Dialog>

    </>
  )
}

export default EditForm