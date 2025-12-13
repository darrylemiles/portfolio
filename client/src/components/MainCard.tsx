import { Box } from '@mui/material'
import React from 'react'

interface MainCardProps {
  children: React.ReactNode;
};

const MainCard: React.FC<MainCardProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: theme => theme.palette.background.paper,
        border: '1px solid rgba(255, 255, 255, .08)',
        borderRadius: 2.5,
        p: 3,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
      }}
    >
      {children}
    </Box>
  );
};

export default MainCard