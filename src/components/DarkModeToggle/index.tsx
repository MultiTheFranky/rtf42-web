import React from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useDarkModeContext } from '@/hooks/darkmode'

export const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useDarkModeContext()
    return (
        <IconButton
            onClick={() => setDarkMode(!darkMode)}
            color={darkMode ? 'primary' : 'secondary'}
        >
            {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
    )
}
