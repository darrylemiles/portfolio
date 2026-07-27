import { Box, Container, Stack, Typography } from '@mui/material'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import React from 'react'

type PortfolioLoaderProps = {
  onComplete?: () => void;
}

const MotionBox = motion.create(Box)

const STATUS_STEPS = [
  { limit: 24, label: 'Initializing interface' },
  { limit: 59, label: 'Loading projects' },
  { limit: 89, label: 'Preparing experience' },
  { limit: 100, label: 'Finalizing portfolio' },
] as const

const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3)
const easeOutQuad = (value: number) => 1 - Math.pow(1 - value, 2)

const getStatus = (progress: number) => STATUS_STEPS.find(({ limit }) => progress < limit)?.label ?? 'Finalizing portfolio'

const PortfolioLoader: React.FC<PortfolioLoaderProps> = ({ onComplete }) => {
  const reduceMotion = useReducedMotion()
  const [progress, setProgress] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)
  const animationFrameRef = React.useRef<number | null>(null)
  const completedRef = React.useRef(false)
  const progressRef = React.useRef(0)
  const callbackRef = React.useRef(onComplete)

  React.useEffect(() => {
    callbackRef.current = onComplete
  }, [onComplete])

  React.useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    let startTime = 0
    const totalDuration = reduceMotion ? 900 : 2100
    const rampDuration = reduceMotion ? 660 : 1540
    const holdDuration = reduceMotion ? 80 : 220
    const finalDuration = Math.max(totalDuration - rampDuration - holdDuration, 1)

    const complete = () => {
      if (completedRef.current) {
        return
      }

      completedRef.current = true
      setProgress(100)
      setIsVisible(false)
    }

    const tick = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      let nextProgress = 0

      if (elapsed < rampDuration) {
        nextProgress = easeOutCubic(elapsed / rampDuration) * 97
      } else if (elapsed < rampDuration + holdDuration) {
        nextProgress = 97
      } else if (elapsed < totalDuration) {
        const finalProgress = (elapsed - rampDuration - holdDuration) / finalDuration
        nextProgress = 97 + easeOutQuad(Math.min(1, finalProgress)) * 3
      } else {
        nextProgress = 100
      }

      const roundedProgress = Math.max(progressRef.current, Math.min(100, Math.round(nextProgress)))
      progressRef.current = roundedProgress
      setProgress(roundedProgress)

      if (elapsed >= totalDuration) {
        complete()
        return
      }

      animationFrameRef.current = window.requestAnimationFrame(tick)
    }

    animationFrameRef.current = window.requestAnimationFrame(tick)

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [isVisible, reduceMotion])

  const status = getStatus(progress)

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        callbackRef.current?.()
      }}
    >
      {isVisible && (
        <MotionBox
          key="portfolio-loader"
          role="progressbar"
          aria-label="Loading portfolio"
          aria-live="polite"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: reduceMotion ? 0.2 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          sx={{
            position: 'fixed',
            inset: 0,
            zIndex: theme => theme.zIndex.modal + 2,
            bgcolor: 'background.default',
            color: 'text.primary',
            overflow: 'hidden',
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              minHeight: '100svh',
              py: { xs: 2.5, sm: 3.5, md: 4 },
              px: { xs: 2, sm: 3 },
              display: 'grid',
              alignItems: 'stretch',
            }}
          >
            <Stack
              sx={{
                minHeight: 'calc(100svh - 2rem)',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 3,
                bgcolor: theme => theme.palette.mode === 'light'
                  ? 'rgba(255, 252, 245, 0.76)'
                  : 'rgba(15, 18, 15, 0.72)',
                backdropFilter: 'blur(14px)',
                boxShadow: theme => theme.palette.mode === 'light'
                  ? '0 28px 80px rgba(28, 30, 25, 0.12)'
                  : '0 28px 80px rgba(0, 0, 0, 0.34)',
                px: { xs: 2.5, sm: 3.5, md: 5 },
                py: { xs: 2.5, sm: 3, md: 4 },
                gap: { xs: 3.5, md: 4.5 },
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                gap={2}
                flexWrap="wrap"
              >
                <Stack spacing={0.75}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ letterSpacing: '0.18em', fontWeight: 700 }}
                  >
                    DMB
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Loading portfolio
                  </Typography>
                </Stack>

                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'text.secondary',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {status}
                </Typography>
              </Stack>

              <Stack
                spacing={1.75}
                sx={{
                  flex: 1,
                  display: 'grid',
                  alignItems: 'center',
                  gridTemplateRows: '1fr auto',
                }}
              >
                <Stack spacing={1.25} sx={{ maxWidth: 760 }}>
                  <Typography variant="h1" component="p" sx={{ textTransform: 'uppercase' }}>
                    Darryle Miles
                  </Typography>
                  <Typography variant="h4" component="p" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Full Stack Developer
                  </Typography>
                </Stack>

                <Stack spacing={1.5} sx={{ alignSelf: 'end', maxWidth: 720 }}>
                  <Stack
                    direction="row"
                    alignItems="baseline"
                    justifyContent="space-between"
                    gap={2}
                    flexWrap="wrap"
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {status}
                    </Typography>
                    <Typography
                      variant="h1"
                      component="p"
                      sx={{
                        fontVariantNumeric: 'tabular-nums',
                        fontFeatureSettings: '"tnum" 1',
                        lineHeight: 0.9,
                        letterSpacing: '-0.04em',
                        fontSize: 'clamp(3.5rem, 15vw, 8rem)',
                      }}
                    >
                      {progress}%
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: 2,
                      borderRadius: 999,
                      overflow: 'hidden',
                      bgcolor: theme => theme.palette.mode === 'light'
                        ? 'rgba(28, 30, 25, 0.12)'
                        : 'rgba(245, 241, 232, 0.16)',
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        width: `${progress}%`,
                        borderRadius: 999,
                        bgcolor: 'primary.main',
                        transition: reduceMotion ? 'none' : 'width 120ms linear',
                      }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 460 }}>
                    {status === 'Finalizing portfolio'
                      ? 'Bringing the interface online.'
                      : 'Preparing the work, details, and motion system.'}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export default PortfolioLoader