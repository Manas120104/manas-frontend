import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper, Box } from '@mui/material';

function SubmitComplaint() {
  const [complaintTitle, setComplaintTitle] = useState('');
  const [complaintDescription, setComplaintDescription] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    const formData = {
      name,
      phoneNumber,
      email,
      complaintTitle,
      complaintDescription
    };
    alert(JSON.stringify(formData, null, 2)); // For demonstration, display form data
    // Clear form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setComplaintTitle('');
    setComplaintDescription('');
  };

  return (
    <Container>
      <Paper elevation={12} sx={{ p: 3, mt: 2, boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.4)' }}>
      <Typography variant="h4" sx={{ color: '#3f51b5', mb: 2 }}>Submit Complaint</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
            InputProps={{ placeholder: 'Enter your name' }}
          />
          <TextField
            fullWidth
            required
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
            InputProps={{ placeholder: 'Enter your phone number' }}
          />
          <TextField
            fullWidth
            required
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
            InputProps={{ placeholder: 'Enter your email' }}
          />
          <TextField
            fullWidth
            required
            label="Complaint Title"
            variant="outlined"
            value={complaintTitle}
            onChange={(e) => setComplaintTitle(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
            InputProps={{ placeholder: 'Enter complaint title' }}
          />
          <TextField
            fullWidth
            required
            multiline
            rows={4}
            label="Complaint Description"
            variant="outlined"
            value={complaintDescription}
            onChange={(e) => setComplaintDescription(e.target.value)}
            sx={{ mt: 2 }}
            InputLabelProps={{ sx: { fontSize: '1.2rem', fontWeight: 'bold' } }}
            InputProps={{ placeholder: 'Enter complaint description' }}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#1976d2', color: '#fff', fontSize: '1.2rem', padding: '10px 20px' }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default SubmitComplaint;
