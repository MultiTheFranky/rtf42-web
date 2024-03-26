import { createContext } from 'react'

type ErrorContextType = {
    error: string | null
    setError: (error: string | null) => void
}

export const ErrorContext = createContext<ErrorContextType | undefined>(
    undefined,
)
