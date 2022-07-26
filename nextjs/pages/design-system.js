/**
 * Created By: Issyah Ismail
 * @description: A basic design system for the source of truth. To follow exactly the components and design to a pixel accuracy. */ 

import {Paper, Container, Grid, Card, Box, Typography} from '@mui/material';
import Logo from '../public/logo.svg';
import Image from 'next/image';
import TypographySystem from '../components/DesignSystem/TypographySystem';
import LeftDrawerLayout from '../layout/LeftDrawerLayout'
import FontStack from '../components/DesignSystem/FontStack';
import ButtonSystem from '../components/DesignSystem/ButtonSystem';
export default function DesignSystem(){
  const sideNav = [
    {
      href: '#font-section',
      label: 'Font Stack',
    },
    {
      href: '#typography-section',
      label: 'Typography Scale'
    },
    {
      href: '#button-section',
      label: 'Buttons'
    },
    {
      href: '#layout-section',
      label: 'Layout'
    }
  ];
  const nav = [
    {
      href: '/',
      label: 'Home'
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
            variant={'h4'}
            gutterBottom
          >
            SendForensics Design System
          </Typography>
          <Box sx={{
            mb:4
          }}>
            A complete set of standards intended to manage design at scale using reusable components. The primary benefits of designs systems is the ability to replicate designs quickly by utilizing readily available components.
          </Box>
          <FontStack/>
          <Typography
            variant={'h5'}
            id={'typography-section'}
          >
            Typography
          </Typography>
          <Box
            sx={{
              mb:4
            }}
          >Incoporating a typographic scale to our font sizes. The base size for the font is 16px / 1rem.</Box>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              bgcolor: 'neutral.main',
              mb:4,
            }}
          >
            <TypographySystem/>
          </Paper>
          <Box
            sx={{
              mb:4
            }}
          >
            <Typography
              variant={'h5'}
              id={'button-section'}
            >
              Buttons
            </Typography>
            <Typography gutterBottom>
              Buttons allow users to take actions and make choices in the system.
            </Typography>
          </Box>
          <ButtonSystem/>

        </Container>
      </Paper>
    </LeftDrawerLayout>
  )
  
}