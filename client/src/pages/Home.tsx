import { Box, Container, Grid } from '@mui/material'

import React from 'react'

// components
import Divider from '../components/Divider'

// sections
import AboutMe from '../sections/home/AboutMe'
import Services from '../sections/home/Services'
import Connect from '../sections/home/Connect'
import Tools from '../sections/home/Tools'
import Contact from '../sections/home/Contact'
import Projects from '../sections/home/Projects'
import GithubProfile from '../sections/home/GithubProfile'
import MarqueCarousel from '../sections/home/MarqueCarousel'

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid container spacing={2} columns={12}>
          <Grid size={{ xs: 12, md: 4 }}>
            <AboutMe />
            <Divider />

            <Services />
            <Divider />

            <Projects />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Tools />
            <Divider />
            <Connect />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <GithubProfile />
            <Divider />
            {/* <Contact /> */}
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: 3 }}>
        <MarqueCarousel />
      </Box>
    </React.Fragment>
  )
}

export default Home