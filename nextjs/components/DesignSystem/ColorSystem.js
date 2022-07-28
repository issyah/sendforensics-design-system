/**
 * SendForensics Color Palette displayed on the design system 
 **/ 


import {
  Box,
  Stack,
  Typography,
  styled, 
  Grid,
} from '@mui/material';
import Anchor from '../Anchor';
import BorderedBox from '../BorderedBox';
import Logo from '../Logo';
export default function ColorSystem(){
  const ColoredBox = styled(Box)({
    height: 50,
    width: 50,
    borderRadius: 8,
  })

  const colorArray = {
    primary:[
      'dark',
      'main',
      'light',
      'softDark',
      'softLight'
    ],
    secondary:[
      'dark',
      'main',
      'light',
      'softDark',
      'softLight'
    ],
    grey:[
      '50',
      '100',
      '200',
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
    ],
  }
  const systemColor = {
    success:[
      'dark',
      'main',
      'light'
    ],
    error: [
      'dark',
      'main',
      'light'
    ],
    warning: [
      'dark',
      'main',
      'light'
    ],
    info: [
      'dark',
      'main',
      'light'
    ]
  }
  return (
    <Box>
      <Anchor id={'color-section'}>
        <Typography variant={'h4'}>
          Colors
        </Typography>
      </Anchor>
      <Logo/>
      <Typography gutterBottom variant={'h6'}>
        Company Color
      </Typography>
      {Object.keys(colorArray).map((key,index) => 
        <Box
          key={index}
        >
          <Typography 
            variant='body1' 
            gutterBottom 
            sx={{textTransform: 'capitalize'}}  
          >{key}</Typography>
          <BorderedBox>
            <Stack spacing={2} direction={'row'}>
              {colorArray[key].map((color, i) => 
                <Stack
                  spacing={2}
                  alignItems='center'
                  direction={'column'}
                >
                  <ColoredBox
                    sx={{
                      bgcolor: `${key}.${color}`
                    }}
                  />
                  {color}
                </Stack>
              )}
            </Stack>
          </BorderedBox>
        </Box>
      )}
      <Typography gutterBottom variant='h6'>System Status</Typography>
      <Grid container spacing={0} >
        {Object.keys(systemColor).map((key,index) => 
          <Grid
            key={index}
            item
            xs={4}
          >
            <Typography 
              variant='body1' 
              gutterBottom 
              sx={{textTransform: 'capitalize'}}  
            >{key}</Typography>
            <BorderedBox
              sx={{
                display: 'inline-block'
              }}
            >
              <Stack spacing={2} direction={'row'}>
                {systemColor[key].map((color, i) => 
                  <Stack
                    spacing={2}
                    alignItems='center'
                    direction={'column'}
                  >
                    <ColoredBox
                      sx={{
                        bgcolor: `${key}.${color}`
                      }}
                    />
                    {color}
                  </Stack>
                )}
              </Stack>
            </BorderedBox>
          </Grid>
        )}
      </Grid>
      {/* <Typography variant='body1' gutterBottom>Primary Colors</Typography>
      <BorderedBox>
        <Stack spacing={2} direction={'row'}>
          <Stack 
            spacing={2} 
            direction='column'
            alignItems={'center'}>
            <ColoredBox
              sx={{
                bgcolor: 'primary.main'
              }}
            />
            Main
          </Stack>
        </Stack>
      </BorderedBox> */}
    </Box>
  )
}