import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import TextInputWithButton from './components/TextInputWithButton';

const HomePage = () => {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: "80vw" }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container display="flex" justifyContent="center" alignItems="center">
            <Grid item md={12} lg={8} display="flex" justifyContent="center" alignItems="center">
              <Card sx={{ minWidth: "80%" }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    benevelont
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid container item md={12} lg={4} display="flex" justifyContent="center">
              <Stack
                sx={{ pt: 4, minWidth: "80%" }}
                direction="column"
                justifyContent="center"
              >
                <TextInputWithButton 
                  label="Team Information"
                />
                <TextInputWithButton 
                  label="Match Results"
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default HomePage