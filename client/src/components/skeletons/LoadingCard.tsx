import { Box, Skeleton } from '@mui/material'
import React from 'react'

const LoadingCard: React.FC = () => {
  return (
    <Box sx={{ p: 3, borderRadius: 2, border: '1px solid #e0e0e0' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Skeleton variant="circular" width={24} height={24} sx={{ mr: 1 }} />
        <Skeleton variant="text" width={150} height={32} />
      </Box>
      <Skeleton variant="text" width={250} height={20} sx={{ mb: 3 }} />

      <Box sx={{ mb: 4 }}>
        <Skeleton variant="text" width={80} height={28} sx={{ mx: 'auto', mb: 1 }} />
        <Skeleton variant="rectangular" width="100%" height={200} />
      </Box>
    </Box>
  )
}

export default LoadingCard