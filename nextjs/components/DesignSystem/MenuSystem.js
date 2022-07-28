import {
  Typography,
  Box,
  Stack,
  MenuItem,
  Divider,
  MenuList,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import BorderedBox from '../BorderedBox';
import Anchor from '../Anchor';
import { useState } from 'react';
import MenuDropdown from '../MenuDropdown';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
export default function MenuSystem(){
  const [anchorDropdown, setAnchorDropdown] = useState(null);
  const open = Boolean(anchorDropdown);
  const handleCloseMenu = () => {
    
  }
  return (
    <Box>
      <Anchor
        id={'menu-section'}
      >
        <Typography
          variant={'h4'}
        >
          Menu (MenuDropdown)
        </Typography>
        <Typography gutterBottom>
          A menu displays a list of items when clicked on a link/button.
        </Typography>
      </Anchor>
      <Typography>Button Menu</Typography>
      <BorderedBox>
        <Stack spacing={2} direction={'row'}>
          <MenuDropdown
            btnProps={{
              variant: 'contained'
            }}
            label={'Settings'}
            closeOnClick
          >
              <MenuItem>Billing</MenuItem>
              <MenuItem>Account</MenuItem>
          </MenuDropdown>
          <MenuDropdown
            btnProps={{
              variant: 'default',
              color:'white'
            }}
            label={'Options'}
            closeOnClick
          >
            <MenuItem>Alerts</MenuItem>
            <MenuItem>Unsubscribe Exlcudes</MenuItem>
            <Divider/>
            <MenuItem>Delete</MenuItem>
          </MenuDropdown>
        </Stack>
      </BorderedBox>
      <Typography>Navbar Menu</Typography>
      <BorderedBox>
        <Stack spacing={2} direction='row'>
          <MenuDropdown
            label={'Product'}
            navLink
            btnProps={{
              variant: 'inherit'
            }}
            closeOnClick
          >
            <Stack spacing={2} direction={'row'}>
              <MenuList
              >
                <Typography
                  sx={{
                    color: 'primary.light',
                    px:2,
                  }}
                >Features</Typography>
                <MenuItem>Spam Analyzer</MenuItem>
                <MenuItem>Reputation Dashboard</MenuItem>
                <MenuItem>DMARC Monitoring</MenuItem>
                <MenuItem>Blacklist Checker</MenuItem>
                <MenuItem>Inbox Placement</MenuItem>
                <MenuItem>Client Previews</MenuItem>
                <MenuItem>Integrations</MenuItem>
              </MenuList>
              <Divider orientation='vertical' flexItem/>
              <MenuList>
                <Typography
                  sx={{
                    color: 'primary.light',
                    px: 2,
                  }}
                >
                  SendForensics to
                </Typography>
                <MenuItem>Optimize</MenuItem>
                <MenuItem>Secure</MenuItem>
              </MenuList>
            </Stack>
          </MenuDropdown>
          <Divider orientation='vertical' flexItem/>
          <MenuDropdown
            closeOnClick
            navLink
            label={'Additional Tools'}
            btnProps={{
              variant:'inherit'
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <InboxOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                Placement Test
              </ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <BlockOutlinedIcon fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                Blacklist Checker
              </ListItemText>
            </MenuItem>
          </MenuDropdown>
        </Stack>
      </BorderedBox>
      <Box
        sx={{
          height: '500px'
        }}
      ></Box>
    </Box>
  )
}