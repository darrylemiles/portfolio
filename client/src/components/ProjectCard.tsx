import { Box, Stack, Typography } from '@mui/material'

import React from 'react'
import MainCard from './MainCard'
import Chip from './Chip'

interface ProjectCardProps {
  thumbnail: string,
  title: string,
  description: string,
  tags: string[],
  classification: 'Work' | 'OJT' | 'Capstone',
  onClick?: () => void
}

const getClassificationColor = (classification: 'Work' | 'OJT' | 'Capstone') => {
  switch (classification) {
    case 'Work':
      return { bg: '#1976D2', text: '#FFFFFF' }
    case 'OJT':
      return { bg: '#2E7D32', text: '#FFFFFF' }
    case 'Capstone':
      return { bg: '#7B1FA2', text: '#FFFFFF' }
    default:
      return { bg: '#1976D2', text: '#FFFFFF' }
  }
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  thumbnail,
  title,
  description,
  tags,
  classification,
  onClick
}) => {
  return (
    <Box onClick={onClick}>
      <MainCard
        sx={{
          height: '100%',
          minHeight: '450px',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s ease-in-out',
          transformOrigin: 'bottom',
          position: 'relative',
          ':hover': {
            borderColor: 'primary.main',
            transform: 'scale(1.02)',
            cursor: 'pointer',
          }
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: getClassificationColor(classification).bg,
            color: getClassificationColor(classification).text,
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            fontWeight: 600,
            zIndex: 1,
            letterSpacing: '0.5px'
          }}
        >
          {classification}
        </Box>
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
    </Box>
  )
}

export default ProjectCard