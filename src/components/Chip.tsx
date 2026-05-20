import { Box, Typography } from '@mui/material';
import React from 'react'

interface ChipProps {
  text: string;
  icon?: React.ReactNode;
  small?: boolean;
}

const Chip: React.FC<ChipProps> = ({ text, icon, small = false }) => {
  return (
    <Box
      sx={theme => ({
        background: `#151B2A`,
        color: theme.palette.secondary.main,
        border: '1px solid #1A2E56',
        borderRadius: 2,
        px: 2,
        py: small ? 0.25 : 0.5,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        whiteSpace: 'nowrap',
        fontSize: small ? '0.75rem' : '0.875rem',
      })}
    >
      {icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-6px)',
              },
              '60%': {
                transform: 'translateY(-3px)',
              },
            },
          }}
        >
          {icon}
        </Box>
      )}
      <Typography variant='body2' sx={{ fontSize: small ? '0.67rem' : '0.875rem' }}>
        {text}
      </Typography>
    </Box>
  )
}

export default Chip