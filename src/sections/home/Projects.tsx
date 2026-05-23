import { BranchesOutlined } from '@ant-design/icons'
import { Box, Button, Stack, Typography } from '@mui/material'
import { LiaHelicopterSolid } from 'react-icons/lia'

import React from 'react'
import MainCard from '../../components/MainCard'
import Chip from '../../components/Chip'

interface ProjectsProps {
  onViewAllProjects?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAllProjects }) => {
  return (
    <MainCard
      title={{
        text: 'Projects',
        icon: <BranchesOutlined style={{ fontSize: 24, color: `#AB6DE7` }} />
      }}
      caption='Portfolio overview | what I build and how I work'
    >
      <Stack direction='column' spacing={2} marginBlock={1}>
        <Box>
          <Typography variant='subtitle2' sx={{ mb: 1 }}>Core technologies</Typography>
          <Stack direction='row' gap={1} flexWrap='wrap'>
            {['React', 'TypeScript', 'NodeJS', 'MongoDB', 'SQL', 'MUI', 'Websockets'].map((t) => (
              <Chip key={t} text={t} small />
            ))}
          </Stack>
        </Box>
      </Stack>

      <Button
        fullWidth
        variant='contained'
        size='medium'
        startIcon={<LiaHelicopterSolid size={24} />}
        sx={theme => ({
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : '#132040',
          borderRadius: 4,
          border: `1px solid ${theme.palette.primary.dark}`,
          color: theme.palette.mode === 'light' ? '#FFFFFF' : '#8EC5FF',
          mt: 2
        })}
        onClick={onViewAllProjects}
      >
        View All Projects
      </Button>
    </MainCard>
  )
}

export default Projects