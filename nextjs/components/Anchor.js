/**
 * Set an anchor href offset based on navbar height 
**/ 

import {
  Box
} from '@mui/material';


export default function Anchor(props){
  return (
    <Box 
      sx={{
        paddingTop: '66px',
        marginTop: '-66px',
        mb: 2,
      }}
      {...props}
    />
  )
}