
import React from 'react';
import { Box, Typography, Container, Button, Avatar, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import TodayIcon from '@mui/icons-material/Today';
import EmailIcon from '@mui/icons-material/Email';

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

  const DataField = ({ icon, label, value }) => (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        background: 'rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
    >
      {icon}
      <Box>
        <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>{label}</Typography>
        <Typography variant="body1">{value}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 2
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
        <Avatar sx={{ width: 80, height: 80, mb: 3, bgcolor: 'primary.main', fontSize: '2.5rem' }}>
          {userDetails ? getInitials(userDetails.firstName, userDetails.lastName) : ''}
        </Avatar>

        {userDetails && (
          <Box sx={{ width: '100%' }}>
            <DataField icon={<PersonIcon />} label="Имя" value={userDetails.firstName} />
            <DataField icon={<PersonIcon />} label="Фамилия" value={userDetails.lastName} />
            <DataField icon={<EmailIcon />} label="Почта" value={userDetails.email} />
            <DataField icon={<CakeIcon />} label="Дата рождения" value={userDetails.dateOfBirth} />
            <DataField icon={<TodayIcon />} label="Возраст" value={calculateAge(userDetails.dateOfBirth)} />
          </Box>
        )}

        <Box sx={{ display: 'flex', gap: 2, mt: 3, width: '100%' }}>
          <Button
            component={RouterLink}
            to="/chat"
            variant="contained"
            sx={{ flex: 1, color: 'white' }}
          >
            AI чат
          </Button>
          <Button
            variant="outlined"
            onClick={onLogout}
            sx={{ flex: 1, color: 'white', borderColor: 'rgba(255, 255, 255, 0.5)' }}
          >
            Выйти
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
