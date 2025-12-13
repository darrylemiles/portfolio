import { Container, Grid } from '@mui/material'

import React from 'react'
import AboutMe from '../sections/home/AboutMe'

const Home: React.FC = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 4 }}>
          <AboutMe />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home