import React from 'react'
import { useAppwriteContext } from '@/hooks/appwrite'
import { IconButton } from '@mui/material'
import { Logout } from '@mui/icons-material'
import { useDarkModeContext } from '@/hooks/darkmode'
import { useNavigate } from 'react-router'

export const LogoutButton = (): React.ReactElement => {
    const { account, setUser } = useAppwriteContext()
    const { darkMode } = useDarkModeContext()
    const navigate = useNavigate()
    const logout = async () => {
        await account.deleteSession('current')
        setUser(null)
        navigate('/login')
    }
    return (
        <IconButton onClick={logout} color={darkMode ? 'primary' : 'secondary'}>
            <Logout />
        </IconButton>
    )
}
