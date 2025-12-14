import { Box, Typography } from '@mui/material';
import React from 'react'

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <Box
      sx={{
        background: theme => theme.palette.background.default,
        color: '#8ec5ff',
        border: '1px solid #8ec5ff',
        borderRadius: 2,
        px: 2,
        py: 0.5,
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        fontSize: '0.875rem',
      }}
    >
      <Typography variant='body2'>
        {text}
      </Typography>
    </Box>
  )
}

export default Chip