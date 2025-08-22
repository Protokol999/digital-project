import EastIcon from '@mui/icons-material/East';
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { photocontact } from '../../assets/main/main';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    severity: '',
    message: '',
    visible: false
  });

  const BOT_TOKEN = '7941942970:AAGesD8DXAUe09bmNBdPFoIF4tVqXKnM_-s';
  const CHAT_ID = '807422319';

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
    if (!formData.surname.trim()) newErrors.surname = 'Фамилия обязательна';

    if (!formData.email.trim()) newErrors.email = 'Email обязателен';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Некорректный email';

    if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
    else if (!/^[+0-9 ]{10,20}$/.test(formData.phone))
      newErrors.phone = 'Некорректный формат телефона';

    if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setAlert({ visible: false });

    const text = `Новое сообщение:\nИмя: ${formData.name}\nФамилия: ${formData.surname}\nEmail: ${formData.email}\nСообщение: ${formData.message}\nТелефон: ${formData.phone}`;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url, { method: 'GET' });

      if (response.ok) {
        setAlert({
          severity: 'success',
          message: 'Сообщение успешно отправлено',
          visible: true
        });
        setFormData({
          name: '',
          surname: '',
          email: '',
          message: '',
          phone: ''
        });
      } else {
        setAlert({
          severity: 'error',
          message: 'Произошла ошибка при отправке сообщения',
          visible: true
        });
      }
    } catch (error) {
      setAlert({
        severity: 'error',
        message: 'Произошла ошибка при отправке',
        visible: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 7.5 }, mb: { xs: 10, md: 20 } }}>
      <Typography
        sx={{ fontSize: '64px', color: 'rgba(189,189,189,1)' }}
        variant='h2'
      >
        Contact Us
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        spacing={3.75}
      >
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            variant='standard'
            label='Имя'
            name='name'
            value={formData.name}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            variant='standard'
            label='Фамилия'
            name='surname'
            value={formData.surname}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.surname}
            helperText={errors.surname}
          />
          <TextField
            fullWidth
            variant='standard'
            label='Email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label='Number'
            name='phone'
            type='tel'
            variant='standard'
            value={formData.phone}
            onChange={handleChange}
            margin='normal'
            required
            error={!!errors.phone}
            helperText={errors.phone}
            inputProps={{
              inputMode: 'tel',
              pattern: '[+0-9 ]{10,20}',
              maxLength: 20
            }}
          />
          <TextField
            fullWidth
            label='Сообщение'
            name='message'
            value={formData.message}
            onChange={handleChange}
            margin='normal'
            multiline
            rows={4}
            required
            variant='standard'
            error={!!errors.message}
            helperText={errors.message}
          />
          <Button
            endIcon={<EastIcon />}
            type='submit'
            variant='contained'
            disabled={isSubmitting}
            sx={{
              mt: '30px',
              background: 'rgba(51,51,51,1)',
              color: 'rgba(255,255,255,1)',
              fontWeight: '200',
              fontSize: '16px',
              textTransform: 'uppercase',
              padding: '20px',
              boxShadow: 'none',
              '&:hover': {
                background: 'rgba(255,255,255,1)',
                color: 'rgba(51,51,51,1)',
                boxShadow: 'none',
                transition: '0.4s ease'
              }
            }}
          >
            {isSubmitting ? 'Отправка формы' : 'Sending Message'}
          </Button>
        </form>

        <Stack sx={{ mt: 3 }} spacing={2}>
          {alert.visible && (
            <Alert severity={alert.severity}>{alert.message}</Alert>
          )}
        </Stack>
        <Box
          component='img'
          sx={{
            borderRadius: '30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: '0.6s ease'
            }
          }}
          src={photocontact}
          alt='Contact'
        />
      </Stack>
    </Box>
  );
};
