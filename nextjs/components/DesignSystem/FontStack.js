import {
  Box,
  Typography,
  Paper
} from '@mui/material';
import BorderedBox from '../BorderedBox';
import Anchor from '../Anchor';
export default function FontStack(){
  return (
    <>
    <Anchor
      id={'font-section'}
    >
      <Typography 
        variant={'h4'}
      >
        Font stack
      </Typography>
    </Anchor>

    <Typography
      variant={'h6'}
    >
      Source Sans Pro
    </Typography>
    <BorderedBox>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Box>
    </BorderedBox>
    <Typography
      variant={'h6'}
    >
      Source Code Pro
    </Typography>
    <Box
      sx={{
        fontFamily: 'Source Code Pro',
        p: 4,
        color: '#fff',
        bgcolor: 'grey.900',
        borderRadius:2,
      }}
    >
      console.log('Hello World');
    </Box>
    </>
  )
}