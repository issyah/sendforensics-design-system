import {
  Button,
  Menu,
  MenuList,
  MenuItem,
  Typography,
  Box,
  Divider,
  Paper,
  Fade
} from '@mui/material';
import BorderedBox from '../BorderedBox';
import Anchor from '../Anchor';
import { useState } from 'react';

export default function MenuSystem(){
  const [anchorDropdown, setAnchorDropdown] = useState(null);
  const open = Boolean(anchorDropdown);
  const handleClick = (event) => {
    setAnchorDropdown(event.currentTarget);
  }
  const handleClose = () =>{
    setAnchorDropdown(null);
  }
  return (
    <Box>
      <Anchor
        id={'menu-section'}
      >
        <Typography
          variant={'h4'}
        >
          Menu
        </Typography>
        <Typography gutterBottom>
          A menu displays a list of items when clicked on a link/button.
        </Typography>
        <BorderedBox>
          <Button 
            variant='text'
            onMouseOver={handleClick}
          >
            Dropdown
          </Button>
          <Menu
            anchorEl={anchorDropdown}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            MenuListProps={{onMouseLeave: handleClose}}
          >
            <MenuList
              sx={{
                width:320,
                maxWidth:'100%',
                px: 1
              }}
            >
              <MenuItem>Billing</MenuItem>
              <MenuItem>Logout</MenuItem>
              <Divider/>
              <MenuItem>Billing</MenuItem>
            </MenuList>
          </Menu>
        </BorderedBox>
      </Anchor>
      <Box
        sx={{
          height: '500px'
        }}
      ></Box>
    </Box>
  )
}