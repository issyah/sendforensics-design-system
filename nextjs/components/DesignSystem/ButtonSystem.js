import {
  Button,
  Typography,
  Stack,
  Box
} from '@mui/material'

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
      <Typography variant={'h6'} gutterBottom>
        Filled Buttons
      </Typography>
      <Stack spacing={1} direction="row" sx={{mb:2}}>
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
      <Typography variant={'h6'} gutterBottom>
        Outlined Buttons
      </Typography>
      <Stack spacing={1} direction="row" sx={{mb:2}}>
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
      <Typography variant={'h6'} gutterBottom>Text Buttons</Typography>
      <Stack spacing={1} direction="row" sx={{mb:2}}>
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
      <Typography variant={'h6'} gutterBottom>Soft Buttons</Typography>
      <Stack spacing={1} direction="row" sx={{mb:2}}>
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
      <Typography variant={'h6'} gutterBottom>Sizes</Typography>
      <Stack spacing={1}  sx={{mb:2, width: '50%'}}>
      <Button variant='contained' size="small">Small</Button>
        <Button variant='contained' size="medium">Small</Button>
        <Button variant='contained' size="large">Small</Button>
      </Stack>
    </Box>
  )
}