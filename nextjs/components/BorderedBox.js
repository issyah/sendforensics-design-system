
import {
  Box,
  styled
} from '@mui/material';
export default function BorderedBox(props){
  const {sx, ...newProps} = props;
  const styled = {
    px: 4,
    py: 2,
    borderColor: 'grey.300',
    borderWidth:1,
    borderStyle: 'solid',
    borderRadius: 2,
    mb:2,
    ...sx
  }
  return (
    <Box 
      sx={styled}
      {...newProps}/>
  )
}