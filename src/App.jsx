import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import SignUpDetails from "./pages/SignUpDetails";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#3B82F6', // A more muted blue
    },
  },
  typography: {
    fontFamily: '"Futura PT", sans-serif',
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background: "#1A1A1A", // Dark charcoal background
        fontFamily: '"Futura PT", sans-serif',
      },
      "*" : {
        fontFamily: '"Futura PT", sans-serif',
      }
    }}
  />
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserDetails(null);
  };

  const handleSignUpDetails = (details) => {
    setUserDetails(details);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/signup-details"
            element={<SignUpDetails onSignUpDetails={handleSignUpDetails} />}
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile onLogout={handleLogout} userDetails={userDetails} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/chat"
            element={isAuthenticated ? <Chat /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
