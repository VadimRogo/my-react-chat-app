import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";

function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/signup-details");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          padding: "40px",
          borderRadius: "10px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          color: "white",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3, textAlign: "center" }}>
          Регистрация
        </Typography>
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
            autoComplete="new-password"
            InputLabelProps={{
              style: { color: 'white' },
            }}
            sx={{ input: { color: 'white' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: '#4F00F9', color: 'white' }}
          >
            Зарегистрироваться
          </Button>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link component={RouterLink} to="/" variant="body2" sx={{ color: 'white' }}>
              {"Уже есть аккаунт? Войти"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;