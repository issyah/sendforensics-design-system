import { createTheme } from '@mui/material/styles';
import { primary, secondary, white, success, error,info } from './colors';
import { grey } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: primary,
    background:{
      // default: '#fafafa'
    },
    secondary:secondary,
    white: white,
    neutral:{
      main: '#fafafa',
      white: '#FFFFFF',
    },
    grey:grey
  },
  shape:{
    borderRadius:8
  },
  typography:{
    fontSize: 16,
    fontFamily: [
      'Source Sans Pro',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1:{
      fontWeight: 700
    },
    h2:{
      fontWeight: 700
    },
    h3:{
      fontWeight: 700,
    },
    h4:{
      fontWeight: 700,
    },
    h5:{
      fontWeight: 700,
    },
    h6:{
      fontWeight: 700,
    }
  },
  components:{
    MuiButtonBase:{
      defaultProps:{
        disableRipple: true,
      },
      styleOverrides:{
       root:{
         borderRadius:8,
       }
      }
    },
    MuiButtonGroup:{
      defaultProps:{
        disableRipple: true,
        disableElevation: true,
      }
    },
    MuiToggleButton:{
      styleOverrides:{
        root:{
          textTransform: 'none'
        }
      }
    },
    MuiButton:{
      defaultProps:{
        disableElevation:true,
      },
      styleOverrides:{
        root:{
          textTransform: 'none',
          fontWeight:400,
          borderRadius: 8,
        }
      },
      variants:[
        // new variants, softer button look 
        {
          props: {variant: 'soft'},
          style: {
            backgroundColor: primary.softLight,
            color: primary.softContrastText,
            '&:hover':{
              backgroundColor: primary.softDark,
            }
          } 
        },
        {
          props: {variant: 'soft', color: 'secondary'},
          style:{
            backgroundColor: secondary.softLight,
            color: secondary.softContrastText,
            '&:hover': {
              backgroundColor: secondary.softDark
            }
          }
        },
        {
          props: {variant: 'soft', color: 'success'},
          style: {
            backgroundColor: success.softLight,
            color: success.softContrastText,
            '&:hover':{
              backgroundColor: success.softDark
            }
          }
        },
        {
          props: {variant: 'soft', color: 'error'},
          style: {
            backgroundColor: error.softLight,
            color: error.softContrastText,
            '&:hover':{
              backgroundColor: error.softDark
            }
          }
        },
        {
          props: {variant: 'soft', color: 'info'},
          style: {
            backgroundColor: info.softLight,
            color: info.softContrastText,
            '&:hover':{
              backgroundColor: info.softDark
            }
          }
        },
        // default white 
        {
          props:{variant: 'default' , color:'white'},
          style:{
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.87)',
            borderWidth: 1,
            borderColor: grey[300],
            borderStyle: 'solid'
          }
        },
        {
          props:{variant:'default', color: 'black'},
          style:{
            backgroundColor: 'rgba(0,0,0,0.87)',
            color: '#fff',
            '&:hover':{
              backgroundColor: 'rgba(0,0,0,1)',
              color: '#fff'
            }
          }
        }
      ]
    },
    MuiAppBar:{
      styleOverrides:{
        root:{
          boxShadow:"none",
          borderBottom: '2px solid #E7EBF0'
        }
      }
    }
  }
});

export default theme;
