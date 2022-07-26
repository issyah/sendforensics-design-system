import {
  Box,
  Typography,
  Paper
} from '@mui/material';

export default function FontStack(){
  return (
    <>
    <Box
      sx={{
        mb: 2,
      }}
    >
      <Typography 
        variant={'h5'}
        id={'font-section'}
      >
        Font stack
      </Typography>
    </Box>

    <Typography
      variant={'h6'}
    >
      Source Sans Pro
    </Typography>
    <Paper
      sx={{
        p:4,
        bgcolor: 'neutral.main',
        mb:4,
      }}
      elevation={0}
    >
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Box>
    </Paper>
    <Typography
      variant={'h6'}
    >
      Source Code Pro
    </Typography>
    <Paper
      sx={{
        p:4,
        bgcolor: 'neutral.main',
        mb:4,
        fontFamily: '"Source Code Pro", monospace'
      }}
      elevation={0}
    >
      console.log('Hello World');
    </Paper>
    </>
  )
}