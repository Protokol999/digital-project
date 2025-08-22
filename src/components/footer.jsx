import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, IconButton, Link, Stack, Typography } from '@mui/material';
import { footerLogo } from '../assets/index';

export const Footer = () => {
  const navLinks = [
    { label: 'Main', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contacts', href: '/contacts' }
  ];

  return (
    <Box
      sx={{
        padding: '40px 40px',
        background: '#2c2c2c'
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent='space-between'
        spacing={6}
      >
        {/* Лого */}
        <Link href='/' underline='none'>
          <Box
            component='img'
            src={footerLogo}
            alt='footerLogo'
            sx={{ cursor: 'pointer', maxWidth: 160 }}
          />
        </Link>

        <Stack
          sx={{ color: 'white' }}
          direction='column'
          display={{ xs: 'none', md: 'flex' }}
          spacing={2}
        >
          <Typography fontWeight={600}>Information</Typography>
          {navLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              underline='none'
              sx={{
                color: 'rgba(255,255,255,1)',
                padding: '15px 30px',
                textDecoration: 'none',
                cursor: 'pointer',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: 0,
                  height: '2px',
                  width: '0%',
                  backgroundColor: 'rgba(255,255,255,1)',
                  transition: 'width 0.6s ease'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              <Typography>{link.label}</Typography>
            </Link>
          ))}
        </Stack>

        {/* Контакты */}
        <Stack spacing={2} direction='column'>
          <Typography sx={{ color: 'white' }} fontWeight={600}>
            Contacts
          </Typography>
          <Stack direction='row' alignItems='center'>
            <LocationOnIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white', ml: 1 }}>
              1234 Sample Street <br /> Austin Texas 78704
            </Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <LocalPhoneIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white', ml: 1 }}>512.333.2222</Typography>
          </Stack>
          <Stack direction='row' alignItems='center'>
            <EmailIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white', ml: 1 }}>
              sampleemail@gmail.com
            </Typography>
          </Stack>
        </Stack>

        <Stack color='white' direction='column' spacing={2}>
          <Typography textAlign={{ xs: 'left', md: 'center' }} fontWeight={600}>
            Social Media
          </Typography>
          <Stack direction='row' spacing={{ xs: 2, md: 3 }}>
            <IconButton
              component='a'
              target='_blank'
              href='https://www.facebook.com/'
              sx={{
                color: 'white',
                '&:hover': { color: '#1877F2', transition: 'color 0.5s ease' }
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component='a'
              target='_blank'
              href='https://www.twitter.com/'
              sx={{
                color: 'white',
                '&:hover': { color: '#1DA1F2', transition: 'color 0.5s ease' }
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component='a'
              target='_blank'
              href='https://www.linkedin.com/'
              sx={{
                color: 'white',
                '&:hover': { color: '#0A66C2', transition: 'color 0.5s ease' }
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component='a'
              href='https://www.instagram.com/'
              target='_blank'
              sx={{
                color: 'white',
                '&:hover': { color: '#E1306C', transition: 'color 0.5s ease' }
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
