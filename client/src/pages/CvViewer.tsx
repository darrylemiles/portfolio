import { Box, Button, Paper, Stack, Typography, Tooltip } from '@mui/material';
import { FaDownload, FaExternalLinkAlt, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import React from 'react';
import cvPdf from '../assets/Darryle Miles CV.pdf';

const CvViewer: React.FC = () => {
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="outlined" color="inherit" startIcon={<FaHome />} onClick={() => navigate('/')}>Home</Button>
          <Typography variant="h5" fontWeight={600}>Darryle Miles' Curriculum Vitae</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Tooltip title="Download PDF">
            <Button variant="contained" color="primary" startIcon={<FaDownload />} onClick={downloadCv}>
              Download
            </Button>
          </Tooltip>
          <Tooltip title="Open in new tab">
            <Button variant="outlined" color="inherit" startIcon={<FaExternalLinkAlt />} onClick={openInNewTab}>
              Open
            </Button>
          </Tooltip>
        </Stack>
      </Stack>

      <Paper elevation={3} sx={{ height: '80vh', borderRadius: 2, overflow: 'hidden', border: '1px solid #1A2E56' }}>
        <iframe
          title="CV Viewer"
          src={cvPdf}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </Paper>

      <Typography variant="body2" color="text.secondary" textAlign="center">
        If the PDF doesn't render, use Open to view in a new tab.
      </Typography>
    </Box>
  );
};

export default CvViewer;