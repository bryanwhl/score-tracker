import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";
import HomePage from "./screens/HomePage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
	CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <SportsSoccerIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Score Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
