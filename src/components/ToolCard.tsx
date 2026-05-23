import { Stack, Typography } from '@mui/material'
import React from 'react'

interface ToolCardProps {
  icon: React.ReactNode,
  title: string,
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, title }) => {
  return (
    <Stack
      spacing={2}
      direction='row'
      alignItems='center'
      sx={theme => ({
        borderRadius: 3,
        background: theme.palette.mode === 'light' ? theme.palette.background.default : '#171C27',
        color: theme.palette.text.primary,
        p: 1,
        border: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          background: theme.palette.mode === 'light' ? theme.palette.background.paper : '#1E2530',
          border: `1px solid ${theme.palette.primary.main}`,
          transform: 'translateY(-2px) rotate(5deg)',
          boxShadow: '0 4px 12px rgba(57, 86, 204, 0.2)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `repeating-linear-gradient(
              45deg,
              rgba(57, 86, 204, 0.1) 0px,
              rgba(57, 86, 204, 0.1) 1px,
              transparent 1px,
              transparent 8px
            )`,
            pointerEvents: 'none',
          }
        }
      })}
    >
      <React.Fragment>{icon}</React.Fragment>
      <Typography variant='body1' color="inherit"> {title} </Typography>
    </Stack >
  )
}

export default ToolCard