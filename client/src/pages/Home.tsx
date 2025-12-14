import { Container, Grid } from '@mui/material'

import React from 'react'

// components
import Divider from '../components/Divider'

// sections
import AboutMe from '../sections/home/AboutMe'
import Services from '../sections/home/Services'
import Connect from '../sections/home/Connect'
import Tools from '../sections/home/Tools'
import Contact from '../sections/home/Contact'

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 4 }}>
          <AboutMe />
          <Divider />

          <Services />
          <Divider />

          <Services />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Tools />
          <Divider />
          <Connect />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Connect />
          <Divider />
          <Contact />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home