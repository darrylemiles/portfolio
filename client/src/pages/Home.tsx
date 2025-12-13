import { Grid } from '@mui/material'

import React from 'react'
import AboutMe from '../sections/home/AboutMe'
import Container from '../components/Container'

const Home: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 4 }}>
          <AboutMe />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home