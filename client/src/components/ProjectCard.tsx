import { Box, Stack, Typography } from '@mui/material'

import React from 'react'
import MainCard from './MainCard'
import Chip from './Chip'

interface ProjectCardProps {
  thumbnail: string,
  title: string,
  description: string,
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  tags
}) => {
  return (
    <MainCard
      sx={{
        height: '100%',
        minHeight: '450px',
        display: 'flex',
        flexDirection: 'column',
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
        src={thumbnail}
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
        {title}
      </Typography>

      <Typography variant='body2' color="text.secondary" gutterBottom sx={{
        flex: 1,
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical'
      }}>
        {description}
      </Typography>

      <Stack direction="row" gap={1} flexWrap="wrap" marginBlockStart={3}>
        {tags.map((tag) => (
          <Chip
            key={tag}
            text={tag}
          />
        ))}
      </Stack>
    </MainCard>
  )
}

export default ProjectCard