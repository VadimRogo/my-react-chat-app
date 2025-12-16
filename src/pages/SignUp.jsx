import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
} from "@mui/material";

function SignUp() {
  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Sign Up
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link component={RouterLink} to="/" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default SignUp;
