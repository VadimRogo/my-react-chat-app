import React from 'react';
import { Box, Typography, Paper, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Profile({ onLogout }) {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome, admin!
        </Typography>
        <Box sx={{ mt: 2, mb: 3 }}>
          <Typography variant="body1">This is your profile page.</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={RouterLink}
            to="/chat"
            variant="contained"
            color="primary"
          >
            Go to AI Chat
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onLogout}
          >
            Logout
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Profile;