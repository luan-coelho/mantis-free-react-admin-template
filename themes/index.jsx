'use client'

import { useMemo } from 'react'
import componentsOverride from './overrides'
// project imports
import Palette from './palette'
import CustomShadows from './shadows'
import Typography from './typography'
import CssBaseline from '@mui/material/CssBaseline'
// material-ui
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'
import componentsOverride from './overrides'
import Palette from './palette'
import CustomShadows from './shadows'
import Typography from './typography'
import CssBaseline from '@mui/material/CssBaseline'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import PropTypes from 'prop-types'

// ==============================|| DEFAULT THEME - MAIN ||============================== //

export default function ThemeCustomization({ children }) {
    const theme = Palette('light', 'default')

    const themeTypography = Typography(`'Public Sans', sans-serif`)
    const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme])

    const themeOptions = useMemo(
        () => ({
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 1024,
                    lg: 1266,
                    xl: 1440,
                },
            },
            direction: 'ltr',
            mixins: {
                toolbar: {
                    minHeight: 60,
                    paddingTop: 8,
                    paddingBottom: 8,
                },
            },
            palette: theme.palette,
            customShadows: themeCustomShadows,
            typography: themeTypography,
        }),
        [theme, themeTypography, themeCustomShadows],
    )

    const themes = createTheme(themeOptions)
    themes.components = componentsOverride(themes)

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes}>
                <CssBaseline enableColorScheme />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

ThemeCustomization.propTypes = { children: PropTypes.node }
