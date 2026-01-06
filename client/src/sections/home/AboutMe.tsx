import { Box, Grid, Stack, Typography } from '@mui/material'
import { IoGlobeOutline } from 'react-icons/io5'
import { FlagOutlined, UserOutlined } from '@ant-design/icons'
import { RiTimeZoneLine } from 'react-icons/ri'
import { BiBasketball } from 'react-icons/bi'
import { SiValorant } from 'react-icons/si'

import React from 'react'
import MainCard from '../../components/MainCard'
import DownloadCvButton from '../../components/DownloadCvButton'
import Chip from '../../components/Chip'

const AboutMe: React.FC = () => {
  const date = new Date();

  const year = date.getFullYear();
  const birthYear = 2003;

  const age = year - birthYear;

  return (
    <MainCard>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 3 }}>
          <Box sx={{ display: 'flex' }}>
            <Box
              component='img'
              src='https://avatars.githubusercontent.com/u/137563011?s=400&u=71da270fe08fe3b6ab43e481bb8c92d870214f13&v=4'
              alt='Profile Picture'
              sx={{
                width: { xs: '20%', md: '100%' },
                marginInline: 'auto',
                borderRadius: 3,
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

            <Typography variant='body2' color='primary'>
              I am a full stack web developer.
            </Typography>

            <Stack direction='row' marginBlock={2} flexWrap='wrap'>
              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text='Tagalog / English' icon={<IoGlobeOutline />} />
              </Box>

              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text='Philippines' icon={<FlagOutlined />} />
              </Box>

              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text='UTC+08:00' icon={<RiTimeZoneLine />} />
              </Box>

              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text='Basketball' icon={<BiBasketball />} />
              </Box>

              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text='Valorant' icon={<SiValorant />} />
              </Box>

              <Box sx={{ mr: 1, mb: 1 }}>
                <Chip small text={`${age} y/o`} icon={<UserOutlined />} />
              </Box>
            </Stack>

            <DownloadCvButton />
          </Box>
        </Grid>
      </Grid>
    </MainCard >
  )
}

export default AboutMe