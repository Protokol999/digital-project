import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Stack, Typography } from '@mui/material';
import { leftb, leftt, right } from '../../assets/main/main';

export const About = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, mb: { xs: 10, md: 20 } }}>
      <Stack
        sx={{
          background: {
            xs: 'rgba(255,255,255,1)',
            md: 'rgba(255,255,255,0.8)'
          },
          borderRadius: '20px'
        }}
        p={{ xs: 2, sm: 3, md: 5 }}
        direction={{ xs: 'column', md: 'column', lg: 'row' }}
        gap={{ xs: 4, md: 10 }}
        alignItems='center'
      >
        <Stack direction='row' gap={{ xs: 2, sm: 3.75 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row', md: 'column' }}
            gap={{ xs: 2, sm: 3.75 }}
          >
            <Box
              component='img'
              src={leftt}
              alt='Left Image'
              sx={{
                borderRadius: '20px',
                width: { xs: '100%', sm: '50%', md: '300px' },
                height: 'auto',
                objectFit: 'cover'
              }}
            />
            <Box
              component='img'
              src={leftb}
              alt='Left Image'
              sx={{
                borderRadius: '20px',
                width: { xs: '100%', sm: '50%', md: '300px' },
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </Stack>

          <Box
            component='img'
            src={right}
            alt='Right Image'
            sx={{
              display: { xs: 'none', md: 'block' },
              borderRadius: '20px',
              width: '400px',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </Stack>

        <Stack
          textAlign={{ xs: 'center', md: 'left' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          gap={3}
        >
          <Typography
            variant='h2'
            color='rgba(189,189,189,1)'
            fontSize={{ xs: '32px', sm: '48px', md: '64px' }}
            fontWeight={200}
          >
            About
          </Typography>

          <Typography
            color='rgba(0,0,0,1)'
            fontSize={{ xs: '14px', md: '16px' }}
            fontWeight={400}
            width={{ xs: '100%', sm: '80%', md: '400px' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>

          <Button
            sx={{ color: 'rgba(0,0,0,1)' }}
            variant='text'
            endIcon={<ArrowForwardIcon />}
          >
            Read More
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
