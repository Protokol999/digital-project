import EastIcon from '@mui/icons-material/East';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { hotel, room, stadion } from '../assets/projects/projects';

export const Projects = () => {
  const info = [
    {
      image: hotel,
      title: 'Sample Project',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book.'
    },
    {
      image: stadion,
      title: 'Sample Project 2',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book.'
    },
    {
      image: room,
      title: 'Sample Project 3',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book.'
    }
  ];
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 7.5 }, mb: { xs: 10, md: 20 } }}>
      <Stack direction='column' spacing={2} sx={{ mb: { xs: 4, md: '61px' } }}>
        <Typography
          sx={{
            fontSize: { xs: '40px', md: '64px' },
            color: 'rgba(189,189,189,1)'
          }}
          variant='h2'
        >
          Our
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '40px', md: '64px' },
            fontWeight: '600'
          }}
          variant='h2'
        >
          Projects
        </Typography>
      </Stack>

      {info.map((item, index) => (
        <Stack key={index} direction='column' spacing={3.75} mb={5}>
          <Box sx={{ background: 'rgba(251,251,251,1)' }}>
            <Stack
              direction={{ xs: 'column', sm: 'column', md: 'row' }}
              spacing={3.75}
            >
              <Box component='img' src={item.image} alt='House' />
              <Stack direction='column' justifyContent='space-between'>
                <Typography
                  fontSize={{ xs: '24px', sm: '30px', md: '40px' }}
                  fontWeight={200}
                  color='rgba(189,189,189,1)'
                >
                  {item.title}
                </Typography>
                <Typography
                  fontSize={{ xs: '12px', sm: '15px', md: '16px' }}
                  fontWeight={200}
                  color='rgba(0,0,0,1)'
                >
                  {item.description}
                </Typography>
                <Button
                  component={Link}
                  to='../sample-project'
                  sx={{
                    width: '222px',
                    mt: '30px',
                    background: 'rgba(255,255,255,1)',
                    color: 'rgba(51,51,51,1)',
                    fontWeight: '200',
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    padding: '20px',
                    boxShadow: 'none',
                    '&:hover': {
                      background: 'rgba(51,51,51,1)',
                      color: 'rgba(255,255,255,1)',
                      boxShadow: 'none',
                      transition: '0.4s ease'
                    }
                  }}
                  endIcon={<EastIcon />}
                  variant='contained'
                >
                  Viev More
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};
