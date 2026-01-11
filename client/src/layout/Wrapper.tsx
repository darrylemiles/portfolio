import { Box } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';

interface WrapperProps {
  children: React.ReactNode;
  hasNavbar?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, hasNavbar = false }) => {
  return (
    <Box component='main' sx={{ background: theme => theme.palette.background.default, minHeight: '100dvh', py: 3 }}>
      {hasNavbar && (
        <Navbar />
      )}

      {children}
    </Box>
  )
}

export default Wrapper