import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@mui/material'
import { backgroundGradient } from '../themes'

type WrapperProps = {
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100%', background: backgroundGradient, backgroundAttachment: 'fixed' }}>
      <Navbar />

      <Box minHeight="80dvh">
        {children}
      </Box>

      <Footer />
    </Box>
  )
}

export default Wrapper