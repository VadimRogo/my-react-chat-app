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
          background: '#2D2D2D',
          boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 2 }}>
          <Typography component="h1" variant="h5">
            Чат с ИИ
          </Typography>
          <Button component={RouterLink} to="/profile" variant="contained" sx={{ color: 'white' }}>
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
            borderColor: '#555',
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
                    bgcolor: msg.sender === 'user' ? 'primary.main' : '#424242',
                    color: 'white',
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
            label="Введите ваше сообщение..."
            InputLabelProps={{
              style: { color: '#ccc' },
            }}
            sx={{ 
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#555',
                },
                '&:hover fieldset': {
                  borderColor: '#777',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.main',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ ml: 1, px: 3, color: 'white' }}
          >
            Отправить
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Chat;