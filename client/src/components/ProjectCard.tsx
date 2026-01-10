import { Box, Stack, Typography } from '@mui/material'

import React from 'react'
import MainCard from './MainCard'
import Chip from './Chip'

const ProjectCard: React.FC = () => {
  return (
    <MainCard
      sx={{
        transition: 'all 0.3s ease-in-out',
        transformOrigin: 'bottom',
        ':hover': {
          borderColor: 'primary.main',
          transform: 'scale(1.02)',
          cursor: 'pointer',
        }
      }}
    >
      <Box
        component='img'
        src='https://jc-react-portfolio-gold.vercel.app/static/media/President.2e507d06816ab8720e47.png'
        sx={{
          width: '100%',
          borderRadius: 5,
          height: '200px',
          objectFit: 'cover',
          objectPosition: 'top',
          py: 1
        }}
      />

      <Typography variant='h5' gutterBottom>
        Digital Document Management System
      </Typography>

      <Typography variant='body2' color="text.secondary" gutterBottom>
        Full-stack web application with Ollama Ai
      </Typography>

      <Stack direction="row" gap={1} flexWrap="wrap" marginBlockStart={3}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Chip
            text={index % 2 === 0 ? 'React' : 'Node JS'}
          />
        ))}
      </Stack>
    </MainCard>
  )
}

export default ProjectCard