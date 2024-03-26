import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import config from '@/config'
import logo from '@/assets/images/logo.png'
import { DarkModeToggle } from '../DarkModeToggle'

const lightColor = 'rgba(255, 255, 255, 0.7)'

interface HeaderProps {
    onDrawerToggle: () => void
    isLogin?: boolean
}

export function Header(props: HeaderProps) {
    const { onDrawerToggle, isLogin } = props

    return (
        <>
            <AppBar color="primary" position="sticky" elevation={0}>
                <Toolbar>
                    {isLogin ? (
                        <Grid container spacing={1} alignItems="center">
                            <Grid
                                sx={{ display: { sm: 'none', xs: 'block' } }}
                                item
                            >
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Avatar
                                    sx={{
                                        m: 1,
                                        height: '50px',
                                        width: '50px',
                                    }}
                                >
                                    <img
                                        src={logo}
                                        alt="Logo"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                        }}
                                    />
                                </Avatar>
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                                <DarkModeToggle />
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid container spacing={1} alignItems="center">
                            <Grid
                                sx={{ display: { sm: 'none', xs: 'block' } }}
                                item
                            >
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    edge="start"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    component="h1"
                                    sx={{ flexGrow: 1 }}
                                >
                                    {config.app.name}
                                </Typography>
                            </Grid>
                            <Grid item xs />
                            <Grid item>
                                <Link
                                    href="/"
                                    variant="body2"
                                    sx={{
                                        textDecoration: 'none',
                                        color: lightColor,
                                    }}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Go to docs
                                </Link>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Alerts • No alerts">
                                    <IconButton color="inherit">
                                        <NotificationsIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" sx={{ p: 0.5 }}>
                                    <Avatar
                                        src="/static/images/avatar/1.jpg"
                                        alt="My Avatar"
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </>
    )
}

Header.defaultProps = {
    isLogin: false,
}
