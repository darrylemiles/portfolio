import React from 'react'
import { Box } from '@mui/material'

type DividerProps = {
  thickness?: number
  my?: number
  sx?: import('@mui/material').SxProps<import('@mui/material').Theme>
}

const Divider: React.FC<DividerProps> = ({
  my = 2,
  sx,
}) => {
  return (
    <Box
      role="separator"
      aria-hidden
      sx={{
        width: '100%',
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.1) 35%, rgba(59, 130, 246, 0.6) 50%, rgba(59, 130, 246, 0.1) 65%, transparent 100%)',
        boxShadow: '0 0 8px rgba(59, 130, 246, 0.2)',
        my,
        ...sx,
      }}
    />
  )
}

export default Divider