import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, makeStyles, Slide, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import axios from '../../../api/axios';
import { Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import FormTicketManegment from '../FormPage/FormTicketManegment';

const useStyles = makeStyles({
    table: {
        Width: "100%"
    }
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const GET_USER_URL = '/user/all'

function TicketHomePage() {
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigator = useNavigate();

    const buttonHandle = (data) => {


    }
    const HandleDelete = async () => {
        try {
            const response = await axios.post();
        } catch (err) {
            console.log(err.messages)
        }
    }





    const [userData, SetUserData] = React.useState([])
    const fetchData = () => {
        try {
            axios.get(GET_USER_URL).then((res) => { SetUserData(res.data) })
        } catch (err) {
            console.log(err.message)
        }

    }
    useEffect(() => {
        fetchData()
    }, [fetchData])




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
        rowsPerPage - Math.min(rowsPerPage, userData.length - page * rowsPerPage);
    return (
        <>
            <Grid container xs={12} >
                <Grid item xs={12}><Button onClick={handleClickOpen}>Add Ticket</Button> </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>


                        <Table sx={{ Width: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">LastName</TableCell>
                                    <TableCell align="right">Role</TableCell>
                                    <TableCell align="right">Acitve(true/false)</TableCell>
                                    <TableCell align="right">BirthDate</TableCell>
                                    <TableCell align="right">event Comapny</TableCell>
                                    <TableCell align="right">phone Number</TableCell>
                                    <TableCell align="right">Edit</TableCell>
                                    <TableCell align="right">Delete</TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {userData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell align="left" >
                                                {row.email}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.surname}</TableCell>
                                            <TableCell align="right">{row.role}</TableCell>
                                            <TableCell align="right">{row.activeAcc | Boolean}</TableCell>

                                            <TableCell align="right">{row.birthDate}</TableCell>
                                            <TableCell align="right">{!row.eventComapny ? "null" : row.eventComapny}</TableCell>
                                            <TableCell align="right">{row.phoneNumber}</TableCell>
                                            <TableCell align="right"> <Button variant='contained' onClick={buttonHandle(row)} color='info'>Edit</Button></TableCell>
                                            <TableCell align="right"><Button variant='contained' color='error'> Delete</Button></TableCell>

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
                            count={userData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                </Grid>
            </Grid>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>


                    <FormTicketManegment />
                </DialogContent>


            </Dialog>
        </>
    )
}
export default TicketHomePage