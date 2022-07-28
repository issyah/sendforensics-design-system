import {
  Box,
  Typography,
  Button,
  ButtonGroup
} from '@mui/material';
import BorderedBox from '../BorderedBox';
import Anchor from '../Anchor';
export default function ButtonGroupSystem(){
  return (
    <Box>
      <Anchor id={'button-group-section'}>
        <Typography
          variant={'h4'}
        
        >
          Button groups
        </Typography>
        <Typography sx={{mb:4}}>Allow buttons to be grouped together.</Typography>
      </Anchor>
      <Typography 
        variant={'body1'}
        gutterBottom
      >
        Contained
      </Typography>
      <BorderedBox>
          <ButtonGroup variant={'contained'}>
            {[...Array(3)].map((item) =>
              <Button key={item}>Primary</Button>
            )}
          </ButtonGroup>
      </BorderedBox>
      <Typography gutterBottom>
        Outlined
      </Typography>
      <BorderedBox>
        <ButtonGroup variant={'outlined'} >
          {[...Array(3)].map((item) => 
            <Button key={item}>Primary</Button>
          )}
        </ButtonGroup>
      </BorderedBox>
      <Typography gutterBottom>
        Text
      </Typography>
      <BorderedBox>
        <ButtonGroup variant={'text'}>
          {[...Array(3)].map((item) => 
            <Button key={item}>Primary</Button>
          )}
        </ButtonGroup>
      </BorderedBox>
    </Box>
  )
}