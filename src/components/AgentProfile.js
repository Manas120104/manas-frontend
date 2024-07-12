import React from 'react';
import { Container, Typography, Paper, Grid, Avatar, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import { Email, Phone } from '@mui/icons-material';

function AgentProfile() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper 
        elevation={4} 
        sx={{ 
          p: 4, 
          background: 'linear-gradient(135deg, #e0f7fa, #ffffff)', 
          borderRadius: '15px', 
          textAlign: 'center',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Adding subtle shadow for depth
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Avatar 
            sx={{ 
              width: 160, // Increased avatar size
              height: 160, // Increased avatar size
              bgcolor: '#3f51b5', 
              fontSize: '3.5rem', // Increased font size for avatar text
              margin: '0 auto' 
            }}
          >
            JD
          </Avatar>
          <Typography 
            variant="h4" 
            sx={{ 
              mt: 2, 
              fontWeight: 'bold', 
              color: '#3f51b5' 
            }}
          >
            John Doe
          </Typography>
        </Box>
        
        <List sx={{ textAlign: 'left' }}>
          <ListItem>
            <Phone sx={{ mr: 2, color: '#3f51b5' }} />
            <ListItemText 
              primary="Phone Number" 
              secondary="+1234567890" 
              primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.3rem' }} // Increased font size
              secondaryTypographyProps={{ fontSize: '1.2rem' }} // Increased font size
            />
          </ListItem>
          <Divider />
          <ListItem>
            <Email sx={{ mr: 2, color: '#3f51b5' }} />
            <ListItemText 
              primary="Email" 
              secondary="johndoe@example.com" 
              primaryTypographyProps={{ fontWeight: 'bold', fontSize: '1.3rem' }} // Increased font size
              secondaryTypographyProps={{ fontSize: '1.2rem' }} // Increased font size
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default AgentProfile;
