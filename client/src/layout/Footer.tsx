import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box sx={{ background: theme => theme.palette.primary.dark, py: 4 }}>
      <Container>
        <Grid container spacing={2} columns={12} alignItems='center' justifyContent='space-between'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h2' fontSize={64}>
              Contact
            </Typography>
            <Typography variant='h5'>
              Feel free to reach out!
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant='h2' fontSize={64}>
              Contact
            </Typography>
            <Typography variant='h5'>
              Feel free to reach out!
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant='caption'>
            © {new Date().getFullYear()} Darryle Miles
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer