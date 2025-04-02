'use client'

import dynamic from 'next/dynamic'
import DashboardLayout from '../../../layout/Dashboard'
import DashboardLayout from '../../../layout/Dashboard'

// Importação dinâmica para evitar problemas de SSR
const SamplePage = dynamic(() => import('../../../pages/extra-pages/sample-page'), { ssr: false })

export default function SamplePageView() {
    return (
        <DashboardLayout>
            <SamplePage />
        </DashboardLayout>
    )
}
