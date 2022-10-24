
import { MenuItem, Stack, Button, Grid, Select, TextField, Typography, FormControl, InputLabel } from "@mui/material";
import React from 'react'
import { useEffect } from "react";
import axios from "../../../api/axios";

function FormTicketManegment() {
    const URL_GET_USERS = '/user/all'
    const URL_GET_EVENTS = '/event/all'
    const [users, setUsers] = React.useState([]);
    const [events, setEvents] = React.useState([]);
    const [userC, setUserc] = React.useState('')
    const [eventc, setEventc] = React.useState('')


    const handleUserChange = (event) => {

        setUserc(event.target.value);
    };
    const handleEventChange = (event) => {

        setEventc(event.target.value);
    };
    const handleUser = () => {
        try {

            axios.post('',)
        } catch (err) {
            console.log(err.message)
        }

    }
    const handleGetUser = () => {
        axios.get(URL_GET_USERS).then((res) => {
            console.log(res.data)
            setUsers(res.data)

        })
    }

    const handleGetEvents = () => {
        axios.get(URL_GET_EVENTS).then((res) => {
            console.log(res.data)
            setEvents(res.data)

        })
    }

    useEffect(() => {
        handleGetUser()
        handleGetEvents()
    }, [])
    return (
        <>
            <form>
                <Grid container xs={12} sx={{ padding: '2%', display: 'flex', justifyContent: 'center' }}>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3%' }}> <Typography sx={{

                        fontSize: '30px',
                        fontWeight: '100',
                        lineHeight: '50px',
                        letterSpacing: '1px',
                        padding: '0 0 40px',
                        textTransform: 'Uppercase'

                    }} > Add Ticket </Typography></Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} >

                        <FormControl fullWidth>
                            <InputLabel id="userSelect">User</InputLabel>
                            <Select
                                labelId="userSelect"
                                id="Userselect"
                                value={userC}
                                label="userC"
                                onChange={handleUserChange}
                            >
                                {users.map((user) =>
                                    <MenuItem value={user.email}>{user.email}</MenuItem>
                                )}


                            </Select>
                        </FormControl>




                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} >

                        <FormControl fullWidth>
                            <InputLabel id="EventSelect">Event</InputLabel>
                            <Select
                                labelId="EventSelect"
                                id="EventSelect"
                                value={eventc}
                                label="eventc"
                                onChange={handleEventChange}
                            >
                                {(!events) &&


                                    events.map((event) => {
                                        <MenuItem value={event.name}>{event.name}</MenuItem>
                                    })

                                }
                            </Select>
                        </FormControl>




                    </Grid>
                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}><Button type='submit'>Add Ticket</Button></Grid>
                </Grid>


            </form>
        </>
    )
}


export default FormTicketManegment