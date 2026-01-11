import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Bounce, ToastContainer } from 'react-toastify'

import React from 'react'
import router from './routes/routes'
import appTheme from './themes/theme'

// fonts
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

// styles
import './styles/main.css'
import './styles/toast.css'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
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
        theme="light"
        limit={3}
        toastClassName="c-toast__frame"
        progressClassName="c-toast__progress"
        transition={Bounce}
      />
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App