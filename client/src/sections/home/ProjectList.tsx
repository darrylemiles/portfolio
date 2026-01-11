import { Box, Grid } from '@mui/material'

import React from 'react'
import TitleTag from '../../components/TitleTag'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects.json'

const ProjectList: React.FC = () => {
  const assetModules = import.meta.glob('../../assets/images/**/*.{png,jpg,jpeg,webp,gif,svg}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>

  const resolveImage = (basePath: string): string => {
    if (!basePath) return ''
    const matchKey = Object.keys(assetModules).find((k) => k.startsWith(basePath))
    return matchKey ? assetModules[matchKey] : ''
  }

  return (
    <Box>
      <TitleTag title='My Projects' subtitle='Explore innovative web solutions and applications built with modern frameworks and best practices.' />

      <Grid container spacing={2} columns={12}>
        {projects?.map((proj) => {
          const thumbnailImage = proj.images.find(img => img.isThumbnail);

          return (
            <Grid key={proj.title} size={{ md: 4, xs: 12 }}>
              <ProjectCard
                title={proj.title}
                description={proj.summary}
                thumbnail={thumbnailImage ? resolveImage(thumbnailImage.thumbnail) : ''}
                tags={proj.techStack}
              />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default ProjectList