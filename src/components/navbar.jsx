import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar
} from '@mui/material';
import { useState } from 'react';
import { logo } from '../assets/index';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = state => () => {
    setOpen(state);
  };

  const navLinks = [
    { label: 'Main', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Projects', href: '/projects' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Contacts', href: '/contacts' }
  ];

  return (
    <>
      <AppBar
        sx={{
          padding: '20px 60px',
          background: 'rgba(255, 255, 255, 1)',
          position: 'static',
          boxShadow: 'none'
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Link href='/' underline='none'>
            <Box
              component='img'
              src={logo}
              alt='Logo'
              sx={{ height: 50, cursor: 'pointer' }}
            />
          </Link>

          <Stack
            sx={{
              color: 'rgba(5,5,5,1)',
              cursor: 'pointer',
              display: { xs: 'none', md: 'flex' }
            }}
            direction='row'
            spacing={5}
          >
            {navLinks.map(item => (
              <Link
                key={item.label}
                href={item.href}
                sx={{
                  color: 'rgba(5,5,5,1)',
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
                    backgroundColor: 'rgba(5,5,5,1)',
                    transition: 'width 0.6s ease'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </Stack>

          <IconButton
            sx={{ display: { xs: 'block', md: 'none' } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ color: 'rgba(5,5,5,1)' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            {navLinks.map(item => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component='a'
                  href={item.href}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
