import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

function AgentComplaintDetails() {
  // Simulated data for demonstration
  const complaintsData = {
    "complaints": [
      {
        "_id": "66901fe83fab3484f1535fa5",
        "ticketId": "cb2798d5-1e46-497c-9557-24c32ae3948a",
        "name": "rhaenys",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "processing",
        "userId": "USER0001",
        "__v": 0,
        "agentId": "AGENT0001"
      },
      {
        "_id": "66901fe83fab3484f1535fa5",
        "ticketId": "cb2798d5-1e46-497c-9557-24c32ae3948a",
        "name": "rhaenys",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "pending",
        "userId": "USER0001",
        "__v": 0,
        "agentId": "AGENT0001"
      },
      {
        "_id": "66901fe83fab3484f1535fa5",
        "ticketId": "cb2798d5-1e46-497c-9557-24c32ae3948a",
        "name": "rhaenys",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "resolved",
        "userId": "USER0001",
        "__v": 0,
        "agentId": "AGENT0001"
      }
    ]
  };

  const handleButtonClick = (status) => {
    if (status === 'pending') {
      // Logic to handle resolve action
      console.log('Complaint resolved!');
    } else if (status === 'resolved') {
      // Logic to handle remove action
      console.log('Complaint removed!');
    }
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Assigned Complaints</Typography>
      {complaintsData.complaints.map(complaint => (
        <Paper key={complaint._id} elevation={3} sx={{ p: 3, mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1"><strong>Ticket ID:</strong> {complaint.ticketId}</Typography>
              <Typography variant="body1"><strong>Name:</strong> {complaint.name}</Typography>
              <Typography variant="body1"><strong>Phone Number:</strong> {complaint.phoneNum}</Typography>
              <Typography variant="body1"><strong>Email:</strong> {complaint.email}</Typography>
              <Typography variant="body1"><strong>Status:</strong> {complaint.status}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1"><strong>Complaint Description:</strong></Typography>
              <Typography variant="body2">{complaint.complaintDescription}</Typography>
              {complaint.status === 'pending' && (
                <Button variant="contained" color="primary" onClick={() => handleButtonClick('pending')}>
                  Resolve
                </Button>
              )}
              {complaint.status === 'resolved' && (
                <Button variant="contained" color="success" onClick={() => handleButtonClick('resolved')}>
                  Remove
                </Button>
              )}
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
}

export default AgentComplaintDetails;
