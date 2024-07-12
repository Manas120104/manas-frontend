import React from 'react';
import { Container, Typography, Paper, Grid, Box, Divider } from '@mui/material';

function UserComplaintDetails() {
  // Simulated data for demonstration
  const complaintsData = {
    "message": "Fetched all complaints",
    "status": [
      {
        "_id": "669021126febfa023538ff12",
        "ticketId": "02fa20e7-b375-4f69-bea5-536dcf495bb8",
        "name": "alicent",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "resolved",
        "userId": "USER878",
        "__v": 0,
        "agentId": "AGENT945"
      },
      {
        "_id": "669101dfc78be2ea045121c1",
        "ticketId": "e8b25988-46b2-4f02-8b4b-58b82403aca7",
        "name": "alicent",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "Pending",
        "userId": "USER878",
        "__v": 0
      },
      {
        "_id": "669101dfc78be2ea045121c1",
        "ticketId": "e8b25988-46b2-4f02-8b4b-58b82403aca7",
        "name": "alicent",
        "phoneNum": 1234567890,
        "email": "johndoe123@gmail.com",
        "complaintDescription": "Product is not working!!! Says \"error message\"",
        "status": "Pending",
        "userId": "USER878",
        "__v": 0
      }
    ]
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>My Complaints</Typography>
      {complaintsData.status.map(complaint => (
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
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
}

export default UserComplaintDetails;
