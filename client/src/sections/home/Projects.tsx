import { BranchesOutlined } from '@ant-design/icons'
import { Box, Button, Stack } from '@mui/material'
import { LiaHelicopterSolid } from 'react-icons/lia'

import React from 'react'
import MainCard from '../../components/MainCard'

const Projects: React.FC = () => {
  return (
    <MainCard
      title={{
        text: 'Projects',
        icon: <BranchesOutlined style={{ fontSize: 24, color: `#AB6DE7` }} />
      }}
      caption='Here are some of the projects I have worked on'
    >
      <Stack direction='row' alignItems='center' spacing={2} marginBlock={1}>
        <Box>
          <Box
            component='img'
            src='https://zerochad.github.io/Portfolio-Zero/assets/MGBDashboard-Bzia5j1w.png'
            sx={{
              objectFit: 'cover',
              height: 100,
              width: '100%'
            }}
          />
        </Box>

        <Box>
          <Box
            component='img'
            src='https://zerochad.github.io/Portfolio-Zero/assets/Capstone-Cb8dC8JI.jpg'
            sx={{
              objectFit: 'cover',
              height: 100,
              width: '100%'
            }}
          />
        </Box>
      </Stack>

      <Button
        fullWidth
        variant='contained'
        size='medium'
        startIcon={<LiaHelicopterSolid size={32} />}
        sx={{
          backgroundColor: '#132040',
          borderRadius: 4,
          border: `1px solid #1B3B7A`,
          color: `#8EC5FF`
        }}
      >
        View All Projects
      </Button>
    </MainCard>
  )
}

export default Projects