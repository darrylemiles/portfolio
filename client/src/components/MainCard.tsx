import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface MainCardProps {
  children: React.ReactNode,
  title?: {
    text: string,
    icon?: React.ReactNode,
  }
};

const MainCard: React.FC<MainCardProps> = ({ children, title }) => {
  return (
    <Box
      sx={{
        background: theme => theme.palette.background.paper,
        border: '1px solid rgba(255, 255, 255, .08)',
        borderRadius: 2.5,
        p: 3,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        width: '100%',
      }}
    >
      {title && (
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Box>
            {title.icon}
          </Box>

          <Typography variant='h5'>
            {title.text}
          </Typography>
        </Stack>
      )}

      {children}
    </Box>
  );
};

export default MainCard