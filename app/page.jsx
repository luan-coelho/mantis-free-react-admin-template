'use client'

import { useRouter } from 'next/navigation'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function Home() {
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: 3
      }}>
      <Typography variant="h2" gutterBottom>
        Mantis React Admin Template
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
        Bem-vindo ao painel de administração Mantis. Escolha uma das opções abaixo para continuar.
      </Typography>

      <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <Button variant="contained" color="primary" size="large" onClick={() => router.push('/free')}>
          Dashboard
        </Button>
        <Button variant="outlined" color="primary" size="large" onClick={() => router.push('/auth/login')}>
          Login
        </Button>
      </Stack>
    </Box>
  )
}
