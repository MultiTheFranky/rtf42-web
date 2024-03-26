import { createTheme } from '@mui/material'

export const theme = (darkMode: boolean) => {
    return createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#3f51b5',
            },
            secondary: {
                main: '#f50057',
            },
        },
    })
}
