'use client'

// material-ui
import MobileSection from './MobileSection'
import Notification from './Notification'
import Profile from './Profile'
// project imports
import Search from './Search'
// project import
import { GithubOutlined } from '@ant-design/icons'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MobileSection from './MobileSection'
import Notification from './Notification'
import Profile from './Profile'
import Search from './Search'
import { GithubOutlined } from '@ant-design/icons'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
    const theme = useTheme()
    const downLG = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <>
            {!downLG && <Search />}
            {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
            <IconButton
                component={Link}
                href="https://github.com/codedthemes/mantis-free-react-admin-template"
                target="_blank"
                disableRipple
                color="secondary"
                title="Download Free Version"
                sx={{ color: 'text.primary', bgcolor: 'grey.100' }}>
                <GithubOutlined />
            </IconButton>

            <Notification />
            {!downLG && <Profile />}
            {downLG && <MobileSection />}
        </>
    )
}
