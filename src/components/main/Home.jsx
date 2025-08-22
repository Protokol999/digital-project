import { Box, Stack, Typography } from '@mui/material';
import { house } from '../../assets/main/main';
export const Home = () => {
  return (
    <Box sx={{ padding: '0px 60px' }}>
      <Stack
        mb={30}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        textAlign={{ xs: 'center', md: 'left' }}
        spacing={20}
      >
        <Stack direction='column' justifyContent='center'>
          <Typography
            sx={{
              fontWeight: 200,
              color: 'rgba(189,189,189,1)'
            }}
            variant='h1'
          >
            Project
          </Typography>
          <Typography
            variant='h2'
            sx={{ fontWeight: 600, color: 'rgba(51,51,51,1)' }}
          >
            Project
          </Typography>
        </Stack>
        <Box
          component='img'
          sx={{ borderRadius: '20px' }}
          width={{ xs: '100%', md: '100%' }}
          src={house}
          alt='Home'
        />
      </Stack>
    </Box>
  );
};
