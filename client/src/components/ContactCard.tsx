import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

interface ContactCardProps {
  icon: React.ReactNode,
  label: string,
  value: string,
  onCopy?: () => void,
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, value, onCopy }) => {
  return (
    <Box
      sx={{
        mb: 2,
        p: 1.5,
        borderRadius: 3,
        background: `#171C27`,
        border: `1px solid #252E40`,
        cursor: onCopy ? 'pointer' : 'default',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          border: onCopy ? `1px solid #3956CC` : `1px solid #252E40`,
          background: onCopy ? `#1A1F2B` : `#171C27`,
        }
      }}
      onClick={onCopy}
    >
      <Grid container spacing={1} columns={12} alignItems='center'>
        <Grid size={{ xs: 2 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid #1D4387`,
              borderRadius: 3,
              p: 1,
              background: `#162951`
            }}
          >
            {icon}
          </Box>
        </Grid>

        <Grid size={{ xs: 6 }}>
          <Typography color='secondary' variant='caption' fontSize={10}> {label} </Typography>
          <Typography variant='body1' fontSize={11}> {value} </Typography>
        </Grid>

        <Grid size={{ xs: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography color='secondary' variant='caption' fontSize={10}>
              Click to Copy
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactCard