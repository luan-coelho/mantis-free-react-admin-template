'use client'

import Link from 'next/link'
import LogoIcon from './LogoIcon'
// project imports
import Logo from './LogoMain'
// material-ui
import ButtonBase from '@mui/material/ButtonBase'
import PropTypes from 'prop-types'
import LogoIcon from './LogoIcon'
import Logo from './LogoMain'
import ButtonBase from '@mui/material/ButtonBase'
import PropTypes from 'prop-types'

// ==============================|| MAIN LOGO ||============================== //

export default function LogoSection({ reverse, isIcon, sx, to }) {
    return (
        <ButtonBase disableRipple component={Link} href={to || '/'} sx={sx}>
            {isIcon ? <LogoIcon /> : <Logo reverse={reverse} />}
        </ButtonBase>
    )
}

LogoSection.propTypes = { reverse: PropTypes.bool, isIcon: PropTypes.bool, sx: PropTypes.any, to: PropTypes.any }
