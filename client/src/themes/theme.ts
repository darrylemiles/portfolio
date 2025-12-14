import { createTheme } from '@mui/material/styles';
import typography from './typography';

export const backgroundGradient = `radial-gradient(1000px 600px at 70% 10%, rgba(72, 108, 195, 0.35) 0%, rgba(18, 33, 63, 0.0) 60%),
  radial-gradient(800px 500px at 20% 35%, rgba(121, 74, 196, 0.30) 0%, rgba(18, 33, 63, 0.0) 60%),
  radial-gradient(600px 400px at 85% 70%, rgba(36, 184, 201, 0.25) 0%, rgba(18, 33, 63, 0.0) 60%),
  linear-gradient(180deg, #0D1B2A 0%, #0A1623 40%, #0A1826 100%)`;

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#4C78FF', dark: '#3956CC', light: '#709EFF' },
    secondary: { main: '#8EB8C8' },
    background: {
      default: backgroundGradient,
      paper: 'rgba(26, 25, 25, 0.95)'
    },
    text: {
      primary: '#E6F0FF',
      secondary: '#A9B7D0'
    }
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
      },
    },
  },
  typography,
});

export default appTheme;