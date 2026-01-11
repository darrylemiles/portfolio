import { Box, Container, Grid } from '@mui/material'

import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// components
import Divider from '../components/Divider'

// sections
import AboutMe from '../sections/home/AboutMe'
import Services from '../sections/home/Services'
import Connect from '../sections/home/Connect'
import Tools from '../sections/home/Tools'
import Projects from '../sections/home/Projects'
import GithubProfile from '../sections/home/GithubProfile'
import MarqueCarousel from '../sections/home/MarqueCarousel'
import ProjectList from '../sections/home/ProjectList'

const Home: React.FC = () => {
  const projectListRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const handleScrollToProjects = () => {
    if (projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo === 'projects' && projectListRef.current) {
      setTimeout(() => {
        projectListRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }, [location.state]);

  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 4 }}>
            <AboutMe />
            <Divider />
            <Services />
            <Divider />
            {/* <Contact /> */}
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Tools />
            <Divider />
            <Connect />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <GithubProfile />
            <Divider />
            <Projects onViewAllProjects={handleScrollToProjects} />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ my: 15 }}>
        <MarqueCarousel />
      </Box>

      <Container>
        <Box ref={projectListRef} id="projects">
          <ProjectList />
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Home