import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material/styles';
import typography from './typography';

const getBackground = (mode: PaletteMode) => {
  if (mode === 'light') {
    return `radial-gradient(1000px 600px at 70% 10%, rgba(76, 120, 255, 0.16) 0%, rgba(245, 247, 255, 0) 60%),
      radial-gradient(800px 500px at 20% 35%, rgba(99, 102, 241, 0.12) 0%, rgba(245, 247, 255, 0) 60%),
      radial-gradient(600px 400px at 85% 70%, rgba(14, 165, 233, 0.10) 0%, rgba(245, 247, 255, 0) 60%),
      linear-gradient(180deg, #F8FAFF 0%, #EEF4FF 45%, #EAF0F8 100%)`;
  }

  return `radial-gradient(1000px 600px at 70% 10%, rgba(72, 108, 195, 0.35) 0%, rgba(18, 33, 63, 0.0) 60%),
    radial-gradient(800px 500px at 20% 35%, rgba(121, 74, 196, 0.30) 0%, rgba(18, 33, 63, 0.0) 60%),
    radial-gradient(600px 400px at 85% 70%, rgba(36, 184, 201, 0.25) 0%, rgba(18, 33, 63, 0.0) 60%),
    linear-gradient(180deg, #0D1B2A 0%, #0A1623 40%, #0A1826 100%)`;
};

export const createAppTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: { main: '#4C78FF', dark: '#3956CC', light: '#709EFF' },
    secondary: { main: mode === 'light' ? '#4B5563' : '#8EB8C8' },
    background: {
      default: getBackground(mode),
      paper: mode === 'light' ? 'rgba(255, 255, 255, 0.86)' : 'rgba(18, 25, 38, 0.90)'
    },
    text: {
      primary: mode === 'light' ? '#0F172A' : '#E6F0FF',
      secondary: mode === 'light' ? '#4B5563' : '#A9B7D0'
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

export default createAppTheme;