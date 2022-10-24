import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../../api/axios';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import AddForm from '../FormPage/AddForm';
import DeleteAction from '../FormPage/DeleteAction';
import EditForm from '../FormPage/EditForm';

const useStyles = makeStyles({
    table: {
        Width: "100%"
    }
});


function EventHomePage() {

    const GET_EVENT_URL = '/event/all'
    const [eventData, setEventData] = React.useState([])
    const [isChange, setIsChange] = React.useState(false)
    const handleChange = (childData) => {
        setIsChange(childData)
    }
    const fetchData = () => {
        try {
            axios.get(GET_EVENT_URL, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            }).then((res) => {  setEventData(res.data.events) })
            console.log(isChange)
            setIsChange(false)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchData()



    }, [isChange])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, eventData.length - page * rowsPerPage);
    return (
        <>
            <Grid container xs={12} >
                <Grid item xs={12}><AddForm handleChangeData={handleChange} /> </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>


                        <Table sx={{ Width: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Event Name</TableCell>
                                    <TableCell align="right">Begin Date</TableCell>
                                    <TableCell align="right">End Date</TableCell>
                                    <TableCell align="right">Location</TableCell>
                                    <TableCell align="right">Event Provider</TableCell>
                                    <TableCell align="right">Event Category</TableCell>
                                    <TableCell align="right">Ticket Number</TableCell>

                                    <TableCell align="right">Edit</TableCell>
                                    <TableCell align="right">Delete</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {eventData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="right">{row.nameEvent}</TableCell>
                                            <TableCell align="right">{row.dateBegin}</TableCell>
                                            <TableCell align="right">{row.dateEnd}</TableCell>
                                            <TableCell align="right">{row.location}</TableCell>


                                            <TableCell align="right">{row.eventProvider}</TableCell>

                                            <TableCell align="right">{row.eventCategory}</TableCell>
                                            <TableCell align="right">{row.ticketNumber}</TableCell>
                                            <TableCell align="right"><EditForm/></TableCell>
                                            <TableCell align="right"><DeleteAction event={row}  handleChangeData={handleChange} /></TableCell>






                                        </TableRow>

                                    ))}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={5} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={eventData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableContainer>

                </Grid>
            </Grid>


        </>
    )
}

export default EventHomePage