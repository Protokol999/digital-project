import { Box, Stack, Typography } from '@mui/material';

export const Focus = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, mb: { xs: 10, md: 20 } }}>
      <Typography
        mb='60px'
        variant='h2'
        sx={{ fontSize: { xs: '32px', sm: '48px', md: '64px' } }}
        color='rgba(189, 189, 189, 1)'
      >
        Main Focus/Mission Statement
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3.75, sm: 5, md: 8 }}
        justifyContent='space-between'
      >
        <Stack direction='row' spacing={3.75}>
          <Typography
            sx={{ fontSize: { xs: '150px', sm: '200px' } }}
            fontWeight={900}
            variant='h2'
            color='rgba(242, 242, 242, 1)'
          >
            1
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '16px', sm: '22px' } }}
            fontWeight={400}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </Typography>
        </Stack>
        <Stack direction='row' spacing={3.75}>
          <Typography
            sx={{ fontSize: { xs: '150px', sm: '200px' } }}
            fontWeight={900}
            variant='h2'
            color='rgba(242, 242, 242, 1)'
          >
            2
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '16px', sm: '22px' } }}
            fontWeight={400}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
