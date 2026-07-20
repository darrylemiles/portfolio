import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { GithubOutlined, LinkedinOutlined, MailOutlined, ArrowDownOutlined } from '@ant-design/icons'

import React, { useEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import ProjectCard from '../components/ProjectCard'
import Chip from '../components/Chip'
import ContactForm from '../sections/home/ContactForm'
import { PROFILE_IMAGE_URL } from '../constants/profile'
import { getProjects, groupProjectsByClassification } from '../utils/projects'

const MotionBox = motion.create(Box)
const email = 'dmilesbacay@gmail.com'
const githubUrl = 'https://github.com/darrylemiles/'
const linkedinUrl = 'https://www.linkedin.com/in/darryle-miles-bacay-832032261/'

const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 42 },
  visible: { opacity: 1, y: 0 },
}

const SectionHeading: React.FC<{ eyebrow: string; title: string; description?: string }> = ({ eyebrow, title, description }) => (
  <Stack spacing={1.5} sx={{ maxWidth: 900, mb: { xs: 4, md: 7 } }}>
    <Typography
      variant="overline"
      color="primary"
      sx={{ fontWeight: 700, letterSpacing: '0.16em' }}
    >
      {eyebrow}
    </Typography>
    <Typography variant="h2" component="h2">
      {title}
    </Typography>
    {description && (
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680 }}>
        {description}
      </Typography>
    )}
  </Stack>
)

const getProjectGroupDescription = (classification: string) => {
  switch (classification.toLowerCase()) {
    case 'work':
      return 'Client and production-facing systems built for real business workflows, maintainability, and delivery quality.'
    case 'ojt':
      return 'Applied training and industry experience focused on real-time product architecture and team delivery.'
    case 'capstone':
      return 'Academic project work with end-to-end ownership across planning, design, development, and implementation.'
    default:
      return 'Additional selected builds grouped from the project source data.'
  }
}

const Home: React.FC = () => {
  const projects = useMemo(() => getProjects(), [])
  const projectGroups = useMemo(() => groupProjectsByClassification(projects), [projects])
  const techStack = useMemo(
    () => Array.from(new Set(projects.flatMap((project) => project.techStack))).sort(),
    [projects],
  )
  const projectListRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    if (state?.scrollTo === 'projects' && projectListRef.current) {
      setTimeout(() => {
        projectListRef.current?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
      }, 0)
    }
  }, [location.state, reduceMotion])

  const titleWords = ['Darryle', 'Miles', 'Bacay']

  return (
    <Box>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: theme => theme.zIndex.appBar,
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: theme => theme.palette.mode === 'light' ? 'rgba(247, 242, 232, 0.86)' : 'rgba(21, 22, 19, 0.86)',
        }}
      >
        <Container maxWidth="xl">
          <Stack
            component="nav"
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            sx={{ minHeight: 72, pr: { xs: 6, sm: 7 } }}
            aria-label="Main navigation"
          >
            <Button color="inherit" onClick={() => scrollToSection('hero')} sx={{ px: 0, fontWeight: 800 }}>
              Darryle Miles Bacay
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              gap={{ xs: 0.5, md: 1 }}
              sx={{
                display: { xs: 'none', sm: 'flex' },
                '& .MuiButton-root': { px: { sm: 1, md: 1.5 } },
              }}
            >
              <Button color="inherit" onClick={() => scrollToSection('projects')}>Work</Button>
              <Button color="inherit" onClick={() => scrollToSection('about')}>About</Button>
              <Button color="inherit" onClick={() => scrollToSection('experience')}>Experience</Button>
              <Button color="inherit" onClick={() => scrollToSection('contact')}>Contact</Button>
              <Button variant="outlined" onClick={() => navigate('/cv')}>Resume</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Box
          id="hero"
          component="section"
          sx={{
            minHeight: { xs: 'calc(100svh - 96px)', md: 'calc(100svh - 132px)' },
            display: 'grid',
            alignItems: 'center',
            pt: { xs: 4, sm: 6, md: 10 },
            pb: { xs: 5, md: 8 },
            scrollMarginTop: 90,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(360px, 500px)' },
              gap: { xs: 2.75, sm: 5, md: 7 },
              alignItems: 'center',
            }}
          >
            <Stack spacing={{ xs: 2.75, md: 5 }}>
              <Stack spacing={2}>
                <MotionBox
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.55 }}
                >
                  <Stack direction="row" alignItems="center" gap={1.5} flexWrap="wrap">
                    <Box
                      component="span"
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        boxShadow: theme => `0 0 0 8px ${theme.palette.mode === 'light' ? 'rgba(50, 103, 94, 0.16)' : 'rgba(155, 199, 186, 0.16)'}`,
                      }}
                    />
                    <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: '0.14em', fontWeight: 700 }}>
                      Available for selected full-stack work
                    </Typography>
                  </Stack>
                </MotionBox>

                <Typography
                  variant="h1"
                  component="h1"
                  aria-label="Darryle Miles Bacay"
                  sx={{ textTransform: 'uppercase', letterSpacing: 0, maxWidth: '100%' }}
                >
                  {titleWords.map((word, lineIndex) => (
                    <Box key={word} sx={{ display: 'block', overflow: 'hidden' }}>
                      <motion.span
                        aria-hidden="true"
                        initial={reduceMotion ? false : { y: '105%' }}
                        animate={reduceMotion ? undefined : { y: 0 }}
                        transition={{ duration: 0.72, delay: lineIndex * 0.11, ease: [0.22, 1, 0.36, 1] }}
                        style={{ display: 'block' }}
                      >
                        {word}
                      </motion.span>
                    </Box>
                  ))}
                </Typography>

                <MotionBox
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                >
                  <Typography
                    variant="h4"
                    component="p"
                    sx={{ maxWidth: 850, color: 'text.secondary', fontWeight: 500 }}
                  >
                    Full Stack Software Engineer building scalable, maintainable, and production-ready digital products across frontend, APIs, databases, and deployment workflows.
                  </Typography>
                </MotionBox>
              </Stack>

              <Stack direction="row" alignItems="center" gap={1.25} flexWrap="wrap">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowDownOutlined />}
                  onClick={() => scrollToSection('projects')}
                  sx={{ flex: { xs: '1 1 145px', sm: '0 0 auto' } }}
                >
                  View Work
                </Button>
                <Button
                  component="a"
                  href={`mailto:${email}`}
                  variant="outlined"
                  size="large"
                  startIcon={<MailOutlined />}
                  sx={{ flex: { xs: '1 1 145px', sm: '0 0 auto' } }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Stack>

            <MotionBox
              initial={reduceMotion ? false : { opacity: 0, y: 34, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              sx={{
                justifySelf: { xs: 'stretch', md: 'end' },
                width: '100%',
                maxWidth: { xs: 250, sm: 340, md: 500 },
                mx: { xs: 'auto', md: 0 },
                order: { xs: -1, md: 0 },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: '1 / 1',
                  minHeight: { xs: 174, sm: 320, md: 500 },
                  borderRadius: '50%',
                  p: { xs: 1, md: 1.25 },
                  border: '1px solid',
                  borderColor: theme => theme.palette.mode === 'light'
                    ? 'rgba(255, 252, 245, 0.86)'
                    : 'rgba(245, 241, 232, 0.20)',
                  background: theme => theme.palette.mode === 'light'
                    ? 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(216, 131, 109, 0.20), rgba(50, 103, 94, 0.18))'
                    : 'linear-gradient(145deg, rgba(245, 241, 232, 0.18), rgba(216, 131, 109, 0.16), rgba(50, 103, 94, 0.22))',
                  boxShadow: theme => theme.palette.mode === 'light'
                    ? '0 34px 90px rgba(28, 30, 25, 0.20), 0 0 120px rgba(184, 92, 71, 0.18)'
                    : '0 34px 96px rgba(0, 0, 0, 0.46), 0 0 130px rgba(155, 199, 186, 0.16)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: { xs: -8, md: -14 },
                    borderRadius: '50%',
                    border: '1px solid',
                    borderColor: theme => theme.palette.mode === 'light'
                      ? 'rgba(184, 92, 71, 0.22)'
                      : 'rgba(155, 199, 186, 0.24)',
                    pointerEvents: 'none',
                  },
                }}
              >
                <Box
                  component="img"
                  src={PROFILE_IMAGE_URL}
                  alt="Portrait of Darryle Miles Bacay"
                  loading="eager"
                  decoding="async"
                  width={400}
                  height={400}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: '50% 38%',
                    filter: theme => theme.palette.mode === 'light'
                      ? 'saturate(0.92) contrast(1.04)'
                      : 'saturate(0.84) contrast(1.08) brightness(0.92)',
                  }}
                />
              </Box>
            </MotionBox>
          </Box>
        </Box>

        <Box
          ref={projectListRef}
          id="projects"
          component="section"
          sx={{ scrollMarginTop: 96, py: { xs: 7, md: 11 } }}
        >
          <SectionHeading
            eyebrow="Selected Work"
            title="Production-minded systems with polished interfaces."
            description="Projects are rendered directly from the portfolio JSON source, preserving the current order and content while giving each piece a more cinematic presentation."
          />

          <Stack spacing={{ xs: 7, md: 10 }}>
            {projectGroups.map((group) => (
              <Box key={group.classification}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 0.72fr) minmax(0, 1fr)' },
                    gap: { xs: 1.5, md: 5 },
                    alignItems: 'end',
                    pb: { xs: 2.5, md: 3.5 },
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Stack direction="row" alignItems="baseline" gap={1.5} flexWrap="wrap">
                    <Typography variant="h3" component="h3">
                      {group.classification}
                    </Typography>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: '0.14em' }}>
                      {group.projects.length} {group.projects.length === 1 ? 'Project' : 'Projects'}
                    </Typography>
                  </Stack>
                  <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680 }}>
                    {getProjectGroupDescription(group.classification)}
                  </Typography>
                </Box>

                <Box>
                  {group.projects.map((project, groupIndex) => {
                    const globalIndex = projects.findIndex((item) => item.slug === project.slug)

                    return (
                      <ProjectCard
                        key={project.slug}
                        project={project}
                        index={globalIndex >= 0 ? globalIndex : groupIndex}
                        onOpen={(slug) => navigate(`/projects/${slug}`)}
                      />
                    )
                  })}
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        <MotionBox
          id="about"
          variants={sectionVariant}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.7 }}
          sx={{
            scrollMarginTop: 96,
            py: { xs: 7, md: 11 },
            display: 'grid',
            placeItems: 'center',
            gridTemplateColumns: { xs: '1fr', md: '.8fr 1fr' },
            gap: { xs: 4, md: 8 },
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <SectionHeading eyebrow="About" title="Turning ideas into reliable, production-ready software." />
          <Stack spacing={2.5}>
            <Typography
              variant="h4"
              component="p"
              sx={{ color: 'text.secondary', fontWeight: 500 }}
            >
              I build scalable, production-ready web applications using React, TypeScript, Node.js, Express, MongoDB, and relational databases. From intuitive user interfaces to robust backend APIs, I focus on creating reliable software that is clean, maintainable, and designed to evolve with business needs.
            </Typography>

            <Typography variant="body1" color="text.secondary">
              My experience spans SaaS, healthcare, fintech, real estate, e-commerce, and booking platforms, where I've worked across the full software development lifecycle—from system architecture and database design to API development, deployment, production support, and long-term technical ownership. I enjoy solving complex problems and turning ideas into practical, high-quality digital products.
            </Typography>
          </Stack>
        </MotionBox>

        <MotionBox
          id="experience"
          variants={sectionVariant}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.7 }}
          sx={{ scrollMarginTop: 96, py: { xs: 7, md: 11 }, borderTop: '1px solid', borderColor: 'divider' }}
        >
          <SectionHeading
            eyebrow="Experience"
            title="Recent delivery areas."
            description="Experience is grounded in the existing project content rather than invented employer claims or unsupported metrics."
          />

          <Box sx={{ display: 'grid', gap: 2 }}>
            {projects.map((project, index) => (
              <Box
                key={project.slug}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '96px minmax(0, 1fr) 180px' },
                  gap: { xs: 1.5, md: 3 },
                  alignItems: 'start',
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  boxShadow: theme => theme.palette.mode === 'light'
                    ? '0 14px 36px rgba(28, 30, 25, 0.06)'
                    : '0 16px 42px rgba(0, 0, 0, 0.22)',
                }}
              >
                <Typography variant="h5" color="primary">{String(index + 1).padStart(2, '0')}</Typography>
                <Box>
                  <Typography variant="h5" component="h3">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75 }}>
                    {project.summary}
                  </Typography>
                </Box>
                <Stack spacing={1} alignItems={{ xs: 'flex-start', md: 'flex-end' }}>
                  <Chip text={project.classification} small />
                  <Typography variant="body2" color="text.secondary">{project.period}</Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </MotionBox>

        <MotionBox
          variants={sectionVariant}
          initial={reduceMotion ? false : 'hidden'}
          whileInView={reduceMotion ? undefined : 'visible'}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.7 }}
          sx={{ py: { xs: 7, md: 11 }, borderTop: '1px solid', borderColor: 'divider' }}
        >
          <SectionHeading
            eyebrow="Technology"
            title="A focused stack for shipping full-stack products."
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, minmax(0, 1fr))', md: 'repeat(5, minmax(0, 1fr))' },
              gap: 1,
            }}
          >
            {techStack.map((tech) => (
              <Box
                key={tech}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'background.paper',
                  transition: 'transform 180ms ease, border-color 180ms ease, background-color 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderColor: 'primary.light',
                    bgcolor: theme => theme.palette.mode === 'light' ? 'rgba(255, 252, 245, 0.96)' : 'rgba(34, 39, 33, 0.96)',
                  },
                  p: 2,
                  minHeight: 74,
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2" fontWeight={700}>{tech}</Typography>
              </Box>
            ))}
          </Box>
        </MotionBox>

        <Box
          id="contact"
          component="section"
          sx={{
            scrollMarginTop: 96,
            py: { xs: 7, md: 11 },
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.92fr 1.08fr' },
            gap: { xs: 4, md: 7 },
            alignItems: 'start',
          }}
        >
          <Stack spacing={3}>
            <SectionHeading
              eyebrow="Contact"
              title="Have a product that needs thoughtful execution?"
              description="Reach out for full-stack development, production support, architecture, or frontend implementation work."
            />
            <Stack direction="row" gap={1} flexWrap="wrap">
              <Button component="a" href={`mailto:${email}`} variant="contained" startIcon={<MailOutlined />}>
                {email}
              </Button>
              <Button component="a" href={githubUrl} target="_blank" rel="noreferrer" variant="outlined" startIcon={<GithubOutlined />}>
                GitHub
              </Button>
              <Button component="a" href={linkedinUrl} target="_blank" rel="noreferrer" variant="outlined" startIcon={<LinkedinOutlined />}>
                LinkedIn
              </Button>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Portfolio domain: darrylebacay.dev
            </Typography>
          </Stack>
          <ContactForm />
        </Box>
      </Container>
    </Box>
  )
}

export default Home
