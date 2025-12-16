
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin' && password === 'admin') {
      onLogin();
      navigate('/profile');
    } else {
      setError('Неверный логин или пароль');
    }
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
        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mb: 3 }}>
          Войти
        </Typography>
        {error && (
          <Typography color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Адрес электронной почты"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white' } }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />} // Adjusted for visibility
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: '#4F00F9', color: 'white' }}
          >
            Войти
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="#" variant="body2" sx={{ color: 'white' }}>
              Забыли пароль?
            </Link>
            <Link component={RouterLink} to="/signup" variant="body2" sx={{ color: 'white', whiteSpace: 'nowrap' }}>
              {"Нет аккаунта? Зарегистрироваться"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
