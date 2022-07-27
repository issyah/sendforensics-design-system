import {
  Button,
  Typography,
  Stack,
  Box,
  Paper
} from '@mui/material';
import BorderedBox from '../BorderedBox';
export default function ButtonSystem(){
  const buttonArray = [
    'primary',
    'secondary',
    'success',
    'error',
    'info',
  ]
  return (
    <Box>
      <Typography variant={'body1'} gutterBottom>
        Contained Buttons
      </Typography>
      <BorderedBox>
        <Stack spacing={1} direction="row">
          {buttonArray.map((item) => 
            <Button 
              variant="contained" 
              color={item} 
              key={item}
              sx={{
                textTransform: 'capitalize'
              }}
            >{item}</Button>
          )}
        </Stack>
      </BorderedBox>
      <Typography variant={'body1'} gutterBottom>
        Outlined Buttons
      </Typography>
      <BorderedBox
        sx={{
          bgcolor: 'grey.900'
        }}
      >
        <Stack spacing={1} direction="row" >
          {buttonArray.map((item) => 
            <Button 
              variant="outlined" 
              color={item} 
              key={item}
              sx={{
                textTransform: 'capitalize'
              }}
            >{item}</Button>
            )}
        </Stack>
      </BorderedBox>
      <Typography variant={'body1'} gutterBottom>Text Buttons</Typography>
      <BorderedBox
        sx={{
          bgcolor: 'grey.900'
        }}
      >
        <Stack spacing={1} direction="row">
          {buttonArray.map((item) => 
            <Button 
              variant="text" 
              color={item} 
              key={item}
              sx={{
                textTransform: 'capitalize'
              }}
            >{item}</Button>
            )}
        </Stack>
      </BorderedBox>
      <Typography variant={'body1'} gutterBottom>Soft Buttons</Typography>
      <BorderedBox>
        <Stack spacing={1} direction="row">
          {buttonArray.map((item) => 
            <Button
              variant={'soft'}
              color={item}
              key={item}
              sx={{
                textTransform: 'capitalize'
              }}
            >
              {item}
            </Button>
          )}
        </Stack>
      </BorderedBox>
      <Typography gutterBottom>Default buttons</Typography>
      <BorderedBox>
        <Stack spacing={1} direction="row">
          <Button variant='default' color='white'>White</Button>
          <Button variant='default' color='black'>Black</Button>
        </Stack>
      </BorderedBox>
      <Typography variant={'body1'} gutterBottom>Sizes</Typography>
      <BorderedBox>
        <Stack spacing={1} >
          <Button variant='contained' size="small">Small</Button>
          <Button variant='contained' size="medium">Small</Button>
          <Button variant='contained' size="large">Small</Button>
        </Stack>
      </BorderedBox>
    </Box>
  )
}