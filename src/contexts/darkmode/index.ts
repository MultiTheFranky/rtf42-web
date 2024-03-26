import { createContext } from 'react'

type DarkModeContextType = {
    darkMode: boolean
    setDarkMode: (darkMode: boolean) => void
}

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
    undefined,
)
