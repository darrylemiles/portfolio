import { Box, Typography } from '@mui/material'
import React from 'react'

interface TitleTagProps {
  title: string,
  subtitle?: string,
}

const TitleTag: React.FC<TitleTagProps> = ({ title, subtitle }) => {
  return (
    <Box marginBlock={2}>
      <Typography variant='h2' textAlign='center' gutterBottom>
        {title}
      </Typography>

      {subtitle && (
        <Typography variant='body1' color='secondary' textAlign='center'>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}

export default TitleTag