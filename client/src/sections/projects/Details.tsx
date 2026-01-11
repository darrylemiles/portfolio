import { useParams, useNavigate } from 'react-router-dom'
import { Box, Typography, Button, Grid, Card, CardMedia, Container } from '@mui/material'
import { ArrowLeftOutlined } from '@ant-design/icons'

import React from 'react'
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

  const project = projects.find(proj => {
    const urlTitle = proj.title.toLowerCase().replace(/\s+/g, '-')
    return decodeURIComponent(title || '').toLowerCase() === urlTitle
  })

  console.log(title);

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
        </Box>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {project.images.map((image, index) => (
            <Grid key={index} size={{ md: 4, xs: 12 }}>
              <Card>
                <CardMedia
                  component="img"
                  image={resolveImage(image.original)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  sx={{ height: 250, objectFit: 'cover' }}
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
    </Container>
  )
}

export default Details