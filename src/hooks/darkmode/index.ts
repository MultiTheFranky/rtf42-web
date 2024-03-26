import React from 'react'
import { DarkModeContext } from '@/contexts/darkmode'

export const useDarkModeContext = () => {
    const darkModeContext = React.useContext(DarkModeContext)
    if (darkModeContext === undefined) {
        throw new Error('useDarkModeContext must be inside a DarkModeContext')
    }
    return darkModeContext
}
