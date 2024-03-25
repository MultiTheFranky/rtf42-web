import { Account, Client } from "appwrite";
import { createContext } from "react";

export type User = {
    email: string;
    name: string;
    id: string;
};

interface AppwriteContext {
    client: Client;
    account: Account;
    user: User | null;
    setUser: (user: User) => void;
}

export const AppwriteContext = createContext<AppwriteContext | undefined>(undefined);

