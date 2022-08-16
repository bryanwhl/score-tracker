import {
	CssBaseline,
	Typography,
} from '@mui/material';

function App() {
  return (
	<div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
	  <CssBaseline />
		<Typography variant="h4" align="center" component="h1" gutterBottom>
			Score Tracker
		</Typography>
	</div>
  );
}

export default App;
