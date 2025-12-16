import React from 'react';
import { Box, Typography, Container, Button, Avatar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Profile({ onLogout, userDetails }) {
  const getInitials = (firstName = '', lastName = '') => {
    const firstInitial = firstName ? firstName[0] : '';
    const lastInitial = lastName ? lastName[0] : '';
    return `${firstInitial}${lastInitial}`.toUpperCase();
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return '';
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          padding: '40px',
          borderRadius: '10px',
          background: '#2D2D2D',
          boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.5)',
          color: 'white',
          width: '100%',
          maxWidth: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Добро пожаловать!
        </Typography>
        <Avatar sx={{ width: 80, height: 80, mb: 2, bgcolor: 'primary.main', fontSize: '2.5rem' }}>
          {userDetails ? getInitials(userDetails.firstName, userDetails.lastName) : ''}
        </Avatar>
        {userDetails && (
          <Box sx={{ mt: 2, mb: 3, textAlign: 'left', width: '100%' }}>
            <Typography variant="body1">Имя: {userDetails.firstName}</Typography>
            <Typography variant="body1">Фамилия: {userDetails.lastName}</Typography>
            <Typography variant="body1">Дата рождения: {userDetails.dateOfBirth}</Typography>
            <Typography variant="body1">Возраст: {calculateAge(userDetails.dateOfBirth)}</Typography>
          </Box>
        )}
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button
            component={RouterLink}
            to="/chat"
            variant="contained"
            sx={{ color: 'white' }}
          >
            Перейти в AI чат
          </Button>
          <Button
            variant="contained"
            onClick={onLogout}
            sx={{ color: 'white' }}
          >
            Выйти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
