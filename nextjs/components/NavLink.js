import {styled} from '@mui/material/styles';
import {
  Button
} from '@mui/material';
import Link from '../src/Link';

export default function NavLink(props){

  if(props.noStyle){
    return <Button {...props} component={Link}/>
  }else{
    return <Button sx={{
        backgroundColor: 'none',
        borderRadius: 0,
        borderBottomWidth: '2px',
        borderBottomStyle:'solid',
        borderBottomColor: 'transparent',
        fontWeight: 400,
        '&:hover' : {
          backgroundColor: 'transparent',
          borderBottomColor: 'primary.main'
        }
      }}
      {...props} 
      component={Link}/>
  }

}