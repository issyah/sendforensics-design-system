/**
 * Created By: Issyah Ismail
 * @description: A basic design system for the source of truth. To follow exactly the components and design to a pixel accuracy. */ 

import {Paper, Container, Grid, Card, Box, Typography} from '@mui/material';
import TypographySystem from '../components/DesignSystem/TypographySystem';
import LeftDrawerLayout from '../layout/LeftDrawerLayout'
import FontStack from '../components/DesignSystem/FontStack';
import ButtonSystem from '../components/DesignSystem/ButtonSystem';
import ButtonGroupSystem from '../components/DesignSystem/ButtonGroupSystem';
import ToggleButtonSystem from '../components/DesignSystem/ToggleButtonsSystem';
import ColorSystem from '../components/DesignSystem/ColorSystem';
import MenuSystem from '../components/DesignSystem/MenuSystem';
import Anchor from '../components/Anchor';
export default function DesignSystem(){
  const sideNav = [
    {
      href: '#color-section',
      label: 'Colors'
    },
    {
      href: '#font-section',
      label: 'Font stack',
    },
    {
      href: '#typography-section',
      label: 'Typography scale'
    },
    {
      href: '#button-section',
      label: 'Buttons'
    },
    {
      href: '#button-group-section',
      label: 'Button groups'
    },
    {
      href: '#toggle-button-section',
      label: 'Toggle Buttons'
    },
    {
      href: '#menu-section',
      label: 'Menu'
    }
  ];
  const nav = [
    {
      href: '/',
      label: 'Home'
    },
    {
      href: '/signin',
      label: 'Sign in'
    }
  ]
  return (
    <LeftDrawerLayout
      sideNav={sideNav}
      nav={nav}
    >
      <Paper elevation={0}>
        <Container
          maxWidth={'lg'}
          sx={{
            mt: 4
          }}
        >
          <Typography
            variant={'h2'}
            component={'h1'}
            gutterBottom
          >
            SendForensics Design System
          </Typography>
          <Box sx={{
            mb:4
          }}>
            A complete set of standards intended to manage design at scale using reusable components. The primary benefits of designs systems is the ability to replicate designs quickly by utilizing readily available components. The components are built on top <a href="https://mui.com/" rel='noopener' target={'_blank'}>MUI React framework</a>.
          </Box>
          <ColorSystem/>
          <FontStack/>
          <Box sx={{mb:4}}></Box>
          <TypographySystem/>
          <Box
            sx={{
              mb:4
            }}
          >
            <Anchor
              id={'button-section'}
            >
              <Typography
                variant={'h4'}
              >
                Buttons
              </Typography>
              <Typography>
                Buttons allow users to take actions and make choices in the system.
              </Typography>
            </Anchor>
          </Box>
          <ButtonSystem/>
          <ButtonGroupSystem/>
          <ToggleButtonSystem/>
          <MenuSystem/>
        </Container>
      </Paper>
    </LeftDrawerLayout>
  )
  
}