import { Box } from '@mui/material';
import React from 'react'

type WrapperProps = {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box sx={{ background: theme => theme.palette.background.default, minHeight: '100dvh' }}>
      {children}
    </Box>
  )
}

export default Wrapper