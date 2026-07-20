import React, { useMemo, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import {
  ArrowLeftOutlined,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  GithubOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
import { motion, useReducedMotion } from 'framer-motion'

import ReactMarkdown from 'react-markdown'
import Chip from '../../components/Chip'
import { getProjectBySlug, getProjects } from '../../utils/projects'

const MotionBox = motion.create(Box)

const Details: React.FC = () => {
  const { title } = useParams<{ title: string }>()
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const reduceMotion = useReducedMotion()
  const projects = useMemo(() => getProjects(), [])
  const project = useMemo(() => getProjectBySlug(title), [title])

  const [imageViewerOpen, setImageViewerOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentProjectIndex = project ? projects.findIndex((item) => item.slug === project.slug) : -1

  if (!project) {
    return (
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', py: { xs: 10, md: 16 } }}>
          <Typography variant="overline" color="primary">404</Typography>
          <Typography variant="h2" component="h1" gutterBottom>
            Project Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            The project URL does not match an entry in the portfolio project data.
          </Typography>
          <Button startIcon={<ArrowLeftOutlined />} onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}>
            Back to Work
          </Button>
        </Box>
      </Container>
    )
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setImageViewerOpen(true)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.imageSources.length - 1 : prev - 1,
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.imageSources.length - 1 ? 0 : prev + 1,
    )
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') handlePrevImage()
    if (event.key === 'ArrowRight') handleNextImage()
    if (event.key === 'Escape') setImageViewerOpen(false)
  }

  const navigateProject = (direction: 'previous' | 'next') => {
    const fallbackIndex = currentProjectIndex < 0 ? 0 : currentProjectIndex
    const targetIndex = direction === 'previous'
      ? (fallbackIndex === 0 ? projects.length - 1 : fallbackIndex - 1)
      : (fallbackIndex === projects.length - 1 ? 0 : fallbackIndex + 1)

    navigate(`/projects/${projects[targetIndex].slug}`)
  }

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: { xs: 3, md: 5 } }}>
        <Button
          startIcon={<ArrowLeftOutlined />}
          onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          sx={{ mb: { xs: 4, md: 7 } }}
        >
          Back to Work
        </Button>

        <MotionBox
          initial={reduceMotion ? false : { opacity: 0, y: 36 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) 360px' },
              gap: { xs: 4, md: 7 },
              alignItems: 'end',
              pb: { xs: 5, md: 8 },
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Stack spacing={2.5}>
              <Stack direction="row" gap={1} flexWrap="wrap">
                <Chip text={project.classification} small />
                <Chip text={project.period} small />
                {project.status && <Chip text={project.status} small />}
              </Stack>
              <Typography variant="h1" component="h1" sx={{ maxWidth: 1020 }}>
                {project.title}
              </Typography>
              <Typography variant="h5" component="p" color="text.secondary" sx={{ maxWidth: 760, fontWeight: 500 }}>
                {project.summary}
              </Typography>
            </Stack>

            <Stack spacing={2} alignItems={{ xs: 'stretch', md: 'flex-end' }}>
              <Stack direction="row" gap={1} flexWrap="wrap" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                {project.techStack.map((tech) => (
                  <Chip key={tech} text={tech} small />
                ))}
              </Stack>
              <Stack direction="row" gap={1} flexWrap="wrap" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}>
                {project.liveUrl && (
                  <Button component="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="outlined" startIcon={<GlobalOutlined />}>
                    Live
                  </Button>
                )}
                {project.githubUrl && (
                  <Button component="a" href={project.githubUrl} target="_blank" rel="noreferrer" variant="outlined" startIcon={<GithubOutlined />}>
                    Code
                  </Button>
                )}
              </Stack>
            </Stack>
          </Box>

          <Grid container spacing={2} sx={{ py: { xs: 5, md: 8 } }}>
            {project.imageSources.map((imageSrc, index) => (
              <Grid
                key={`${project.slug}-${project.images[index]?.original ?? imageSrc}`}
                size={{ md: index === 0 ? 8 : 4, xs: 12 }}
              >
                <Box
                  component="button"
                  type="button"
                  onClick={() => handleImageClick(index)}
                  aria-label={`Open ${project.title} screenshot ${index + 1}`}
                  sx={{
                    width: '100%',
                    p: 0,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    bgcolor: 'background.paper',
                    boxShadow: theme => theme.palette.mode === 'light'
                      ? '0 20px 54px rgba(30, 33, 27, 0.12)'
                      : '0 20px 64px rgba(0, 0, 0, 0.34)',
                  }}
                >
                  <Box
                    component="img"
                    src={imageSrc}
                    alt={`${project.title} screenshot ${index + 1}`}
                    loading={index > 1 ? 'lazy' : 'eager'}
                    sx={{
                      width: '100%',
                      height: { xs: 260, md: index === 0 ? 520 : 250 },
                      display: 'block',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      transition: 'transform 500ms ease',
                      '&:hover': {
                        transform: 'scale(1.025)',
                      },
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              gridTemplateColumns: { xs: '1fr', md: '280px minmax(0, 780px)' },
              gap: { xs: 3, md: 8 },
              alignItems: 'start',
              pb: { xs: 7, md: 10 },
            }}
          >
            <Box sx={{
              '& h2': { color: 'primary.main', mt: 0, mb: 2 },
              '& h3': { color: 'text.primary', mt: 3, mb: 1 },
              '& p': { mb: 2, lineHeight: 1.8 },
              '& ul': { mb: 2, pl: 3 },
              '& li': { mb: 1 },
              '& strong': { color: 'text.primary' },
              '& code': {
                backgroundColor: theme => theme.palette.mode === 'light' ? 'rgba(30, 33, 27, 0.08)' : 'rgba(255,255,255,0.1)',
                padding: '2px 6px',
                borderRadius: '4px',
                fontSize: '0.9em',
              },
            }}>
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </Box>
          </Box>

          {projects.length > 1 && (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
              sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}
            >
              <Button startIcon={<LeftOutlined />} onClick={() => navigateProject('previous')} variant="outlined">
                Previous
              </Button>
              <Typography variant="body2" color="text.secondary">
                {currentProjectIndex + 1} of {projects.length}
              </Typography>
              <Button endIcon={<RightOutlined />} onClick={() => navigateProject('next')} variant="outlined">
                Next
              </Button>
            </Stack>
          )}
        </MotionBox>
      </Box>

      <Dialog
        open={imageViewerOpen}
        onClose={() => setImageViewerOpen(false)}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            margin: isMobile ? 1 : 2,
          },
        }}
        onKeyDown={handleKeyDown}
      >
        <DialogContent sx={{ position: 'relative', p: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            onClick={() => setImageViewerOpen(false)}
            aria-label="Close image viewer"
            sx={{ position: 'absolute', top: 16, right: 16, color: 'white', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }}
          >
            <CloseOutlined />
          </IconButton>

          {project.imageSources.length > 1 && (
            <IconButton
              onClick={handlePrevImage}
              aria-label="Previous screenshot"
              sx={{ position: 'absolute', left: 16, color: 'white', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }}
            >
              <LeftOutlined />
            </IconButton>
          )}

          <Box
            component="img"
            src={project.imageSources[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            sx={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
          />

          {project.imageSources.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              aria-label="Next screenshot"
              sx={{ position: 'absolute', right: 16, color: 'white', bgcolor: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }}
            >
              <RightOutlined />
            </IconButton>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Details
