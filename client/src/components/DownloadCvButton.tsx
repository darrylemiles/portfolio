import { Button } from '@mui/material'
import { FaCloudDownloadAlt } from 'react-icons/fa'

import React from 'react'
import { useNavigate } from 'react-router-dom'

const DownloadCvButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant='contained'
      size='large'
      color='primary'
      fullWidth
      startIcon={<FaCloudDownloadAlt />}
      sx={{
        mt: 2
      }}
      onClick={() => navigate('/cv')}
    >
      View / Download CV
    </Button>
  )
}

export default DownloadCvButton