import { Box } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import React, { useEffect, useMemo, useRef } from 'react'
import ProjectCard from '../../components/ProjectCard'
import { getProjects } from '../../utils/projects'

const ProjectList: React.FC = () => {
  const navigate = useNavigate()
  const projectListRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const projects = useMemo(() => getProjects(), [])

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
      {projects.map((project, index) => (
        <ProjectCard
          key={project.slug}
          project={project}
          index={index}
          onOpen={(slug) => navigate(`/projects/${slug}`)}
        />
      ))}
    </Box>
  )
}

export default ProjectList
