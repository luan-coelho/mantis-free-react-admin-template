// material-ui
// project import
import NavGroup from './NavGroup'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import menuItem from 'menu-items'

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {
    const navGroups = menuItem.items.map(item => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Fix - Navigation Group
                    </Typography>
                )
        }
    })

    return <Box sx={{ pt: 2 }}>{navGroups}</Box>
}
