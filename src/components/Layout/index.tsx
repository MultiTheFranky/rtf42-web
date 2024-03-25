import React from "react"
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "../Header"

type LayoutProps = {
    children: React.ReactNode;
    isLogin?: boolean;
}

export const Layout = ({ children, isLogin }: LayoutProps) => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Grid>
            <Header onDrawerToggle={handleDrawerToggle}  isLogin/>
            {children}
        </Grid>

    )
}

Layout.defaultProps = {
    isLogin: false
}