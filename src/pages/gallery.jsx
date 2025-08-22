import { Box, Stack, Typography } from '@mui/material';
import {
  foto1,
  foto10,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto7,
  foto8,
  foto9
} from '../assets/gallery/gallery';

export const Gallery = () => {
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
          Photo
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '40px', md: '64px' },
            fontWeight: '600'
          }}
          variant='h2'
        >
          Gallery
        </Typography>
      </Stack>

      <Stack direction='column' spacing={{ xs: 2, sm: 3, md: 3.75 }}>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3, md: 3.75 }}
          flexWrap='wrap'
          justifyContent='center'
        >
          <Box
            component='img'
            src={foto1}
            alt='foto1'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto2}
            alt='foto2'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto3}
            alt='foto3'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto4}
            alt='foto4'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto5}
            alt='foto5'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 3, md: 3.75 }}
          flexWrap='wrap'
          justifyContent='center'
        >
          <Box
            component='img'
            src={foto6}
            alt='foto6'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto7}
            alt='foto7'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto8}
            alt='foto8'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto9}
            alt='foto9'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
          <Box
            component='img'
            src={foto10}
            alt='foto10'
            sx={{
              width: { xs: '100%', sm: '18%' },
              objectFit: 'cover',
              borderRadius: 2
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
