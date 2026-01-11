import { Box } from '@mui/material';
import React from 'react'
import Navbar from './Navbar';
import ScrollTop from '../components/ScrollTop';

interface WrapperProps {
  children: React.ReactNode;
  hasNavbar?: boolean;
}

const Wrapper: React.FC<WrapperProps> = ({ children, hasNavbar = false }) => {
  return (
    <React.Fragment>
      <ScrollTop />
      <Box component='main' sx={{ background: theme => theme.palette.background.default, minHeight: '100dvh', py: 3 }}>
        {hasNavbar && (
          <Navbar />
        )}

        {children}
      </Box>
    </React.Fragment>
  )
}

export default Wrapper