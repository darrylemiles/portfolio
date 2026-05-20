import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

interface MainCardProps {
  children: React.ReactNode,
  background?: string,
  title?: {
    text: string,
    icon?: React.ReactNode,
  },
  caption?: string,
  sx?: import('@mui/material').SxProps<import('@mui/material').Theme>
};

const MainCard: React.FC<MainCardProps> = ({ children, title, background, caption, sx }) => {
  return (
    <Box
      sx={{
        background: theme => background || theme.palette.background.paper,
        border: '1px solid rgba(255, 255, 255, .08)',
        borderRadius: 2.5,
        p: 3,
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
        width: '100%',
        ...sx
      }}
    >
      <Box>
        {title && (
          <Stack direction="row" alignItems="center" spacing={2} mb={2}>
            {title.icon}

            <Typography variant='h5'>
              {title.text}
            </Typography>
          </Stack>
        )}

        {caption && (
          <Typography variant='caption' color="text.secondary" mb={2} display="block">
            {caption}
          </Typography>
        )}
      </Box>

      {children}
    </Box>
  );
};

export default MainCard