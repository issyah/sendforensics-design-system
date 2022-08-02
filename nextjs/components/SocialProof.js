/**
 * Social Proof bar */ 

import {
  Box,
  Container,
  Column,
  Typography,
  Grid,
} from '@mui/material';

import Image from '../src/Image';
export default function SocialProof(props) {
  const {
    quote,
    profilePhoto,
    name,
    subtitle,
    bgcolor
  } = props;

  return (
    <Box
      sx={{
        bgcolor: (bgcolor) ? bgcolor : 'primary.softDark',
        py: 10
      }}
    >
      <Container>
        <Grid 
          container
          justifyContent='center'
          textAlign={'center'}
        >
          <Grid item sx={12} md={8}>
            <Typography
                variant='h4'
                gutterBottom
            >
              "{quote}"
            </Typography>
            {profilePhoto && 
              <Box
                sx={{
                  mt:4,
                  height: 120,
                  width: 120,
                  display: 'inline-block',
                  mx: 'auto',
                  borderRadius: 50,
                  overflow: 'hidden',
                  boxShadow: 'shadows[20]'
                }}
              >
                <Image src={profilePhoto} height='100%' width='100%' layout='responsive' objectFit='contain' />
              </Box>            
            }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

}