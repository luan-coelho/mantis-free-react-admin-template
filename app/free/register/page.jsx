'use client'

import dynamic from 'next/dynamic'
import AuthLayout from '../../../layout/Auth'
import AuthLayout from '../../../layout/Auth'

// Importação dinâmica para evitar problemas de SSR
const RegisterPage = dynamic(() => import('../../../pages/auth/Register'), { ssr: false })

export default function Register() {
    return (
        <AuthLayout>
            <RegisterPage />
        </AuthLayout>
    )
}
