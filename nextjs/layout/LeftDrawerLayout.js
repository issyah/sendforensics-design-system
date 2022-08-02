import * as React from 'react';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import LogoSvg from '../public/logo.svg';
import Image from '../src/Image';
import {styled} from '@mui/material/styles';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import NavLink from '../components/NavLink';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, children, sideNav, nav } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar 
      >
        <Image
          src={LogoSvg}
          height={60}
          width={200}
        />
      </Toolbar>
      <List
        dense
      >
        {/* add navbar links here on mobile */}
        {nav.map((item,index) => 
          <ListItem key={index} sx={{
            display: {
              xs:'block',
              md: 'none'
            }
          }}>
            <ListItemButton href={item.href || ''} component={Link}>
              <ListItemText primary={item.label || ''}/>
            </ListItemButton>
          </ListItem>
        )}  
        {sideNav.map((item,index) => 
          <ListItem key={index}>
            <ListItemButton href={item.href || ''} component={Link}>
              {(item.icon) && 
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
              }
              <ListItemText primary={item.label || ''}/>
            </ListItemButton>
          </ListItem>
        )}
        
      </List>
    </div>
  );
  const navbar = (
    <Box
      sx={{
        display: {
          xs: 'none',
          sm: 'flex'
        }
      }}
    >
      {nav.map((item, index) => 
        <NavLink href={item.href} key={index} variant='inherit' noLinkStyle component={Link}>
          {item.label}
        </NavLink>
      )}
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        color={'inherit'}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            justifyContent:'space-between'
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* empty box to push the navitem to the right */}
          <Box
            sx={{
              display: {xs: 'none', sm: 'block'}
            }}
          ></Box>
          {navbar}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, p: 0 }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        maxWidth={'md'}
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
