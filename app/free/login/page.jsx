'use client'

import dynamic from 'next/dynamic'
import AuthLayout from '../../../layout/Auth'
import AuthLayout from '../../../layout/Auth'

// Importação dinâmica para evitar problemas de SSR
const LoginPage = dynamic(() => import('../../../pages/auth/Login'), { ssr: false })

export default function Login() {
    return (
        <AuthLayout>
            <LoginPage />
        </AuthLayout>
    )
}
