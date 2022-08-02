import Navbar from '../components/Navbar';
import {
  Box,
  Grid,
  Stack,
  MenuList,
  MenuItem,
  Toolbar,
  Typography,
  Divider
} from '@mui/material';
import Footer from '../components/Footer';
import MenuDropdown from '../components/MenuDropdown';
import Link from '../src/Link';
export default function Public(props){
  const {children} = props;
  return (
    <Box>
      <Navbar
        nav={[
          {
            label: 'Login',
            href: '/login',
          },
          {
            label: 'Try for free',
            href: '/pricing',
            // variant: 'soft',
            noStyle: true,
            variant: 'contained',
            color: 'primary',
          },
        ]}
        navLeft={[
          // {
          //   label: 'Design System',
          //   href: '/design-system'
          // },
          {
            component: () => {
              return (
                <MenuDropdown
                  label='Product'
                  navLink
                  btnProps={{
                    variant: 'inherit'
                  }}
                  closeOnClick
                >
                  <Stack
                    spacing={2}
                    direction='row'
                    sx={{
                      flexDirection:{
                        xs: 'column',
                        md: 'row'
                      }
                    }}
                  >
                    <MenuList>
                      <Typography
                        sx={{
                          color: 'primary.light',
                          px:2
                        }}
                      >
                        Features
                      </Typography>
                      <MenuItem 
                        component={Link}
                        href='/features/spam-analyzer'
                      >
                        Spam Analyzer
                      </MenuItem>
                      <MenuItem
                        component={Link}
                        href='/features/reputation-dashboard'
                      >
                        Reputation Dashboard
                      </MenuItem>
                    </MenuList>
                    <Divider
                      orientation='vertical'
                      flexItem
                    />
                    <MenuList>
                      <Typography
                        sx={{
                          color: 'primary.light',
                          px:2
                        }}
                      >
                        SendForensics To
                      </Typography>
                      <MenuItem
                        component={Link}
                        href='/email-optimization'
                      >
                        Optimize
                      </MenuItem>
                    </MenuList>
                  </Stack>
                </MenuDropdown>
              )
            }
          },
          {
            label: 'Pricing',
            href: '/pricing'
          }
        ]}
      />
      <Box>
        <Toolbar
          sx={{
            display:{
              xs: 'block',
              md: 'none'
            }
          }}
        />
        {children}
      </Box>
      {/* footer */}
      <Footer/>
    </Box>
  )
}