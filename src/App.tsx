import { RouterProvider } from 'react-router-dom'
import { Box, CssBaseline, GlobalStyles, IconButton, ThemeProvider, Tooltip } from '@mui/material'
import { Bounce, ToastContainer } from 'react-toastify'

import React from 'react'
import router from './routes/routes'
import createAppTheme from './themes/theme'
import type { PaletteMode } from '@mui/material/styles'
import { FaMoon, FaSun } from 'react-icons/fa'

// fonts
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import AOS from "aos";
import "aos/dist/aos.css";

// styles
import './styles/main.css'
import './styles/toast.css'

const App: React.FC = () => {
  const getInitialMode = (): PaletteMode => {
    const storedMode = window.localStorage.getItem('portfolio-color-mode')

    if (storedMode === 'light' || storedMode === 'dark') {
      return storedMode
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const [mode, setMode] = React.useState<PaletteMode>(getInitialMode)

  const toggleColorMode = () => {
    setMode(currentMode => (currentMode === 'dark' ? 'light' : 'dark'))
  }

  const appTheme = React.useMemo(() => createAppTheme(mode), [mode])

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });

  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('portfolio-color-mode', mode)
  }, [mode])

  React.useEffect(() => {
    const url = new URL(window.location.href);

    const trackingParams = [
      "brid",
      "fbclid",
      "gclid",
      "utm_source",
      "utm_medium",
      "utm_campaign",
    ];

    trackingParams.forEach((param) => {
      url.searchParams.delete(param);
    });

    window.history.replaceState({}, "", url.pathname);
  }, []);

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles
        styles={{
          ':root': {
            colorScheme: mode,
          },
          html: {
            colorScheme: mode,
            background: appTheme.palette.background.default,
          },
          body: {
            background: appTheme.palette.background.default,
            color: appTheme.palette.text.primary,
            transition: 'background 200ms ease, color 200ms ease',
          },
          '#root': {
            minHeight: '100%',
          },
        }}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={mode}
        limit={3}
        toastClassName="c-toast__frame"
        progressClassName="c-toast__progress"
        transition={Bounce}
      />
      <CssBaseline enableColorScheme />
      <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} arrow>
        <Box
          sx={{
            position: 'fixed',
            top: { xs: 12, sm: 16 },
            right: { xs: 12, sm: 16 },
            zIndex: theme => theme.zIndex.tooltip + 1,
          }}
        >
          <IconButton
            onClick={toggleColorMode}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
              color: 'text.primary',
              backdropFilter: 'blur(16px)',
              boxShadow: theme => theme.shadows[4],
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {mode === 'dark' ? <FaSun /> : <FaMoon />}
          </IconButton>
        </Box>
      </Tooltip>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App