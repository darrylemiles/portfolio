import { Grid } from '@mui/material'
import { FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { DiMongodb, DiMysql } from 'react-icons/di'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BsBootstrap } from 'react-icons/bs'
import { SiMui, SiPostman } from 'react-icons/si'
import { FiCpu } from 'react-icons/fi'

import React from 'react'
import MainCard from '../../components/MainCard'
import ToolCard from '../../components/ToolCard'

const tools = [
  {
    icon: <FaReact size={24} color='#61DAFB' />,
    title: 'React JS',
  },
  {
    icon: <FaReact size={24} color='#2F76C4' />,
    title: 'React TS',
  },
  {
    icon: <FaHtml5 size={24} color='#F05C24' />,
    title: 'HTML',
  },
  {
    icon: <IoLogoJavascript size={24} color='#FFDF20' />,
    title: 'JavaScript',
  },
  {
    icon: <FaNodeJs size={24} color='#0E7D4D' />,
    title: 'Node JS',
  },
  {
    icon: <DiMongodb size={24} color='#0E7D4D' />,
    title: 'Mongo DB',
  },
  {
    icon: <DiMysql size={24} color='#253E5E' />,
    title: 'MySQL',
  },
  {
    icon: <RiTailwindCssFill size={24} color='#3BCAFF' />,
    title: 'Tailwind',
  },
  {
    icon: <BsBootstrap size={24} color='#8810FC' />,
    title: 'Bootstrap',
  },
  {
    icon: <SiMui size={24} color='#0685FF' />,
    title: 'Material UI',
  },
  {
    icon: <SiPostman size={24} color='#FF6C37' />,
    title: 'Postman',
  },
  {
    icon: <FaGitAlt size={24} color='#D94935' />,
    title: 'Git & GitHub',
  },
]

const Tools: React.FC = () => {
  return (
    <MainCard
      title={{
        text: 'Tools & Technologies',
        icon: <FiCpu size={24} />
      }}
      caption="Frameworks, languages, tools, and libraries I use"
    >
      <Grid container spacing={2} columns={12}>
        {tools.map((tool, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <ToolCard icon={tool.icon} title={tool.title} />
          </Grid>
        ))}
      </Grid>
    </MainCard >
  )
}

export default Tools