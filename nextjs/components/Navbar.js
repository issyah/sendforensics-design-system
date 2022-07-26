import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NavLink from './NavLink';
import Link from '../src/Link';

// logo 
import Logo from './Logo';
const drawerWidth = 240;


function DrawerAppBar(props) {
  const { window, nav, navLeft } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      {(navLeft && navLeft.length > 1) && 
        <List>
          {navLeft.map((item) => 
            <ListItem key={item.label}>
              <ListItemButton component={Link} href={item.href} sx={{textAlign:'center'}}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      }
      {nav && nav.length > 1 && 
        <List>
          {nav.map((item) => (
            <ListItem key={item.label}>
              <ListItemButton component={Link} href={item.href} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      }
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" color='inherit'>
        <Toolbar>
          <Container sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent:'space-between'}}
            maxWidth={'lg'}  
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{display: { sm: 'none' } }}
              edge='start'
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box 
                sx={{
                  display:'flex',
                  
                  height: '61px',
                  width: '200px',
                }}I
              >
                <Logo />
              </Box>
              {
                (navLeft) && 
                <Box sx={{display:{xs: 'none', sm: 'block'}}}>
                  {navLeft.map((item) => 
                    <NavLink 
                      key={item.label} 
                      variant={item.variant || 'inherit'}
                      href={item.href}>
                      {item.label}
                    </NavLink>  
                  )}
                </Box>
              }
            </Box>
            {
              (nav) &&
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {nav && nav.map((item) => (
                  <NavLink 
                    key={item.label} 
                    variant={item.variant || 'inherit'}
                    href={item.href}
                    noStyle={item.noStyle || undefined}  
                  >
                    {item.label}
                  </NavLink>
                ))}
              </Box>             
            }

          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
