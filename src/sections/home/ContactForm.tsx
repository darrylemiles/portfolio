import { Alert, Box, Button, Stack, TextField, Typography } from '@mui/material'
import emailjs from '@emailjs/browser'
import React, { useRef, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

const SERVICE_ID = (import.meta as any).env?.VITE_SERVICE_ID ?? ''
const TEMPLATE_ID = (import.meta as any).env?.VITE_TEMPLATE_ID ?? ''
const PUBLIC_KEY = (import.meta as any).env?.VITE_PUBLIC_KEY ?? ''

const RECAPTCHA_SITE_KEY = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY ?? ''

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const recaptchaRef = useRef<any>(null)
  const [isSending, setIsSending] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const getFormValues = () => {
    const form = formRef.current

    if (!form) {
      return { ok: false as const, error: 'Contact form is not ready yet.' }
    }

    const formData = new FormData(form)
    const name = String(formData.get('user_name') ?? '').trim()
    const email = String(formData.get('user_email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!name || !email || !message) {
      return { ok: false as const, error: 'All fields are required.' }
    }

    if (!emailPattern.test(email)) {
      return { ok: false as const, error: 'Please enter a valid email address.' }
    }

    if (!recaptchaToken) {
      return { ok: false as const, error: 'Please complete the reCAPTCHA.' }
    }

    return { ok: true as const, name, email, message }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSuccessMessage('')
    setErrorMessage('')

    const formValues = getFormValues()

    if (!formValues.ok) {
      setErrorMessage(formValues.error)
      return
    }

    if (!formRef.current) {
      setErrorMessage('Contact form is not ready yet.')
      return
    }

    setIsSending(true)

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
        time: new Date().toLocaleString(),
        recaptcha: recaptchaToken,
      }, PUBLIC_KEY)
      setSuccessMessage('Message sent successfully')
      formRef.current.reset()
      recaptchaRef.current?.reset()
      setRecaptchaToken('')
    } catch {
      setErrorMessage('Failed to send your message. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Box
      id='contact-form'
      sx={{
        scrollMarginTop: 96,
        py: { xs: 6, md: 8 },
      }}
    >
      <Box
        sx={{
          mx: 'auto',
          p: { xs: 2.5, md: 4 },
          borderRadius: 4,
          border: '1px solid rgba(142, 197, 255, 0.18)',
          background: 'linear-gradient(180deg, rgba(14, 18, 30, 0.95) 0%, rgba(10, 13, 22, 0.98) 100%)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.32)',
        }}
      >
        <Stack spacing={1.25} mb={3}>
          <Typography variant='overline' color='secondary'>Contact Me</Typography>
          <Typography variant='h4' component='h2'>Let's talk about your next project</Typography>
          <Typography variant='body2' color='text.secondary'>
            Send a quick message and I will get back to you as soon as possible.
          </Typography>
        </Stack>

        <Box component='form' ref={formRef} onSubmit={handleSubmit} noValidate>
          <Stack spacing={2.25}>
            <TextField
              label='Name'
              name='user_name'
              required
              fullWidth
              autoComplete='name'
              disabled={isSending}
            />

            <TextField
              label='Email'
              name='user_email'
              type='email'
              required
              fullWidth
              autoComplete='email'
              disabled={isSending}
            />

            <TextField
              label='Message'
              name='message'
              required
              fullWidth
              multiline
              minRows={6}
              disabled={isSending}
            />

            <Box>
              <ReCAPTCHA
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={(token: any) => setRecaptchaToken(token ?? '')}
                ref={recaptchaRef}
              />
            </Box>

            <Button
              type='submit'
              variant='contained'
              size='large'
              disabled={isSending || !recaptchaToken}
              sx={{ alignSelf: 'flex-start', minWidth: 180 }}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </Button>
          </Stack>
        </Box>

        <Stack spacing={1.5} mt={2.5}>
          {successMessage && <Alert severity='success'>{successMessage}</Alert>}
          {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
        </Stack>
      </Box>
    </Box>
  )
}

export default ContactForm