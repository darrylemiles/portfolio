import { Button } from '@mui/material'
import { FaCloudDownloadAlt } from 'react-icons/fa'

import React from 'react'

const DownloadCvButton: React.FC = () => {
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
    >
      Donwload CV
    </Button>
  )
}

export default DownloadCvButton