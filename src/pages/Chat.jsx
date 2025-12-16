import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Container, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Chat() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue('');
    }
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      setTimeout(() => {
        const aiMessage = { text: "Я пока что не работаю", sender: 'ai' };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      }, 500);
    }
  }, [messages]);

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
          backgroundColor: '#0C141E'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
          <Typography component="h1" variant="h5">
            Чат с ИИ
          </Typography>
          <Button component={RouterLink} to="/profile" variant="outlined" sx={{ background: '#4F00F9', color: 'white' }}>
              Вернуться в профиль
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
              Сообщений пока нет. Начните диалог!
            </Typography>
          ) : (
            messages.map((msg, index) => (
              <Box key={index} sx={{ textAlign: msg.sender === 'user' ? 'right' : 'left', mb: 1 }}>
                 <Typography variant="body1" component="span" sx={{
                    display: 'inline-block',
                    p: 1,
                    borderRadius: 1,
                    bgcolor: msg.sender === 'user' ? 'primary.main' : '#1A2433',
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 1, px: 3, background: '#4F00F9', color: 'white' }}
          >
            Отправить
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Chat;