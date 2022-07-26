import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Public from '../layout/Public';
export default function About() {
  return (
    <Public>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          <Button variant="contained" color='primary' component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Public>
  );
}