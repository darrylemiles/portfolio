import { Box, Paper, Typography } from '@mui/material';

import React from 'react';
import cvPdf from '../assets/Darryle Miles CV.pdf';
import Navbar from '../layout/Navbar';
import TitleTag from '../components/TitleTag';

const CvViewer: React.FC = () => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Navbar />

      <TitleTag title="Darryle Miles' Curriculum Vitae" />

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