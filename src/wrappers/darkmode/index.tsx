import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { DarkModeContext } from '@/contexts/darkmode'
import { theme } from '@/theme'

type DarkModeWrapperProps = {
    children: JSX.Element
}

export const DarkModeWrapper = ({ children }: DarkModeWrapperProps) => {
    const getSystemDarkMode = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    const [darkMode, setDarkMode] = useState(getSystemDarkMode())

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                setDarkMode,
            }}
        >
            <ThemeProvider theme={theme(darkMode)}>{children}</ThemeProvider>
        </DarkModeContext.Provider>
    )
}
