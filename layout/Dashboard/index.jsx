'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { handlerDrawerOpen, useGetMenuMaster } from '../../api/menu'
import Breadcrumbs from '../../components/@extended/Breadcrumbs'
import Loader from '../../components/Loader'
// project imports
import Drawer from './Drawer'
import Footer from './Footer'
import Header from './Header'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { handlerDrawerOpen, useGetMenuMaster } from '../../api/menu'
import Breadcrumbs from '../../components/@extended/Breadcrumbs'
import Loader from '../../components/Loader'
import Drawer from './Drawer'
import Footer from './Footer'
import Header from './Header'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout({ children }) {
    const pathname = usePathname()
    const { menuMasterLoading } = useGetMenuMaster()
    const theme = useTheme()
    const downXL = useMediaQuery(theme.breakpoints.down('xl'))

    // set media wise responsive drawer
    useEffect(() => {
        handlerDrawerOpen(!downXL)
    }, [downXL])

    if (menuMasterLoading) return <Loader />

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <Drawer />

            <Box component="main" sx={{ width: 'calc(100% - 260px)', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
                <Toolbar sx={{ mt: 'inherit' }} />
                <Box
                    sx={{
                        ...{ px: { xs: 0, sm: 2 } },
                        position: 'relative',
                        minHeight: 'calc(100vh - 110px)',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                    {pathname !== '/free/apps/profiles/account/my-account' && <Breadcrumbs />}
                    {children}
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}
