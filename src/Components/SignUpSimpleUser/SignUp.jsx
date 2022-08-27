

import { Button, Dialog, DialogContent, DialogTitle, Grid, Link, Slide, Stack, TextField } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DropzoneArea } from 'material-ui-dropzone';
import React from 'react'
import axios from '../../api/axios';

const REGISTER_URL = '/user/signup';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
function SignUp() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [name, setName] = React.useState('');
    const [surName, setSurName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [file, setFile] = React.useState(File[null]);
    const [birth, setBrith] = React.useState(dayjs());



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formdata = new FormData();
            formdata.append('name', name)
            formdata.append('email', email)
            formdata.append('surname', surName)
            formdata.append('password', pass)
            formdata.append('phoneNumber', phone)
            formdata.append('file', file)
            formdata.append('birthDate', birth)
            const response = axios.post(REGISTER_URL, formdata, { Headers: { 'Content-Type': 'application/json' }, withCredentials: true })
        } catch (err) {
            console.log(err.message)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <Grid container xs={12}>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={6}>
                        <TextField sx={{ width: '20em' }} id="name" onChange={(newValue) => { setName(newValue) }} label="FirstName" variant="outlined" />
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2%' }} xs={6}>
                        <TextField sx={{ width: '20em' }} id="surName" onChange={(newValue) => { setSurName(newValue) }} label="LastName" variant="outlined" />
                    </Grid>
                    <Grid item xs={1} sx={{ marginRight: '-4.5%' }}></Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={10}>
                        <TextField sx={{ width: '40em' }} id="email" onChange={(newValue) => { setEmail(newValue) }} label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={1}></Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={6}>
                        <TextField sx={{ width: '20em' }} id="phoneNumber" onChange={(newValue) => { setPhone(newValue) }} label="Phone number" variant="outlined" />
                    </Grid>

                    <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2%' }} xs={6}>
                        <TextField sx={{ width: '20em' }} id="password" onChange={(newValue) => { setPass(newValue) }} label="password" variant="outlined" />
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                        <Stack sx={{ width: '250px' }} >
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="BirthDate"
                                    value={birth}
                                    onChange={(newValue) => {
                                        setBrith(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Stack>
                    </Grid>
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={12}>
                        <DropzoneArea
                            acceptedFiles={['image/*']}
                            dropzoneText={"Drag and drop an image here or click to Upload your photo"}
                            onChange={(files) =>{setFile(files)
                            console.log(file)
                            
                            } }
                            filesLimit={1}
                        /></Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                        <Button type="submit"> Register</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}

export default SignUp