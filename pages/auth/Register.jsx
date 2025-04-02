// material-ui
import Link from 'next/link'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FirebaseRegister from 'sections/auth/AuthRegister'
// project imports
import AuthWrapper from 'sections/auth/AuthWrapper'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FirebaseRegister from 'sections/auth/AuthRegister'
import AuthWrapper from 'sections/auth/AuthWrapper'

// ================================|| JWT - REGISTER ||================================ //

export default function Register() {
    return (
        <AuthWrapper>
            <Grid container spacing={3}>
                <Grid size={12}>
                    <Stack
                        direction="row"
                        sx={{ alignItems: 'baseline', justifyContent: 'space-between', mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Sign up</Typography>
                        <Typography
                            component={Link}
                            href="/login"
                            variant="body1"
                            sx={{ textDecoration: 'none' }}
                            color="primary">
                            Already have an account?
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={12}>
                    <FirebaseRegister />
                </Grid>
            </Grid>
        </AuthWrapper>
    )
}
