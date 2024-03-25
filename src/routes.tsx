import React from 'react';
import { Home, SignIn } from "@/pages";
import { IsLoggedInWrapper } from './wrappers/IsLoggedIn';


export const routes = [
    {
        path: '/',
        component:
            <IsLoggedInWrapper>
                <Home />
            </IsLoggedInWrapper>,
        exact: true
    },
    {
        path: '/sign-in',
        component:
            <SignIn />,
        exact: true
    }
    ];