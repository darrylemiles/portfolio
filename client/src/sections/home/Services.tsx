import React from 'react'
import MainCard from '../../components/MainCard'
import { SettingOutlined } from '@ant-design/icons'
import AnimateButton from '../../components/extended/AnimateButton'
import Chip from '../../components/Chip'
import { Box } from '@mui/material'

const Services: React.FC = () => {
  const services = [
    'Full Stack Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'SEO Optimization'
  ]

  return (
    <MainCard title={{ text: 'Services', icon: <AnimateButton type='rotate'> <SettingOutlined style={{ fontSize: 23 }} /> </AnimateButton> }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {services.map((service, index) => (
          <Chip text={service} key={index} />
        ))}
      </Box>
    </MainCard >
  )
}

export default Services