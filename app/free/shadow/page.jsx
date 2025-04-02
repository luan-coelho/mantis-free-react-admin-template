'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from '../../../layout/Dashboard'
import DashboardLayout from '../../../layout/Dashboard'

// Importação dinâmica para evitar problemas de SSR
const Shadow = dynamic(() => import('../../../pages/component-overview/shadows'), { ssr: false })

export default function ShadowPage() {
    return (
        <DashboardLayout>
            <Shadow />
        </DashboardLayout>
    )
}
