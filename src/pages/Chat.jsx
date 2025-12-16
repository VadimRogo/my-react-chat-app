import React, { useState } from 'react';
import { Box, Typography, Paper, Container, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Chat() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: 'user' }]);
      setInputValue('');
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper
        elevation={3}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          borderRadius: 2,
          height: '80vh',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
          <Typography component="h1" variant="h5">
            Chat with AI
          </Typography>
          <Button component={RouterLink} to="/profile" variant="outlined">
              Back to Profile
          </Button>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            width: '100%',
            overflowY: 'auto',
            mb: 2,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 1,
            padding: 2,
          }}
        >
          {messages.length === 0 ? (
            <Typography color="text.secondary">
              No messages yet. Start the conversation!
            </Typography>
          ) : (
            messages.map((msg, index) => (
              <Box key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 1 }}>
                 <Typography variant="body1" component="span" sx={{
                    display: 'inline-block',
                    p: 1,
                    borderRadius: 1,
                    bgcolor: msg.sender === 'user' ? 'primary.main' : 'background.paper',
                    color: msg.sender === 'user' ? 'primary.contrastText' : 'text.primary',
                 }}>
                  {msg.text}
                </Typography>
              </Box>
            ))
          )}
        </Box>

        <Box
          component="form"
          sx={{ display: 'flex', width: '100%' }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 1, px: 3 }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Chat;