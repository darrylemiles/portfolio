import { Grid } from '@mui/material'

import React from 'react'

// components
import Container from '../components/Container'
import Divider from '../components/Divider'

// sections
import AboutMe from '../sections/home/AboutMe'
import Services from '../sections/home/Services'

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
          <AboutMe />
          <Divider />

          <Services />
          <Divider />

          <Services />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AboutMe />
          <Divider />

          <Services />
          <Divider />

          <Services />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home