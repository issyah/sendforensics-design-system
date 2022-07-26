import {Container, Grid, Typography, TextField, Card, CardContent, Paper} from "@mui/material"
export default function Signin(){

  return (
    <Paper
    >
      <Container
        maxWidth="lg"

      >
        <Grid 
          justifyContent={'center'}
          alignContent={'center'}
          container
          spacing={2}
          sx={{
            height: '100vh',
          }}
        >
          <Grid
            item 
            md={6}
          >
            <Typography
              variant={'h5'}
              align="center"
              sx={{
                mb: 2,
                color: 'primary.main'
              }}
              
            >
              Log into SendForensics
            </Typography>
            <Card
              margin="normal"
            >
              <CardContent>
                <TextField
                  margin="normal"
                  label={'Email'}
                  variant={'outlined'}
                  fullWidth
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )

}