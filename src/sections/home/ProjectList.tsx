import { Box, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import React, { useEffect, useMemo, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { getProjects, groupProjectsByClassification } from '../../utils/projects'

const ProjectList: React.FC = () => {
  const navigate = useNavigate()
  const projectListRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const projects = useMemo(() => getProjects(), [])
  const projectGroups = useMemo(() => groupProjectsByClassification(projects), [projects])

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo === 'projects' && projectListRef.current) {
      setTimeout(() => {
        projectListRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    }
  }, [location.state])

  return (
    <Box ref={projectListRef} id="projects">
      <Stack spacing={{ xs: 6, md: 9 }}>
        {projectGroups.map((group) => (
          <Box key={group.classification}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
              gap={1.5}
              sx={{ pb: 2.5, borderBottom: '1px solid', borderColor: 'divider' }}
            >
              <Typography variant="h3" component="h3">
                {group.classification}
              </Typography>
              <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: '0.14em' }}>
                {group.projects.length} {group.projects.length === 1 ? 'Project' : 'Projects'}
              </Typography>
            </Stack>

            {group.projects.map((project, groupIndex) => {
              const globalIndex = projects.findIndex((item) => item.slug === project.slug)

              return (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={globalIndex >= 0 ? globalIndex : groupIndex}
                  onOpen={(slug) => navigate(`/projects/${slug}`)}
                />
              )
            })}
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default ProjectList
