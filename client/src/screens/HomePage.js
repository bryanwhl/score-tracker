import React from 'react'
import {
  Box,
  Container,
  Stack,
} from '@mui/material';
import TextInputWithButton from './components/TextInputWithButton';

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
            <TextInputWithButton 
              label="Team Information"
            />
          </Stack>
        </Container>
      </Box>
    </div>
  )
}

export default HomePage