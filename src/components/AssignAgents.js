import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@mui/material';

function AssignAgentsToComplaints() {
  const [complaintsData, setComplaintsData] = useState({
    message: 'Fetched all usercomplaints',
    status: [
      {
        _id: '66901ec0ba20827d48754e79',
        ticketId: '2dae1fd9-e512-4580-a65c-5664f7b6867a',
        name: 'John Doe',
        phoneNum: 1234567890,
        email: 'johndoe123@gmail.com',
        complaintDescription: 'Product is not working!!! Says "error message"',
        status: 'Pending',
        userId: 'USER0001',
        __v: 0,
      },
      
      {
        _id: '669101dfc78be2ea045121c1',
        ticketId: 'e8b25988-46b2-4f02-8b4b-58b82403aca7',
        name: 'alicent',
        phoneNum: 1234567890,
        email: 'johndoe123@gmail.com',
        complaintDescription: 'Product is not working!!! Says "error message"',
        status: 'Pending',
        userId: 'USER878',
        __v: 0,
      },
    ],
  });

  const [agentList, setAgentList] = useState({
    message: 'Fetched all agents',
    agentList: [
      {
        _id: 'AGENT0001',
        full_name: 'Jon Snow',
        address: 'The Wall, North Westeros',
        phone_no: 25545678921,
        role: 'agent',
        username: 'kingsinthenorth',
        password: '$2b$10$IW.V/iu7dVTWhgtscSPmo.U7zHnRIibF3jRzV1a6UezmyzMhw73aO',
        __v: 0,
      },
      {
        _id: 'AGENT0002',
        full_name: 'Jon Snow2',
        address: 'The Wall, North Westeros',
        phone_no: 2554567891,
        role: 'agent',
        username: 'daenerys',
        password: '$2b$10$EZbPrvkKGASYjEVIgZHasO.LCdKkyA8dVL3JxkAcdBOtVJo1Ypbf2',
        __v: 0,
      },
      {
        _id: 'AGENT0002',
        full_name: 'Jon Snow2',
        address: 'The Wall, North Westeros',
        phone_no: 2554567891,
        role: 'agent',
        username: 'daenerys',
        password: '$2b$10$EZbPrvkKGASYjEVIgZHasO.LCdKkyA8dVL3JxkAcdBOtVJo1Ypbf2',
        __v: 0,
      },
      {
        _id: 'AGENT0002',
        full_name: 'Jon Snow2',
        address: 'The Wall, North Westeros',
        phone_no: 2554567891,
        role: 'agent',
        username: 'daenerys',
        password: '$2b$10$EZbPrvkKGASYjEVIgZHasO.LCdKkyA8dVL3JxkAcdBOtVJo1Ypbf2',
        __v: 0,
      },
      {
        _id: 'AGENT945',
        full_name: 'agent',
        address: 'The Wall, North Westeros',
        phone_no: 245456345911,
        role: 'agent',
        username: 'agent123',
        password: '$2b$10$b8Y6CWFBuTsiDS.XzdM0R.RYxlRLyhv9ONiKy.M5173ok08hWeJ4S',
        __v: 0,
      },
      {
        _id: 'AGENT889',
        full_name: 'agentidk',
        address: 'The Wall, North Westeros',
        phone_no: 2454589686896346000,
        role: 'agent',
        username: 'agent123456',
        password: '$2b$10$GP/TgN4PMYLkaOwlxmcVX.3NEjcVRwnDhgEM9IQbSbnKCExXTiybC',
        __v: 0,
      },
    ],
  });

  const handleAssignAgent = (complaintId, agentId) => {
    const updatedComplaints = complaintsData.status.map(complaint =>
      complaint._id === complaintId ? { ...complaint, assignedAgent: agentId } : complaint
    );
    setComplaintsData({ ...complaintsData, status: updatedComplaints });
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ color: '#3f51b5', mb: 2 }}>Assign Agents to Complaints</Typography>
      {complaintsData.status.map(complaint => (
        <Paper key={complaint._id} elevation={3} sx={{ p: 3, mt: 3}}>
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
            <Grid item xs={12}>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Select Agent</InputLabel>
                <Select
                  value={complaint.assignedAgent || ''}
                  onChange={(e) => handleAssignAgent(complaint._id, e.target.value)}
                >
                  {agentList.agentList.map(agent => (
                    <MenuItem key={agent._id} value={agent._id}>{agent.full_name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {complaint.status === 'Pending' && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAssignAgent(complaint._id, agentList.agentList[0]._id)} // Default agent for demo, change as per your logic
                  sx={{ mt: 2 }}
                >
                  Assign
                </Button>
              )}
              {complaint.status === 'Resolved' && (
                <Button
                  variant="contained"
                  style={{ backgroundColor: 'green', color: 'white' }}
                  onClick={() => handleAssignAgent(complaint._id, '')} // Logic to unassign agent or handle removal
                  sx={{ mt: 2 }}
                >
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

export default AssignAgentsToComplaints;
