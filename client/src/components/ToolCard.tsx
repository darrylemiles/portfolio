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
      sx={{
        borderRadius: 3,
        background: `#171C27`,
        p: 1,
        border: '1px solid #222831',
      }}
    >
      <React.Fragment>{icon}</React.Fragment>
      <Typography variant='body1'> {title} </Typography>
    </Stack >
  )
}

export default ToolCard