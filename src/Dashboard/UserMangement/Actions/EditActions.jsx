import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";

import { FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { useEffect } from 'react'
import axios from '../../../api/axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export const EditActions = (props) => {

   const URL_UPDATED_USER = "/user/update"
   const UPLOAD_IMAGE = '/user/image'



    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const [name, setName] = React.useState('');
    const [surName, setSurName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [role, setRole] = React.useState('simpleUser')
    const [file, setFile] = React.useState([]);
    const [birth, setBrith] = React.useState(dayjs());

    const [user, setUser] = React.useState()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleAddingValue = () => {
        setName(props.user.name)
        setSurName(props.user.surname)
        setEmail(props.user.email)
        setPhone(props.user.phoneNumber)
        setPass(props.user.passowrd)
        setBrith(props.user.birth)
        setRole(props.user.role)
    }
    useEffect(() => {
        handleAddingValue()
     
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            if (file[0]) {
                const image = new FormData();
                image.append('files', file)
                const resposeUpload = axios.post(UPLOAD_IMAGE, image, { Headers: { 'Content-Type': 'multipart/form-dat' }, withCredentials: true }).then((res) => {
                    const response = axios.post(`${URL_UPDATED_USER}:${email}`, {
                        "name": name, "email": email,
                        "surname": surName, "password": pass, "phoneNumber": phone, "birthDate": birth, "image": res.data.filename
                    }, { Headers: { 'Content-Type': 'applocation/json' }, withCredentials: true })
                })
            }
            else {
                const response = axios.post(`${URL_UPDATED_USER}:${email}`, {
                    "name": name, "email": email,
                    "surname": surName, "password": pass, "phoneNumber": phone, "birthDate": birth
                }, { Headers: { 'Content-Type': 'applocation/json' }, withCredentials: true })
                handleClose()
            }

        } catch (err) {
            console.log(err.message)
        }
        setName('')
        setSurName('')
        setEmail('')
        setPhone('')
        setPass('')
        setFile([])
        setBrith(dayjs())
        setRole('simpleUser')
    }
    const handleChange = (event) => {
        setRole(event.target.value);
      };

    return (
        <>
            <Button variant="contained" color="info" onClick={handleClickOpen}>
                Edit
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <Grid container xs={12} sx={{ padding: '3%' }}>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}> <Typography sx={{ fontSize: '40px', marginBottom: '2%' }}>{!props.user ? 'Add User' : 'Edit user'}</Typography> </Grid>

                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <Grid container xs={12}>
                                <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={6}>
                                    <TextField sx={{ width: '20em' }} id="name" onChange={(newValue) => { setName(newValue.target.value) }} label="FirstName" variant="outlined" value={name} />
                                </Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2%' }} xs={6}>
                                    <TextField sx={{ width: '20em' }} id="surName" onChange={(newValue) => { setSurName(newValue.target.value) }} label="LastName" value={surName} variant="outlined" />
                                </Grid>
                                <Grid item xs={1} sx={{ marginRight: '-4.5%' }}></Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={10}>
                                    <TextField sx={{ width: '40em' }} id="email" onChange={(newValue) => { setEmail(newValue.target.value) }} label="Email" variant="outlined" value={email} />
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={6}>
                                    <TextField sx={{ width: '20em' }} id="phoneNumber" onChange={(newValue) => { setPhone(newValue.target.value) }} label="Phone number" value={phone} variant="outlined" />
                                </Grid>

                                <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '2%' }} xs={6}>
                                    <TextField sx={{ width: '20em' }} id="password" onChange={(newValue) => { setPass(newValue.target.value) }} label="password" value={pass} variant="outlined" />
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
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="useSelect"
                                            id="useSelect"
                                            value={role}
                                            label="Role"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={'simpleUser'}>simpleUser</MenuItem>
                                            <MenuItem value={'admin'}>admin</MenuItem>
                                            <MenuItem value={'eventProvider'}>Event Provider</MenuItem>
                                        </Select>
                                    </FormControl>


                                </Grid>
                                <Grid item sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={12}>
                                    <DropzoneArea
                                        acceptedFiles={['image/*']}
                                        dropzoneText={"Drag and drop an image here or click to Upload your photo"}
                                        onChange={(files) => {
                                            setFile(files)
                                            console.log(!file)

                                        }}
                                        filesLimit={1}
                                    />
                                </Grid>

                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                                    <Button type="submit"> Register</Button>
                                </Grid>
                            </Grid>



                        </form>



                    </Grid>


                </Grid>


            </Dialog>
        </>
    );





}