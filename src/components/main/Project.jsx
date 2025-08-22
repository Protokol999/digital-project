import EastIcon from '@mui/icons-material/East';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { photo1, photo2, photo3, photo4, photo5 } from '../../assets/main/main';
export const Project = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 7.5 }, mb: { xs: 10, md: 20 } }}>
      <Typography
        sx={{
          fontSize: '64px',
          fontWeight: '200',
          color: 'rgba(189,189,189,1)'
        }}
        mb={5}
        variant='h2'
      >
        Our Projects
      </Typography>
      <Stack
        direction='column'
        justifyContent='center'
        spacing={{ xs: 2, sm: 3, md: 4 }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box
            sx={{
              position: 'relative',
              height: '255px'
            }}
          >
            <Box
              component='img'
              src={photo1}
              alt='photo1'
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0,0,0,0.7)'
              }}
            />

            <Stack
              sx={{
                position: 'absolute',
                top: 40,
                left: 60,
                width: { sx: '85%', md: '100%' },
                height: '100%',
                color: 'white'
              }}
              spacing={2}
            >
              <Typography
                variant='h4'
                fontSize={{ xs: 40, sm: 50, md: 64 }}
                fontWeight={'bold'}
              >
                Sample Project
              </Typography>
              <Button
                component={Link}
                to='../sample-project'
                variant='text'
                sx={{
                  width: '222px',
                  mt: '30px',

                  color: 'rgba(255, 255, 255, 1)',
                  fontWeight: '200',
                  fontSize: '16px',
                  textTransform: 'uppercase',
                  padding: '20px',
                  boxShadow: 'none',
                  '&:hover': {
                    background: 'rgba(255,255,255,1)',
                    color: 'rgba(51,51,51,1)',
                    boxShadow: 'none',
                    transition: '0.5s ease'
                  }
                }}
                endIcon={<EastIcon />}
              >
                View More
              </Button>
            </Stack>
          </Box>

          <Box component='img' src={photo2} alt='photo2' />
        </Stack>
        <Stack
          direction={{ xs: 'column', sm: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 3, md: 4 }}
        >
          <Box component='img' src={photo3} alt='photo3' />
          <Box component='img' src={photo4} alt='photo4' />
          <Box component='img' src={photo5} alt='photo5' />
        </Stack>
      </Stack>
      <Button
        component={Link}
        to='../projects'
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
        endIcon={<EastIcon />}
        variant='contained'
      >
        All Projects
      </Button>
    </Box>
  );
};
