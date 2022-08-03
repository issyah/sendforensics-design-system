import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Button,
  Divider,
  Typography,
  Box,
  styled,
  Stack
} from '@mui/material';
import Logo from './Logo';
import Image from '../src/Image';
import Link from '../src/Link';
export default function Footer(props) {
  const FooterList = styled(List)({
    '& .MuiButtonBase-root' : {
      paddingLeft: 0,
      paddingRight:0,
      '&:hover' : {
        textDecoration: 'underline',
        background: 'none',
      }
    }
  })
  const footerLinks = [
    {
      header: 'Product',
      links : [
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Integrations',
          href: '/integration-list'
        },
        {
          label: 'Start for free',
          href: '/pricing'
        }
      ]
    },
    {
      header: 'Features',
      links:[
        {
          label: 'Spam Analyzer',
          href: '/features/spam-analyzer'
        },
        {
          label: 'Reputation Dashboard',
          href: '/features/reputation-dashboard'
        },
        {
          label: 'DMARC Monitoring',
          href: '/features/dmarc-monitoring'
        },
        {
          label: 'Blacklist Checker',
          href: '/features/blacklist-checker'
        },
        {
          label: 'Inbox Placement',
          href: '/features/inbox-placement'
        },
        {
          label: 'Client Previews',
          href: '/features/client-previews'
        }
      ]
    },
    {
      header: 'Company',
      links:[
        {
          label: 'About Us',
          href: '/about-us'
        },
        {
          label: 'Articles',
          href: '/articles',
        }
      ]
    }
  ]
  return (
    <Box
      sx={{
        py: 5,
      }}
    >
      <Container
        maxWidth='lg'
      >
        <Grid
          container
          alignItems={'flex-start'}
        >
          <Grid 
            item
            md={3}
            xs={6}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              }
            }}
          >
            <Logo noText/>
          </Grid>
          {footerLinks.map((item, key) => 
            <Grid
              item
              key={key}
              md={3}
              xs={6}
            >
              <FooterList
                dense
              >
                <ListItem>
                  <ListItemText>
                    <Typography
                      variant='body1'
                      sx={{
                        fontWeight: '700'
                      }}
                    >
                      {item.header}
                    </Typography>
                  </ListItemText>
                </ListItem>
                {item.links.map((link, index) => 
                  <ListItem
                    key={index}
                    sx={{
                      py: 0,
                    }}
                  >
                    <ListItemButton
                      component={Link}
                      href={link.href}
                    >
                      <ListItemText primary={link.label}/>
                    </ListItemButton>
                  </ListItem>
                )}
              </FooterList>
            </Grid>
          )}
        </Grid>
        <Divider/>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          sx={{
            py:2
          }}
        >
          <Grid
            item
          >
            <Stack 
              spacing={2}
              direction='row'>
              <Button
                component={Link}
                variant='text'
                color='inherit'
                href='/design-system'
              >
                Terms of Service
              </Button>
              <Button
                component={Link}
                variant='text'
                color='inherit'
                href='/'
              >
                Privacy Policy
              </Button>
              <Button
                component={Link}
                variant='text'
                color='inherit'
                href='/'
              >
                Contact Us
              </Button>
            </Stack>
          </Grid>
          <Grid item>
            <Stack
              spacing={2}
              direction='row'
            >
              <Link
                href='/'
              >
                <Box
                  sx={{
                    height: 20,
                    width: 20,
                    color: 'grey.800'                    
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                </Box>
              </Link>
              <Link
                href='/'
              >
                <Box
                  sx={{
                    height:20,
                    width:20,
                    color: 'grey.800'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='currentColor'><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                </Box>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}