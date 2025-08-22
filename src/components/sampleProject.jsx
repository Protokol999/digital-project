import { Box, Stack, Typography } from '@mui/material';
import { computer, maket, office } from '../assets/projects/projects';

export const SampleProject = () => {
  return (
    <>
      <Box sx={{ px: { xs: 2, sm: 4, md: 7.5 }, mb: { xs: 10, md: 20 } }}>
        <Stack
          direction='column'
          spacing={2}
          sx={{ mb: { xs: 4, md: '61px' } }}
        >
          <Typography
            sx={{
              fontSize: { xs: '40px', md: '64px' },
              color: 'rgba(189,189,189,1)'
            }}
            variant='h2'
          >
            Sample
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '40px', md: '64px' },
              fontWeight: '600'
            }}
            variant='h2'
          >
            Project 1
          </Typography>
        </Stack>
        <Stack direction='column' spacing={3.75}>
          <Box component='img' src={computer} alt='Computer' />
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            spacing={3.75}
          >
            <Box component='img' src={office} />
            <Typography
              fontWeight={200}
              fontSize={{ xs: '12px', sm: '14px', md: '16px' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with.
            </Typography>
          </Stack>
          <Box component='img' src={maket} />
        </Stack>
      </Box>
    </>
  );
};
