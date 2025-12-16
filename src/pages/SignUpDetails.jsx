
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

const SignUpDetails = ({ onSignUpDetails }) => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    dateOfBirth: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUpDetails(formData);
    navigate('/profile');
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
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          color: 'white',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
          Завершите регистрацию
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Фамилия"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            autoFocus
            InputLabelProps={{
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="Имя"
            name="firstName"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="dateOfBirth"
            label="Дата рождения"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white', colorScheme: 'dark' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: '#4F00F9', color: 'white' }}
          >
            Зарегистрироваться
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpDetails;
