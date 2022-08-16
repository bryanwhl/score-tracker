import React from 'react'
import {
  Button,
  Stack,
  TextField,
} from '@mui/material';

const TextInputWithButton = ({ label }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" sx={{ width: "80%" }}/>
      <Button variant="contained" component="label">
        Submit
      </Button>
    </Stack>
  )
}

export default TextInputWithButton