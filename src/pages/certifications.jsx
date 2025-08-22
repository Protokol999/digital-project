import { Box, Stack, Typography } from '@mui/material';
export const Certifications = () => {
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
          Company
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '40px', md: '64px' },
            fontWeight: '600'
          }}
          variant='h2'
        >
          Certifications
        </Typography>
      </Stack>
    </Box>
  );
};
