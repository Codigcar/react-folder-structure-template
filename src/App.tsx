import React, { useState } from 'react'
import './App.scss'
import { HomeView } from './views/HomeView';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, Switch } from '@material-ui/core'

import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';
import { AppRouter } from './routes/AppRouter';

export const App = () => {

  const [modeDark, setModeDark] = useState(false);

  const theme = createTheme({
    palette: {
      type: modeDark? "dark" : "light",
      primary:{
        main: '#FFCA28'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Switch 
        onClick={() => setModeDark(!modeDark) }
      />

      <AppRouter />
      
    </ThemeProvider>
  )
}
