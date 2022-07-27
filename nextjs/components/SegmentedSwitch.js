import {
  ToggleButtonGroup,
} from '@mui/material';

export default function SegmentedSwitch(props) {
  const {sx, ...newProps} = props;
  const styled = {
    ...sx,
    borderColor: 'grey.300',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius:5,
    '& .MuiToggleButtonGroup-grouped':{
      m:0.5,      
      border:0,
      px:1.25,
      py:0,
      '&:not(:first-of-type)': {
        borderRadius: 5,
      },
      '&:first-of-type': {
        borderRadius: 5,
      },
    },
    '& .Mui-selected' : {
      backgroundColor: 'primary.softDark',
      color: 'primary.main',
      '&:hover':{
        backgroundColor: 'primary.softDark'
      }
    },

  }
  return (
    <ToggleButtonGroup
      color='primary'
      sx={styled}
      {...newProps}
    />
  )
}