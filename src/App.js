import * as React from 'react';
import { Routes, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Typography, Grid, Button } from '@mui/material';
import About from './Pages/About';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import EventPage from './Pages/Event';
import Contact from './Pages/Contact';
import Login from './Components/Login/login';
import SignUp from './Components/SignUpSimpleUser/SignUp';


export default function App() {
  return (
    <>

      <Router>
        <Grid>

          <Header />
          <Routes>
            <Route path='/about' excat element={<About />} />
            <Route path='/home' exact element={<SignUp />
            } />
            <Route path='/event' exact element={<EventPage />} />
            <Route path='/contact' exact element={<Contact />} />



          </Routes>




        </Grid>
      </Router>



    </>

  );
}