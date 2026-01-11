import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Grid, Card, CardMedia, Container, Dialog, DialogContent, IconButton, useTheme, useMediaQuery } from '@mui/material'
import { ArrowLeftOutlined, LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons'

import ReactMarkdown from 'react-markdown'
import projects from '../../data/projects.json'
import MainCard from '../../components/MainCard'
import ConvertDate from '../../components/ConvertDate'
import Chip from '../../components/Chip'

const assetModules = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default'
}) as Record<string, string>

const resolveImage = (basePath: string): string => {
  if (!basePath) return ''
  const matchKey = Object.keys(assetModules).find((k) => k.startsWith(basePath))
  return matchKey ? assetModules[matchKey] : ''
}

const Details: React.FC = () => {
  const { title } = useParams<{ title: string }>()
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [imageViewerOpen, setImageViewerOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = projects.find(proj => {
    const urlTitle = proj.title.toLowerCase().replace(/\s+/g, '-')
    return decodeURIComponent(title || '').toLowerCase() === urlTitle
  })

  const currentProjectIndex = projects.findIndex(proj => {
    const urlTitle = proj.title.toLowerCase().replace(/\s+/g, '-')
    return decodeURIComponent(title || '').toLowerCase() === urlTitle
  })

  if (!project) {
    return (
      <Box sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" gutterBottom>
          Project Not Found
        </Typography>
        <Button startIcon={<ArrowLeftOutlined />} onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </Box>
    )
  }

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index)
    setImageViewerOpen(true)
  }

  const handleCloseViewer = () => {
    setImageViewerOpen(false)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      handlePrevImage()
    } else if (event.key === 'ArrowRight') {
      handleNextImage()
    } else if (event.key === 'Escape') {
      handleCloseViewer()
    }
  }

  const handlePrevProject = () => {
    const prevIndex = currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1
    const prevProject = projects[prevIndex]
    const urlTitle = encodeURIComponent(prevProject.title.toLowerCase().replace(/\s+/g, '-'))
    navigate(`/projects/${urlTitle}`)
  }

  const handleNextProject = () => {
    const nextIndex = currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1
    const nextProject = projects[nextIndex]
    const urlTitle = encodeURIComponent(nextProject.title.toLowerCase().replace(/\s+/g, '-'))
    navigate(`/projects/${urlTitle}`)
  }

  return (
    <Container>
      <MainCard>
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowLeftOutlined />}
            onClick={() => navigate('/')}
            sx={{ mb: 2 }}
          >
            Back to Projects
          </Button>

          <Typography variant="h3" component="h1" gutterBottom>
            {project.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            <ConvertDate dateString={project.startDate} /> - <ConvertDate dateString={project.endDate} />
          </Typography>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            {project.techStack.map((tech) => (
              <Chip key={tech} text={tech} />
            ))}
          </Box>

          {projects.length > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Button
                startIcon={<LeftOutlined />}
                onClick={handlePrevProject}
                variant="outlined"
                size="small"
                sx={{ minWidth: 120 }}
              >
                Previous
              </Button>

              <Typography variant="body2" color="text.secondary">
                {currentProjectIndex + 1} of {projects.length}
              </Typography>

              <Button
                endIcon={<RightOutlined />}
                onClick={handleNextProject}
                variant="outlined"
                size="small"
                sx={{ minWidth: 120 }}
              >
                Next
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {project.images.map((image, index) => (
            <Grid key={index} size={{ md: 4, xs: 12 }}>
              <Card sx={{ cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.02)' } }}>
                <CardMedia
                  component="img"
                  image={resolveImage(image.original)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  sx={{ height: 250, objectFit: 'cover' }}
                  onClick={() => handleImageClick(index)}
                />
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{
          '& h2': { color: 'primary.main', mt: 3, mb: 2 },
          '& h3': { color: 'text.primary', mt: 2, mb: 1 },
          '& p': { mb: 2, lineHeight: 1.7 },
          '& ul': { mb: 2 },
          '& li': { mb: 1 },
          '& strong': { color: 'primary.light' },
          '& em': { color: 'secondary.main' },
          '& code': {
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.9em'
          },
          '& blockquote': {
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            pl: 2,
            ml: 0,
            fontStyle: 'italic',
            color: 'text.secondary'
          }
        }}>
          <ReactMarkdown>{project.description}</ReactMarkdown>
        </Box>
      </MainCard>

      <Dialog
        open={imageViewerOpen}
        onClose={handleCloseViewer}
        maxWidth="lg"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            margin: isMobile ? 1 : 2,
          }
        }}
        onKeyDown={handleKeyDown}
      >
        <DialogContent sx={{ position: 'relative', p: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <IconButton
            onClick={handleCloseViewer}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 2,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              }
            }}
          >
            <CloseOutlined />
          </IconButton>

          {project.images.length > 1 && (
            <IconButton
              onClick={handlePrevImage}
              sx={{
                position: 'absolute',
                left: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              <LeftOutlined />
            </IconButton>
          )}

          <Box
            component="img"
            src={resolveImage(project.images[currentImageIndex]?.original)}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            sx={{
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain',
              display: 'block'
            }}
          />

          {project.images.length > 1 && (
            <IconButton
              onClick={handleNextImage}
              sx={{
                position: 'absolute',
                right: 16,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
              }}
            >
              <RightOutlined />
            </IconButton>
          )}

          {project.images.length > 1 && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                px: 2,
                py: 1,
                borderRadius: 2,
                typography: 'body2'
              }}
            >
              {currentImageIndex + 1} / {project.images.length}
            </Box>
          )}

          {project.images.length > 1 && !isMobile && (
            <Box
              sx={{
                position: 'absolute',
                bottom: 60,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1,
                maxWidth: '80%',
                overflowX: 'auto',
                pb: 1
              }}
            >
              {project.images.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={resolveImage(image.thumbnail)}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    width: 60,
                    height: 40,
                    objectFit: 'cover',
                    cursor: 'pointer',
                    borderRadius: 1,
                    border: currentImageIndex === index ? '2px solid white' : '2px solid transparent',
                    opacity: currentImageIndex === index ? 1 : 0.6,
                    transition: 'all 0.2s',
                    '&:hover': {
                      opacity: 1,
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              ))}
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  )
}

export default Details