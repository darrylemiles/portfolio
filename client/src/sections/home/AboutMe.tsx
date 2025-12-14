import { Box, Button, Grid, Typography } from '@mui/material'

import React from 'react'
import MainCard from '../../components/MainCard'
import { AimOutlined } from '@ant-design/icons'

const AboutMe: React.FC = () => {
  return (
    <MainCard>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component='img'
              src='https://zerochad.github.io/Portfolio-Zero/assets/frog-C_nYFjMY.jpg'
              alt='Profile Picture'
              sx={{
                width: { xs: '20%', md: '100%' },
                marginInline: 'auto',
                borderRadius: 2.5,
                aspectRatio: '1/1',
                objectFit: 'cover',

              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 9 }}>
          <Box>
            <Typography variant='h5'>
              Darryle Miles Bacay
            </Typography>

            <Typography variant='body2'>
              I am a full stack web developer.
            </Typography>

            <Button
              variant='contained'
              size='large'
              color='primary'
              fullWidth
              startIcon={<AimOutlined />}
              sx={{
                borderRadius: 3,
                mt: 2
              }}
            >
              Hire Me
            </Button>
          </Box>
        </Grid>
      </Grid>
    </MainCard>
  )
}

export default AboutMe