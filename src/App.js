import React from 'react';
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import UserNavBar from './components/UserNavBar';
import { Container } from '@mui/material';

import SubmitComplaint from './components/SubmitComplaint';
import UserComplaintDetails from './components/UserComplaintDetails';

import UserProfile from './components/UserProfile';
import AdminNavbar from './components/AdminNavbar';

import AdminComplaintDetails from './components/AdminComplaintDetails';
import Home from './components/Home'
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import AgentNavbar from './components/AgentNavbar';
import AgentComplaintDetails from './components/AgentComplaintDetails';
import AgentProfile from './components/AgentProfile';
import AssignAgentsToComplaints from './components/AssignAgents';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <UserNavBar/> */}
      {/* <AdminNavbar/> */}
      {/* <AgentNavbar/> */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/agentprofile" element={<AgentProfile />} />
          <Route path="/submitcomplaint" element={<SubmitComplaint />} />
          <Route path="/agentcomplaintdetails" element={<AgentComplaintDetails />} />
          <Route path="/usercomplaintdetails" element={<UserComplaintDetails />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/assignagents" element={<AssignAgentsToComplaints />} />
        
          <Route path="/admincomplaintdetails" element={<AdminComplaintDetails/>} />
          <Route path="/Sign-in" element={<SignInPage/>} />
          <Route path="/Sign-up" element={<SignUpPage/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
