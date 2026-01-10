import { Box, Grid } from '@mui/material'
import React from 'react'
import TitleTag from '../../components/TitleTag'
import MainCard from '../../components/MainCard'
import ProjectCard from '../../components/ProjectCard'

const ProjectList: React.FC = () => {
  return (
    <Box>
      <TitleTag title='My Projects' subtitle='Showcase of my recent work and creations' />

      <Grid container spacing={2} columns={12}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Grid size={{ md: 4, xs: 12 }}>
            <ProjectCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ProjectList