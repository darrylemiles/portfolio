import { Box } from '@mui/material'
import React from 'react'

interface ContainerProps extends React.ComponentProps<typeof Box> {
  children: React.ReactNode,
}

const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 10, lg: 15 } }} {...props}>
      {children}
    </Box>
  )
}

export default Container