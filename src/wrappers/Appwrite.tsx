import { AppwriteContext, User } from "@/contexts/appwrite";
import { Account, Client } from "appwrite";
import React, { useState } from "react";

type UserWrapperProps = {
    children: React.ReactNode;
};

export const AppwriteWrapper = ({ children }: UserWrapperProps): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);
    const client = new Client().setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
        .setProject(import.meta.env.VITE_APPWRITE_PROJECT);
    const account = new Account(client);
    return <AppwriteContext.Provider value={{
        client,
        account,
        user,
        setUser
    }}>{children}</AppwriteContext.Provider>;
}