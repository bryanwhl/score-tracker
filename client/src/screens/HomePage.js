import React from 'react'
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
} from '@mui/material';

const HomePage = () => {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Stack
            sx={{ pt: 4 }}
            direction="column"
            spacing={2}
            justifyContent="center"
          >
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <TextField id="outlined-basic" label="Team Information" variant="outlined" sx={{ width: "80%" }}/>
              <Button variant="contained" component="label">
                Submit
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default HomePage