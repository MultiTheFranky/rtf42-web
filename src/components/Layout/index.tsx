import React from 'react'
import { Grid } from '@mui/material'
import { Header } from '@/components/Header'

type LayoutProps = {
    children: React.ReactNode
    isLogin?: boolean
}

export const Layout = ({ children, isLogin }: LayoutProps) => {
    const [mobileOpen, setMobileOpen] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }
    return (
        <Grid>
            <Header onDrawerToggle={handleDrawerToggle} isLogin={isLogin} />
            {children}
        </Grid>
    )
}

Layout.defaultProps = {
    isLogin: false,
}
