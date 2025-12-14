import React from 'react'
import MainCard from '../../components/MainCard'
import { SettingOutlined } from '@ant-design/icons'
import AnimateButton from '../../components/extended/AnimateButton'

const Services: React.FC = () => {
  return (
    <MainCard title={{ text: 'Services', icon: <AnimateButton type='rotate'> <SettingOutlined style={{ fontSize: 23 }} /> </AnimateButton> }}>
      Services
    </MainCard >
  )
}

export default Services