'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// assets
import ApartmentOutlined from '@ant-design/icons/ApartmentOutlined'
import HomeFilled from '@ant-design/icons/HomeFilled'
import HomeOutlined from '@ant-design/icons/HomeOutlined'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid2'
// material-ui
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'

// project imports
import MainCard from '../../components/MainCard'
import navigation from '../../menu-items'

export default function Breadcrumbs({
    card = false,
    custom = false,
    divider = false,
    heading,
    icon,
    icons,
    links,
    maxItems,
    rightAlign,
    separator,
    title = true,
    titleBottom = true,
    sx,
    ...others
}) {
    const theme = useTheme()
    const pathname = usePathname()

    const [main, setMain] = useState()
    const [item, setItem] = useState()

    const iconSX = {
        marginRight: theme.spacing(0.75),
        marginLeft: 0,
        width: '1rem',
        height: '1rem',
        color: theme.palette.secondary.main,
    }

    // Normalize o pathname removendo o prefixo /free para compatibilidade com o menu
    const customLocation = useMemo(() => {
        let location = pathname

        // only used for component demo breadcrumbs
        if (location.includes('/components-overview/breadcrumbs')) {
            location = '/apps/customer/customer-card'
        }

        // Remover o prefixo /free para corresponder às definições de menu
        if (location.startsWith('/free')) {
            location = location.replace('/free', '')
        }

        return location
    }, [pathname])

    useEffect(() => {
        navigation?.items?.map(menu => {
            if (menu.type && menu.type === 'group') {
                if (menu?.url && menu.url === customLocation) {
                    setMain(menu)
                    setItem(menu)
                } else {
                    getCollapse(menu)
                }
            }
            return false
        })
    }, [customLocation])

    // set active item state
    const getCollapse = menu => {
        if (!custom && menu.children) {
            menu.children.filter(collapse => {
                if (collapse.type && collapse.type === 'collapse') {
                    getCollapse(collapse)
                    if (collapse.url === customLocation) {
                        setMain(collapse)
                        setItem(collapse)
                    }
                } else if (collapse.type && collapse.type === 'item') {
                    if (customLocation === collapse.url) {
                        setMain(menu)
                        setItem(collapse)
                    }
                }
                return false
            })
        }
    }

    // item separator
    const SeparatorIcon = separator
    const separatorIcon = separator ? <SeparatorIcon style={{ fontSize: '0.75rem', marginTop: 2 }} /> : '/'

    let mainContent
    let itemContent
    let breadcrumbContent = <Typography />
    let itemTitle = ''
    let CollapseIcon
    let ItemIcon

    // collapse item
    if (main && main.type === 'collapse' && !main.breadcrumbs) {
        CollapseIcon = main.icon ? main.icon : ApartmentOutlined
        mainContent = (
            <Typography
                component={Link}
                to={main.url}
                variant={pathname === main.url ? 'subtitle1' : 'h6'}
                sx={{ textDecoration: 'none' }}
                color={pathname === main.url ? 'text.primary' : 'text.secondary'}>
                {icons && <CollapseIcon style={iconSX} />}
                {main?.title}
            </Typography>
        )

        if (custom) {
            breadcrumbContent = (
                <MainCard
                    border={card}
                    sx={
                        card === false
                            ? { mb: 3, bgcolor: 'inherit', backgroundImage: 'none', ...sx }
                            : { mb: 3, ...sx }
                    }
                    {...others}
                    content={card}
                    shadow="none">
                    <Grid
                        container
                        direction={rightAlign ? 'row' : 'column'}
                        justifyContent={rightAlign ? 'space-between' : 'flex-start'}
                        alignItems={rightAlign ? 'center' : 'flex-start'}
                        spacing={1}>
                        <Grid>
                            <MuiBreadcrumbs aria-label="breadcrumb" maxItems={maxItems || 8} separator={separatorIcon}>
                                <Typography
                                    component={Link}
                                    to="/"
                                    color="text.secondary"
                                    variant="h6"
                                    sx={{ textDecoration: 'none' }}>
                                    {icons && <HomeOutlined style={iconSX} />}
                                    {icon && !icons && <HomeFilled style={{ ...iconSX, marginRight: 0 }} />}
                                    {(!icon || icons) && 'Home'}
                                </Typography>
                                {mainContent}
                            </MuiBreadcrumbs>
                        </Grid>
                        {title && titleBottom && (
                            <Grid sx={{ mt: card === false ? 0.25 : 1 }}>
                                <Typography variant="h2">{main.title}</Typography>
                            </Grid>
                        )}
                    </Grid>
                    {card === false && divider !== false && <Divider sx={{ mt: 2 }} />}
                </MainCard>
            )
        }
    }

    // items
    if ((item && item.type === 'item') || (item?.type === 'group' && item?.url) || custom) {
        itemTitle = item?.title

        ItemIcon = item?.icon ? item.icon : ApartmentOutlined
        itemContent = (
            <Typography variant="subtitle1" color="text.primary">
                {icons && <ItemIcon style={iconSX} />}
                {itemTitle}
            </Typography>
        )

        let tempContent = (
            <MuiBreadcrumbs aria-label="breadcrumb" maxItems={maxItems || 8} separator={separatorIcon}>
                <Typography component={Link} to="/" color="text.secondary" variant="h6" sx={{ textDecoration: 'none' }}>
                    {icons && <HomeOutlined style={iconSX} />}
                    {icon && !icons && <HomeFilled style={{ ...iconSX, marginRight: 0 }} />}
                    {(!icon || icons) && 'Home'}
                </Typography>
                {mainContent}
                {itemContent}
            </MuiBreadcrumbs>
        )

        if (custom && links && links?.length > 0) {
            tempContent = (
                <MuiBreadcrumbs aria-label="breadcrumb" maxItems={maxItems || 8} separator={separatorIcon}>
                    {links?.map((link, index) => {
                        CollapseIcon = link.icon ? link.icon : ApartmentOutlined

                        return (
                            <Typography
                                key={index}
                                {...(link.to && { component: Link, to: link.to })}
                                variant={!link.to ? 'subtitle1' : 'h6'}
                                sx={{ textDecoration: 'none' }}
                                color={!link.to ? 'text.primary' : 'text.secondary'}>
                                {link.icon && <CollapseIcon style={iconSX} />}
                                {link.title}
                            </Typography>
                        )
                    })}
                </MuiBreadcrumbs>
            )
        }

        // main
        if (item?.breadcrumbs !== false || custom) {
            breadcrumbContent = (
                <MainCard
                    border={card}
                    sx={
                        card === false
                            ? { mb: 3, bgcolor: 'inherit', backgroundImage: 'none', ...sx }
                            : { mb: 3, ...sx }
                    }
                    {...others}
                    content={card}
                    shadow="none">
                    <Grid
                        container
                        direction={rightAlign ? 'row' : 'column'}
                        justifyContent={rightAlign ? 'space-between' : 'flex-start'}
                        alignItems={rightAlign ? 'center' : 'flex-start'}
                        spacing={1}>
                        {title && !titleBottom && (
                            <Grid>
                                <Typography variant="h2">{custom ? heading : item?.title}</Typography>
                            </Grid>
                        )}
                        <Grid>{tempContent}</Grid>
                        {title && titleBottom && (
                            <Grid sx={{ mt: card === false ? 0.25 : 1 }}>
                                <Typography variant="h2">{custom ? heading : item?.title}</Typography>
                            </Grid>
                        )}
                    </Grid>
                    {card === false && divider !== false && <Divider sx={{ mt: 2 }} />}
                </MainCard>
            )
        }
    }

    return breadcrumbContent
}

Breadcrumbs.propTypes = {
    card: PropTypes.bool,
    custom: PropTypes.bool,
    divider: PropTypes.bool,
    heading: PropTypes.string,
    icon: PropTypes.bool,
    icons: PropTypes.bool,
    links: PropTypes.array,
    maxItems: PropTypes.number,
    rightAlign: PropTypes.bool,
    separator: PropTypes.any,
    title: PropTypes.bool,
    titleBottom: PropTypes.bool,
    sx: PropTypes.any,
    others: PropTypes.any,
}
