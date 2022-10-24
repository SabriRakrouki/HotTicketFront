import * as React from 'react';
import { Routes, BrowserRouter as Router, Switch, Route, Navigate } from 'react-router-dom'
import { Typography, Grid, Button } from '@mui/material';
import About from './Pages/About';
import Header from './Components/Header/Header';
import EventPage from './Pages/Event';
import Contact from './Pages/Contact';
import EventForm from './Components/EventForm/EventForm';
import Dashboard from './Dashboard/Dashboard';
import Login from './Dashboard/Login/LoginPage';
import UserHomePage from './Dashboard/UserMangement/ViewPage/UserHomePage';
import EventHomePage from './Dashboard/EventMangement/Viewer/EventHomePage';
import TicketHomePage from './Dashboard/TicketMangement/ViewPage/TicketHomePage';
import LandingPage from './LandingPage';
import ParticelBackground from './Components/paritucalsBackground/ParticelBackground';
import Home from './Pages/Home';
import Event from './Pages/Event';



export default function App() {
  return (
    <>
      <Router  >

        <Grid >
          <Routes>
            <Route exact path="/" element={<LandingPage />} >
              <Route path='/' element={<Navigate to='home' />} />
              <Route path="home" element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='events' exact element={<Event />} />
              <Route path='contact' exact element={<Contact />} />

            </Route>


            <Route path='/dashboard/*' excat element={<Dashboard />} >
              <Route path='home' excat element={<Login />} />
              <Route path='user' element={<UserHomePage />} />
              <Route path='event' exact element={<EventHomePage />} />
              <Route path="ticket" element={<TicketHomePage />} />
            </Route>






          </Routes>




        </Grid>
      </Router>



    </>

  );
}