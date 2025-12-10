import { Container, Grid, Stack, Typography } from '@mui/material';
import { navItems } from './items';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate()

  const handleClick = (link: string) => {
    navigate(link)
  }

  return (
    <Container sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center" columns={12}>
        <Grid size={3}>
          <Typography variant="h2" onClick={() => handleClick('/')} sx={{ cursor: 'pointer' }}>Portfolio</Typography>
        </Grid>

        <Grid size={9}>
          <Stack direction="row" justifyContent="flex-end" spacing={5}>
            {navItems.map((nav) => (
              <Typography
                key={nav.link}
                variant="subtitle1"
                onClick={() => handleClick(`${nav.link}`)}
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    transition: 'all .3s',
                    textDecoration: 'underline',
                    opacity: 0.5
                  }
                }}
              >
                {nav.title}
              </Typography>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Navbar