import React from 'react'
import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
} from '@mui/material';
import ScoreList from './components/ScoreList';
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
            <Grid item xs={12} sm={12} md={12} lg={8} display="flex" justifyContent="center" alignItems="center">
              <Card sx={{ minWidth: "80%" }}>
                <ScoreList />
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