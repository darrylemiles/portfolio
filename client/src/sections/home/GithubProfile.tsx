import { GithubFilled } from '@ant-design/icons'
import { GitHubCalendar } from 'react-github-calendar';
import { Box, Button, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react'
import MainCard from '../../components/MainCard'
import LoadingCard from '../../components/skeletons/LoadingCard';

const currentYear = new Date().getFullYear();
const lastYear = currentYear - 1;

const GithubProfile: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <LoadingCard />
      )}

      {!loading && (
        <MainCard
          title={{
            text: 'GitHub Profile',
            icon: <GithubFilled style={{ fontSize: 24 }} />
          }}
          caption='Discover more of my work on GitHub'
        >
          {[lastYear, currentYear].map((year) => (
            <Box key={year} sx={{ mb: 4 }}>
              <Typography variant='h6' textAlign='center'>{year}</Typography>
              <GitHubCalendar
                username="darrylemiles"
                year={year}
                blockSize={5}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </Box>
          ))}

          <Button
            fullWidth
            variant="contained"
            color="inherit"
            startIcon={<GithubFilled />}
            onClick={() => {
              window.open(`https://github.com/darrylemiles`)
            }}
          >
            View Full Profile
          </Button>
        </MainCard>
      )}
    </React.Fragment>
  );
}

export default GithubProfile