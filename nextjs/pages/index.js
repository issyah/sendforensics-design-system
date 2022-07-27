import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { Paper } from '@mui/material';
import Public from '../layout/Public';
export default function Index() {
  return (
    <Public>
       <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Hello world
          </Typography>
          {/* <ProTip /> */}
          {/* <Copyright /> */}
        </Box>
      </Container>     
    </Public>
  );
}
