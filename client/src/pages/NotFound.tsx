import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'
import { RiErrorWarningLine } from 'react-icons/ri'

import React from 'react'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/')
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(1000px 600px at 70% 10%, rgba(72, 108, 195, 0.35) 0%, rgba(18, 33, 63, 0.0) 60%),
          radial-gradient(800px 500px at 20% 35%, rgba(121, 74, 196, 0.30) 0%, rgba(18, 33, 63, 0.0) 60%),
          radial-gradient(600px 400px at 85% 70%, rgba(36, 184, 201, 0.25) 0%, rgba(18, 33, 63, 0.0) 60%),
          linear-gradient(180deg, #0D1B2A 0%, #0A1623 40%, #0A1826 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Stack
        spacing={4}
        alignItems="center"
        textAlign="center"
        sx={{
          zIndex: 1,
          px: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 160,
            height: 160,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4C78FF 0%, #3956CC 100%)',
            boxShadow: '0 8px 32px rgba(76, 120, 255, 0.3)',
            mb: 2,
          }}
        >
          <RiErrorWarningLine size={80} color="#fff" />
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '6rem', md: '8rem' },
            fontWeight: 700,
            background: 'linear-gradient(135deg, #4C78FF 0%, #23D1D5 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
            textShadow: '0 0 40px rgba(76, 120, 255, 0.5)',
          }}
        >
          404
        </Typography>

        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 600,
            mb: 1,
          }}
        >
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
            maxWidth: 500,
            mb: 2,
          }}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={3}
          sx={{ mt: 4 }}
        >
          <Button
            variant="contained"
            startIcon={<FiHome size={20} />}
            onClick={handleGoHome}
            sx={{
              px: 4,
              py: 2,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #4C78FF 0%, #3956CC 100%)',
              boxShadow: '0 4px 16px rgba(76, 120, 255, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #3956CC 0%, #2A3F99 100%)',
                boxShadow: '0 6px 20px rgba(76, 120, 255, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Go Home
          </Button>

          <Button
            variant="outlined"
            startIcon={<FiArrowLeft size={20} />}
            onClick={handleGoBack}
            sx={{
              px: 4,
              py: 2,
              borderRadius: 3,
              textTransform: 'none',
              fontSize: '1.1rem',
              borderColor: '#4C78FF',
              color: '#4C78FF',
              borderWidth: 2,
              '&:hover': {
                borderColor: '#3956CC',
                background: 'rgba(76, 120, 255, 0.1)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 16px rgba(76, 120, 255, 0.2)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Go Back
          </Button>
        </Stack>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            mt: 4,
            fontSize: '1rem',
            opacity: 0.7,
          }}
        >
          Error Code: 404 • Page Not Found
        </Typography>
      </Stack>
    </Box>
  )
}

export default NotFound