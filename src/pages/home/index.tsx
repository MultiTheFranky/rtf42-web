import {
    BarChart,
    ChevronLeft,
    Dashboard as DashboardIcon,
    Map,
    Menu,
    NotificationImportant,
    People,
} from '@mui/icons-material'
import {
    Box,
    Toolbar,
    IconButton,
    Typography,
    Badge,
    Divider,
    List,
    Container,
    styled,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from '@mui/material'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import MuiDrawer from '@mui/material/Drawer'
import React from 'react'
import { DarkModeToggle } from '@/components/DarkModeToggle'
import { Dashboard } from '@/tabs/Dashboard'
import { Users } from '@/tabs/Players'
import { LogoutButton } from '@/components/LogoutButton'

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const drawerWidth = 240

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9),
            },
        }),
    },
}))

type MenuItem = {
    icon: React.ReactElement
    text: string
    element: React.ReactElement
}

export const menuItems: MenuItem[] = [
    {
        icon: <DashboardIcon />,
        text: 'Dashboard',
        element: <Dashboard />,
    },
    {
        icon: <People />,
        text: 'Players',
        element: <Users />,
    },
    {
        icon: <Map />,
        text: 'Missions',
        element: <div>Missions</div>,
    },
    {
        icon: <BarChart />,
        text: 'Reports',
        element: <div>Reports</div>,
    },
]

export const mainListItems = (
    setSelectedElement: React.Dispatch<React.SetStateAction<MenuItem>>,
) => (
    <div>
        {menuItems.map(item => (
            <Tooltip title={item.text} key={item.text} placement="right">
                <ListItemButton
                    key={item.text}
                    onClick={() => setSelectedElement(item)}
                >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </Tooltip>
        ))}
    </div>
)

export function Home(): React.ReactElement {
    const [open, setOpen] = React.useState(false)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const [selectedElement, setSelectedElement] = React.useState<MenuItem>(
        menuItems[0],
    )
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="absolute" open={open}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        {selectedElement.text}
                    </Typography>
                    <DarkModeToggle />
                    <LogoutButton />
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeft />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">{mainListItems(setSelectedElement)}</List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: theme =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {selectedElement.element}
                </Container>
            </Box>
        </Box>
    )
}
