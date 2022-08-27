import { Box, Button, Dialog, DialogContent, DialogTitle, Grid, Link, Slide, Tab, Tabs, TextField, Typography } from '@mui/material'
import { display } from '@mui/system'
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState, useContext } from 'react'
import AuthContext from '../../context/AuthProvider';
import axios from '../../api/axios';
import SignUp from '../SignUpSimpleUser/SignUp';
const LOGIN_URL = '/user/login';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});





function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function Login() {
    const { auth, setAuth } = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('md');
    const userRef = useRef();
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        userRef.current?.focus()
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [email, pass])


    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(email)
            const response = await axios.post(LOGIN_URL, {
                "email": email, "password": pass
            }, { Headers: { 'Content-Type': 'application/json' }, withCredentials: true })
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            console.log(roles)
            setAuth({ email, pass, roles, accessToken })

            setEmail('');
            setPass('');
            setSuccess(true)
        } catch (err) {
            console.log(err.message)

        }


    }
    return (
        <>

            <Button variant='contained' onClick={handleClickOpen}>
                LogIn
            </Button>

            <Dialog

                fullWidth={fullWidth}
                maxWidth={maxWidth}
                TransitionComponent={Transition}
                open={open}
                onClose={handleClose}

            >
                <DialogTitle sx={{ paddingBottom: '2%', display: 'flex', justifyContent: 'center' }}> <Tabs value={value} onChange={handleChange} sx={{ display: 'flex', justifyContent: 'center' }} aria-label="basic tabs example">
                    <Tab label="Sign In" {...a11yProps(0)} />
                    <Tab label="Sign Up" {...a11yProps(1)} />

                </Tabs>


                </DialogTitle>
                <DialogContent sx={{ margin: '2%', padding: '2%',height:'100%' }}>



                    <TabPanel value={value} index={0} >

                        {success ? (<section>
                            <Typography>You have loged In {auth.email}</Typography>
                        </section>) : (<section>
                            <Typography ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</Typography>
                        </section>)}
                        <form onSubmit={handleSubmit}>
                            <Grid sx={{}} xs={12} >
                                <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '2%' }}>
                                    <TextField sx={{ width: '60%' }} id="email" label="Email" type="email" ref={userRef} autoComplete="off"
                                        onChange={(e) => { setEmail(e.target.value) }}
                                        value={email}
                                        required
                                    />

                                </Grid>

                                <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '2%' }}> <TextField
                                    id="pass"
                                    label="Password"
                                    type="password"
                                    autoComplete='off'
                                    required
                                    value={pass}
                                    onChange={(e) => { setPass(e.target.value) }}
                                    sx={{ width: '60%' }}

                                />  </Grid>


                                <Grid
                                    xs={4}
                                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                                >
                                    <Grid sx={{ display: 'flex', justifyContent: 'center' }}>  <Button type='submit' sx={{ paddingBottom: '2%', width: '200px' }} xs={4}>
                                        Sin In
                                    </Button></Grid>
                                    <Typography sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2%' }} xs={4}>Do you need an account??</Typography>



                                    <Link href="#" onClick={()=>handleChange('event',1)}>SignUp</Link>


                                </Grid>
                            </Grid>

                        </form>



                    </TabPanel>




                    <TabPanel value={value} index={1} ><SignUp/></TabPanel>
                </DialogContent>

            </Dialog>






        </>
    )
}

export default Login