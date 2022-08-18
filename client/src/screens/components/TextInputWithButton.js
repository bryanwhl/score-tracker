import React from 'react'
import {
  Button,
  Stack,
  TextField,
} from '@mui/material';

const TextInputWithButton = ({ label }) => {
  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      sx={{ pb: 2 }}
    >
      <TextField id="outlined-basic" label={label} variant="outlined" sx={{ width: "100%" }} multiline />
      <Button variant="contained" component="label">
        Submit
      </Button>
    </Stack>
  )
}

export default TextInputWithButton