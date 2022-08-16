import React from 'react'
import {
	CssBaseline,
	Typography,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const HomePage = () => {
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <CssBaseline />

      <SportsSoccerIcon />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
          Score Tracker
      </Typography>
    </div>
  )
}

export default HomePage