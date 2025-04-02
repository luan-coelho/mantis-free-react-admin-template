'use client'

import Link from 'next/link'
// project imports
import AuthLogin from '../../../sections/auth/AuthLogin'
import AuthWrapper from '../../../sections/auth/AuthWrapper'
// material-ui
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AuthLogin from '../../../sections/auth/AuthLogin'
import AuthWrapper from '../../../sections/auth/AuthWrapper'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// ================================|| JWT - LOGIN ||================================ //

export default function LoginPage() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <Stack
                        direction="row"
                        sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Login</Typography>
                        <Typography
                            component={Link}
                            href={'/auth/register'}
                            variant="body1"
                            sx={{ textDecoration: 'none' }}
                            color="primary">
                            Don&apos;t have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <AuthLogin />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}
