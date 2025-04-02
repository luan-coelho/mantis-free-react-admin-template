'use client'

import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLocation } from 'react-router-dom'

import { handlerDrawerOpen, useGetMenuMaster } from '../../api/menu'
// project imports
import Breadcrumbs from '../../components/@extended/Breadcrumbs'
import MainDrawer from '../../components/layout/Dashboard/Drawer'
import Header from '../../components/layout/Dashboard/Header'
import Loader from '../../components/Loader'
import Footer from '../../layout/Dashboard/Footer'

// ==============================|| MAIN LAYOUT ||============================== //

export default function DashboardLayout({ children }) {
    const { pathname } = useLocation()
    const { menuMasterLoading } = useGetMenuMaster()
    const downXL = useMediaQuery(theme => theme.breakpoints.down('xl'))

    // set media wise responsive drawer
    useEffect(() => {
        handlerDrawerOpen(!downXL)
    }, [downXL])

    if (menuMasterLoading) return <Loader />

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Header />
            <MainDrawer />

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
                    {pathname !== '/apps/profiles/account/my-account' && <Breadcrumbs />}
                    {children}
                    <Footer />
                </Box>
            </Box>
        </Box>
    )
}
