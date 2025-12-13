import { Box } from '@mui/material';
import React from 'react'

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box sx={{ background: theme => theme.palette.background.default, minHeight: '100dvh', py: 3 }}>
      {children}
    </Box>
  )
}

export default Wrapper