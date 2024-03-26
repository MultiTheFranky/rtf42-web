import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppwriteContext } from '@/hooks/appwrite'

type IsLoggedInWrapperProps = {
    children: JSX.Element
}

export const IsLoggedInWrapper = ({ children }: IsLoggedInWrapperProps) => {
    const { user } = useAppwriteContext()
    const navigate = useNavigate()
    useEffect(() => {
        if (!user) {
            navigate('/sign-in')
        }
    }, [navigate, user])

    return children
}
