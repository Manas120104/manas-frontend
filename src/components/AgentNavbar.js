import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


function AgentNavbar() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          AGENT DASHBOARD
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/agentcomplaintdetails">View Assigned Complaints</Button>
        <Button color="inherit" component={Link} to="/agentprofile">My Profile</Button>
      </Toolbar>
    </AppBar>
  );
}

export default AgentNavbar;
