import EastIcon from '@mui/icons-material/East';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Contacts = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 7.5 }, mb: { xs: 10, md: 20 } }}>
      {/* Заголовок */}
      <Stack direction='column' spacing={2} sx={{ mb: { xs: 4, md: '61px' } }}>
        <Typography
          sx={{
            fontSize: { xs: '32px', sm: '40px', md: '64px' },
            color: 'rgba(189,189,189,1)'
          }}
          variant='h2'
        >
          Contact
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '32px', sm: '40px', md: '64px' },
            fontWeight: 600
          }}
          variant='h2'
        >
          Information
        </Typography>
      </Stack>

      {/* Контент */}
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 4, md: 8 }}
        alignItems='flex-start'
      >
        {/* Левая часть */}
        <Stack direction='column' spacing={1.5} flex={1}>
          <Typography variant='body1' fontSize={{ xs: 16, md: 18 }}>
            <strong>Company Name</strong>
          </Typography>
          <Typography variant='body1' fontSize={{ xs: 16, md: 18 }}>
            1234 Sample Street, Austin, Texas 76401
          </Typography>
          <Typography variant='body1' fontSize={{ xs: 16, md: 18 }}>
            Phone: 512.333.2222
          </Typography>
          <Typography variant='body1' fontSize={{ xs: 16, md: 18 }}>
            Email: sampleemail@gmail.com
          </Typography>

          <Button
            component={Link}
            to='/contact'
            endIcon={<EastIcon />}
            variant='contained'
            sx={{
              mt: 3,
              alignSelf: { xs: 'center', md: 'flex-start' }, // центр на мобилке, слева на десктопе
              background: 'rgba(51,51,51,1)',
              color: 'rgba(255,255,255,1)',
              fontWeight: 200,
              fontSize: 16,
              textTransform: 'uppercase',
              px: 4,
              py: 2,
              boxShadow: 'none',
              '&:hover': {
                background: 'rgba(255,255,255,1)',
                color: 'rgba(51,51,51,1)',
                boxShadow: 'none',
                transition: '0.4s ease'
              }
            }}
          >
            Contact Us
          </Button>
        </Stack>

        <Box
          sx={{
            flex: 1,
            width: '100%',
            height: { xs: 300, sm: 400, md: 450 },
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: 3
          }}
        >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.7130021799426!2d-94.6378348242663!3d31.63048754169312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863789520822f0b1%3A0x4c2a7f2b6d1de761!2zMTIzNCBFIEF1c3RpbiBTdCwgTmFjb2dkb2NoZXMsIFRYIDc1OTY1LCDQodCo0JA!5e1!3m2!1sru!2s!4v1755855750396!5m2!1sru!2s'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
      </Stack>
    </Box>
  );
};
