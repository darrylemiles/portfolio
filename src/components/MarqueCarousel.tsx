import { Box } from '@mui/material'
import React from 'react'
import Marquee from 'react-fast-marquee'

const classes = [
  'marquee-text marquee-text--blue',
  'marquee-text marquee-text--green',
  'marquee-text marquee-text--purple',
  'marquee-text marquee-text--yellow',
  'marquee-text marquee-text--red',
];

const renderCarousel = (items: string[]) => {
  return items.map((text, idx) => (
    <Box component='span' key={idx} className={classes[idx % classes.length]} style={{ marginInline: 24 }}>
      {text}
    </Box>
  ));
}

const MarqueCarousel: React.FC<{ items: string[] }> = ({ items = [] }) => {

  return (
    <Box
      sx={theme => ({
        bgcolor: theme.palette.mode === 'light' ? theme.palette.background.paper : '#0a0e1a',
        py: 5,
      })}>
      <Marquee pauseOnHover gradient gradientWidth={60} speed={70} autoFill>
        {renderCarousel(items)}
      </Marquee>
    </Box>
  )
}

export default MarqueCarousel