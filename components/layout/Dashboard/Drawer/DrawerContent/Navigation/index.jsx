// material-ui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import menuItems from '../../../../../../menu-items'
// project import
import NavGroup from './NavGroup'

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

export default function Navigation() {
    const navGroups = menuItems.items.map(item => {
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
