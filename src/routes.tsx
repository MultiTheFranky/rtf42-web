import React from 'react'
import { Home, Login } from '@/pages'
import { IsLoggedInWrapper } from '@/wrappers/isLoggedIn'

export const routes = [
    {
        path: '/',
        component: (
            <IsLoggedInWrapper>
                <Home />
            </IsLoggedInWrapper>
        ),
        exact: true,
    },
    {
        path: '/login',
        component: <Login />,
        exact: true,
    },
]
