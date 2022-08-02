import Navbar from '../components/Navbar';
import {
  Box,
  Toolbar
} from '@mui/material';
export default function Public(props){
  const {children} = props;
  return (
    <Box>
      <Navbar
        nav={[
          {
            label: 'Try for free',
            href: '/pricing',
            // variant: 'soft',
            noStyle: true,
            variant: 'contained',
            color: 'primary',
          },
          {
            label: 'Login',
            href: '/login',
          }
        ]}
        navLeft={[

        ]}
        navLeft={[
          {
            label: 'Design System',
            href: '/design-system'
          },
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
    </Box>
  )
}