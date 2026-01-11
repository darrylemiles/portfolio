import { Button, Stack, Tooltip } from '@mui/material'
import { FaDownload, FaExternalLinkAlt, FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

import React from 'react'
import cvPdf from '../assets/Darryle Miles CV.pdf';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const downloadCv = () => {
    const a = document.createElement('a');
    a.href = cvPdf;
    a.download = 'Darryle Miles CV.pdf';
    a.click();
  };

  const openInNewTab = () => {
    window.open(cvPdf, '_blank', 'noopener,noreferrer');
  };

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
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        sx={{ width: { xs: '100%', sm: 'auto' } }}
      >
        <Tooltip title="Download PDF">
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaDownload />}
            onClick={downloadCv}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Download
          </Button>
        </Tooltip>
        <Tooltip title="Open in new tab">
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<FaExternalLinkAlt />}
            onClick={openInNewTab}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
          >
            Open
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  )
}

export default Navbar