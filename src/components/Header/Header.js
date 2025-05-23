import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';


const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isResponsive = useMediaQuery('(max-width:600px)');
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const getBackgroundColor = (path) => {
    switch (path) {
      case '/':
        return '#adf7d1';
      case '/about':
        return 'linear-gradient(88.8deg, rgb(239, 171, 245) 13.4%, rgb(196, 181, 249) 76.3%)';
      case '/education':
        return '#e0ffcd';
      case '/project':
        return 'linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)';
      case '/contact':
        return '#ffd6a4';
      default:
        return undefined;
    }
  };

  const getHoverColor = (path) => {
    switch (path) {
      case '/':
        return '#7ce2b1';
      case '/about':
        return 'linear-gradient(88.8deg, rgb(239, 171, 245) 13.4%, rgb(196, 181, 249) 76.3%)';
      case '/education':
        return '#e0ffcd';
      case '/project':
        return 'linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)';
      case '/contact':
        return '#ffd6a4';
      default:
        return undefined;
    }
  };

  return (
    <>
      <AppBar position="static" sx={{ background: getBackgroundColor(location.pathname) }}>
        <Toolbar>
          {isResponsive && (
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="typography">
          ANAND  
          </Typography>
          {!isResponsive && (
            <>
              <Button color="inherit" component={Link} to="/" sx={{ '&:hover': { background: getHoverColor('/') } }}>
                <ListItemText primary="Home" sx={{ fontSize: '0.8rem', color: 'black' }} />
              </Button>
              <Button color="inherit" component={Link} to="/about" sx={{ '&:hover': { background: getHoverColor('/about') } }}>
                <ListItemText primary="About" sx={{ fontSize: '0.8rem', color: 'black' }} />
              </Button>
              <Button color="inherit" component={Link} to="/education" sx={{ '&:hover': { background: getHoverColor('/education') } }}>
                <ListItemText primary="Education" sx={{ fontSize: '0.8rem', color: 'black' }} />
              </Button>
              <Button color="inherit" component={Link} to="/project" sx={{ '&:hover': { background: getHoverColor('/project') } }}>
                <ListItemText primary="Projects" sx={{ fontSize: '0.8rem', color: 'black' }} />
              </Button>
              <Button color="inherit" component={Link} to="/contact" sx={{ '&:hover': { background: getHoverColor('/contact') } }}>
                <ListItemText primary="Contact" sx={{ fontSize: '0.8rem', color: 'black' }} />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)} sx={{ '&:hover': { background: getHoverColor('/') } }}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/about" onClick={toggleDrawer(false)} sx={{ '&:hover': { background: getHoverColor('/about') } }}>
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/education" onClick={toggleDrawer(false)} sx={{ '&:hover': { background: getHoverColor('/education') } }}>
            <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Education" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/project" onClick={toggleDrawer(false)} sx={{ '&:hover': { background: getHoverColor('/project') } }}>
            <ListItemIcon><DescriptionIcon /></ListItemIcon>
            <ListItemText primary="Projects" sx={{ color: 'black' }} />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)} sx={{ '&:hover': { background: getHoverColor('/contact') } }}>
            <ListItemIcon><ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact" sx={{ color: 'black' }} />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
