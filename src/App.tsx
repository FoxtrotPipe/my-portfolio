import './App.css'
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material/styles';

import ResponsiveAppBar from './components/navs/ResponsiveAppBar'
import Wrapper from './components/Wrapper';
import AnimationLayout from './components/AnimationLayout';
import Footer from './components/navs/Footer';

const theme = createTheme({
  typography: {
    fontFamily: 'monospace'
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#c586c0',
    },
  },
});

function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar/>
      <Wrapper>
        <AnimationLayout>
          <Outlet/>
        </AnimationLayout>
      </Wrapper>
      <Footer/>
    </ThemeProvider>
  )
}

export default App
