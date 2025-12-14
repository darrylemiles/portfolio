import { Box, Button, Stack, Typography } from '@mui/material'
import { AimOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import React from 'react'
import MainCard from '../../components/MainCard'

const Connect: React.FC = () => {
  return (
    <MainCard background='#15182A'>
      <Box marginBlock={3}>
        <Typography variant='h2' fontSize={50} textAlign='center' marginBottom={2}> 👥 </Typography>
        <Typography variant='h5' textAlign='center' marginBottom={2}> Let's Build Something Great Together </Typography>
        <Typography variant='body2' textAlign='center' marginBottom={2} color='text.secondary'> I help bring ideas to life through clean code, modern UI, and powerful web experiences. Let's make yours stand out. </Typography>
      </Box>

      <Stack direction='row' flexWrap='wrap' justifyContent='center' gap={2} marginBlock={3}>
        <Button
          variant='contained'
          color='primary'
          size='large'
          startIcon={<AimOutlined />}
        >
          Hire Me
        </Button>

        <Button
          variant='outlined'
          color='secondary'
          size='large'
          startIcon={<LinkedinOutlined />}
        >
          LinkedIn
        </Button>


        <Button
          variant='outlined'
          color='secondary'
          size='large'
          startIcon={<GithubOutlined />}
        >
          Github
        </Button>
      </Stack>

      <Box marginBlock={3}>
        <Typography variant='body2' color='text.secondary' sx={{ fontSize: 11, textAlign: 'center' }}> Made by Darryle Miles Bacay </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ fontSize: 11, textAlign: 'center' }}> © {new Date().getFullYear()} All rights reserved </Typography>
      </Box>
    </MainCard >
  )
}

export default Connect