import { Button, Stack } from '@mui/material'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import React from 'react'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ xs: 'stretch', sm: 'center' }}
      justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
      spacing={1}
      paddingInline={2}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretch', sm: 'center' }}
        spacing={1}
        sx={{ flex: 1 }}
      >
        <Button
          variant="outlined"
          color="inherit"
          startIcon={<FaHome />}
          onClick={() => navigate('/')}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          Home
        </Button>
      </Stack>
    </Stack>
  )
}

export default Navbar