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
            variant: 'soft',
            noStyle: true,
          },
          {
            label: 'Login',
            href: '/login',
          }
        ]}
        navLeft={[
          {
            label: 'Design System',
            href: '/design-system'
          },
        ]}
      />
      <Box>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}