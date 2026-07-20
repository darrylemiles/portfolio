import { Box, Button, Stack, Typography } from '@mui/material'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRightOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons'

import React from 'react'
import Chip from './Chip'
import type { ProjectViewModel } from '../types/project'

interface ProjectCardProps {
  project: ProjectViewModel
  index: number
  onOpen: (slug: string) => void
}

const MotionBox = motion.create(Box)

const getProjectTone = (classification: string) => {
  switch (classification.toLowerCase()) {
    case 'ojt':
      return '#6F9C6C'
    case 'capstone':
      return '#D2A24C'
    default:
      return '#E16A54'
  }
}

export const ProjectMedia: React.FC<{ project: ProjectViewModel; index: number }> = ({ project, index }) => {
  const accent = getProjectTone(project.classification)

  if (!project.thumbnailSrc) {
    return (
      <Box
        aria-label={`${project.title} visual placeholder`}
        sx={{
          minHeight: { xs: 260, md: 440 },
          borderRadius: 2,
          bgcolor: theme => theme.palette.mode === 'light' ? 'rgba(184, 92, 71, 0.10)' : 'rgba(155, 199, 186, 0.10)',
          border: '1px solid',
          borderColor: 'divider',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Typography variant="h3" component="p" sx={{ maxWidth: 420, textAlign: 'center' }}>
          {project.title}
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        border: '1px solid',
        borderColor: 'divider',
        minHeight: { xs: 260, md: 440 },
        position: 'relative',
        bgcolor: 'background.paper',
        boxShadow: theme => theme.palette.mode === 'light'
          ? '0 24px 64px rgba(28, 30, 25, 0.15)'
          : '0 24px 74px rgba(0, 0, 0, 0.38)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(${index % 2 ? 225 : 135}deg, ${accent}55, transparent 38%)`,
          zIndex: 1,
          pointerEvents: 'none',
          mixBlendMode: 'multiply',
        },
      }}
    >
      <Box
        component="img"
        src={project.thumbnailSrc}
        alt={`${project.title} interface preview`}
        loading={index > 1 ? 'lazy' : 'eager'}
        sx={{
          width: '100%',
          height: { xs: 260, md: 440 },
          display: 'block',
          objectFit: 'cover',
          objectPosition: 'top',
          transition: 'transform 650ms cubic-bezier(.2,.8,.2,1)',
          '.project-card:hover &': {
            transform: 'scale(1.045)',
          },
        }}
      />
    </Box>
  )
}

export const ProjectMeta: React.FC<{ project: ProjectViewModel }> = ({ project }) => (
  <Stack direction="row" gap={1} flexWrap="wrap" alignItems="center">
    <Chip text={project.classification} small />
    <Chip text={project.period} small />
    {project.status && <Chip text={project.status} small />}
  </Stack>
)

export const ProjectLinks: React.FC<{ project: ProjectViewModel; onOpen: (slug: string) => void }> = ({ project, onOpen }) => (
  <Stack direction="row" gap={1} flexWrap="wrap">
    <Button
      variant="contained"
      endIcon={<ArrowRightOutlined />}
      onClick={() => onOpen(project.slug)}
      aria-label={`Open case study for ${project.title}`}
    >
      View More
    </Button>
    {project.liveUrl && (
      <Button
        component="a"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        variant="outlined"
        startIcon={<GlobalOutlined />}
      >
        Live
      </Button>
    )}
    {project.githubUrl && (
      <Button
        component="a"
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer"
        variant="outlined"
        startIcon={<GithubOutlined />}
      >
        Code
      </Button>
    )}
  </Stack>
)

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpen }) => {
  const reduceMotion = useReducedMotion()
  const isReversed = index % 2 === 1

  return (
    <MotionBox
      className="project-card"
      initial={reduceMotion ? false : { opacity: 0, y: 56 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.08fr) minmax(320px, 0.92fr)' },
        gap: { xs: 3, md: 5 },
        alignItems: 'center',
        py: { xs: 5, md: 8 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ order: { xs: 1, md: isReversed ? 2 : 1 } }}>
        <ProjectMedia project={project} index={index} />
      </Box>

      <Stack spacing={2.5} sx={{ order: { xs: 2, md: isReversed ? 1 : 2 } }}>
        <ProjectMeta project={project} />
        <Box>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              mb: 1.5,
              transition: 'transform 320ms ease, color 320ms ease',
              '.project-card:hover &': {
                color: 'primary.main',
                transform: { xs: 'none', md: 'translateX(10px)' },
              },
            }}
          >
            {project.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
            {project.summary}
          </Typography>
        </Box>

        <Stack direction="row" gap={1} flexWrap="wrap">
          {project.techStack.slice(0, 6).map((tech) => (
            <Chip key={tech} text={tech} small />
          ))}
        </Stack>

        <ProjectLinks project={project} onOpen={onOpen} />
      </Stack>
    </MotionBox>
  )
}

export default ProjectCard
