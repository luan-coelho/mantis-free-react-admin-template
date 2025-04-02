'use client'

// project imports
import Link from 'next/link'
// assets
import EditOutlined from '@ant-design/icons/EditOutlined'
import LogoutOutlined from '@ant-design/icons/LogoutOutlined'
import ProfileOutlined from '@ant-design/icons/ProfileOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import WalletOutlined from '@ant-design/icons/WalletOutlined'
// material-ui
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'
import EditOutlined from '@ant-design/icons/EditOutlined'
import LogoutOutlined from '@ant-design/icons/LogoutOutlined'
import ProfileOutlined from '@ant-design/icons/ProfileOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import WalletOutlined from '@ant-design/icons/WalletOutlined'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PropTypes from 'prop-types'

// ==============================|| HEADER PROFILE - PROFILE TAB ||============================== //

export default function ProfileTab() {
    return (
        <List component="nav" sx={{ p: 0, '& .MuiListItemIcon-root': { minWidth: 32 } }}>
            <ListItemButton component={Link} href="/free/profile/edit">
                <ListItemIcon>
                    <EditOutlined />
                </ListItemIcon>
                <ListItemText primary="Edit Profile" />
            </ListItemButton>
            <ListItemButton component={Link} href="/free/profile/view">
                <ListItemIcon>
                    <UserOutlined />
                </ListItemIcon>
                <ListItemText primary="View Profile" />
            </ListItemButton>

            <ListItemButton component={Link} href="/free/profile/social">
                <ListItemIcon>
                    <ProfileOutlined />
                </ListItemIcon>
                <ListItemText primary="Social Profile" />
            </ListItemButton>
            <ListItemButton component={Link} href="/free/profile/billing">
                <ListItemIcon>
                    <WalletOutlined />
                </ListItemIcon>
                <ListItemText primary="Billing" />
            </ListItemButton>
            <ListItemButton component={Link} href="/free/logout">
                <ListItemIcon>
                    <LogoutOutlined />
                </ListItemIcon>
                <ListItemText primary="Logout" />
            </ListItemButton>
        </List>
    )
}

ProfileTab.propTypes = { handleLogout: PropTypes.func }
