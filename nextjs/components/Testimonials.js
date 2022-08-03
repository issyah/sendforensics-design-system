/**
 * Social Proof bar */ 

import {
  Box,
  Container,
  Stack,
  Divider,
  Typography,
  Grid,
} from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
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
        bgcolor: (bgcolor) ? bgcolor : 'white',
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
            <FormatQuoteRoundedIcon
              fontSize={'large'}
            />
            <Typography
                variant='h4'
                gutterBottom
            >
              "{quote}"
            </Typography>
            <Stack
              alignItems={'center'}
              justifyContent={'center'}
              spacing={2}
              sx={{
                flexDirection: {
                  xs: 'column',
                  md: 'row'
                },
                gap:{
                  md: 2
                },
              }}
            >
              {profilePhoto && 
                <Box
                  sx={{
                    borderRadius: 100,
                    overflow: 'hidden',
                    boxShadow: 2,
                    height: 80,
                    width: 80
                  }}
                >
                  <Image src={profilePhoto} height='100%' width='100%' layout='responsive' objectFit='cover'/>
                </Box>            
              }
              <Typography
                variant='subtitle'
                sx={{
                  fontWeight:700,
                  display: 'block'
                }}
              >
                {name}
              </Typography>
              <Divider 
                orientation='vertical'
                sx={{
                  height: 30,
                  borderWidth: 1,
                  display: {
                    xs: 'none',
                    md: 'flex'
                  }
                }}
              />
              <Typography
                variant={'body'}
              >
                {subtitle}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )

}