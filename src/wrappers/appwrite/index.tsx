import { Account, Client } from 'appwrite'
import React, { useState } from 'react'
import { AppwriteContext, User } from '@/contexts/appwrite'

type UserWrapperProps = {
    children: React.ReactNode
}

export const AppwriteWrapper = ({
    children,
}: UserWrapperProps): JSX.Element => {
    if (!import.meta.env.VITE_APPWRITE_ENDPOINT) {
        throw new Error('VITE_APPWRITE_ENDPOINT is not set')
    }
    if (!import.meta.env.VITE_APPWRITE_PROJECT) {
        throw new Error('VITE_APPWRITE_PROJECT is not set')
    }
    const client = new Client()
        .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT)
    const account = new Account(client)
    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user) as User
        }
        return null
    }
    const writeUserToLocalStorage = (user: User) => {
        localStorage.setItem('user', JSON.stringify(user))
    }
    const [user, setUser] = useState<User | null>(getUserFromLocalStorage())
    const writeUser = (userValue: User | null) => {
        if (userValue === null) {
            localStorage.removeItem('user')
        } else {
            writeUserToLocalStorage(userValue)
        }
        setUser(userValue)
    }
    return (
        <AppwriteContext.Provider
            value={{
                client,
                account,
                user,
                setUser: writeUser,
            }}
        >
            {children}
        </AppwriteContext.Provider>
    )
}
