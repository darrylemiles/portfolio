import { Box, Typography } from '@mui/material';
import React from 'react'

interface ChipProps {
  text: string;
}

const Chip: React.FC<ChipProps> = ({ text }) => {
  return (
    <Box
      sx={theme => ({
        background: `#151B2A`,
        color: theme.palette.secondary.main,
        border: '1px solid #1A2E56',
        borderRadius: 2,
        px: 2,
        py: 0.5,
        display: 'inline-flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        fontSize: '0.875rem',
      })}
    >
      <Typography variant='body2'>
        {text}
      </Typography>
    </Box>
  )
}

export default Chip