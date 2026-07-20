import { createTheme } from '@mui/material/styles';
import type { PaletteMode } from '@mui/material/styles';
import typography from './typography';

const getBackground = (mode: PaletteMode) => {
  if (mode === 'light') {
    return `linear-gradient(135deg, rgba(232, 220, 200, 0.72) 0%, rgba(246, 241, 231, 0) 34%),
      linear-gradient(180deg, #F7F2E8 0%, #F3EEE4 46%, #E9EEE5 100%)`;
  }

  return `linear-gradient(135deg, rgba(58, 82, 74, 0.42) 0%, rgba(14, 16, 15, 0) 36%),
    linear-gradient(180deg, #151613 0%, #0F120F 46%, #121812 100%)`;
};

export const createAppTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: { main: '#B85C47', dark: '#8E3F31', light: '#D8836D' },
    secondary: { main: mode === 'light' ? '#32675E' : '#9BC7BA' },
    background: {
      default: getBackground(mode),
      paper: mode === 'light' ? 'rgba(255, 252, 245, 0.90)' : 'rgba(26, 29, 25, 0.92)'
    },
    text: {
      primary: mode === 'light' ? '#1C1E19' : '#F5F1E8',
      secondary: mode === 'light' ? '#5C6256' : '#C7C1B6'
    },
    divider: mode === 'light' ? 'rgba(50, 58, 45, 0.16)' : 'rgba(245, 241, 232, 0.14)',
    action: {
      hover: mode === 'light' ? 'rgba(184, 92, 71, 0.08)' : 'rgba(216, 131, 109, 0.12)',
      selected: mode === 'light' ? 'rgba(50, 103, 94, 0.12)' : 'rgba(155, 199, 186, 0.14)',
    },
  },
  shape: {
    borderRadius: 3,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: 'none',
          transition: 'transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: mode === 'light'
              ? '0 12px 28px rgba(28, 30, 25, 0.12)'
              : '0 12px 32px rgba(0, 0, 0, 0.32)',
          },
        },
      },
    },
  },
  typography,
});

export default createAppTheme;
