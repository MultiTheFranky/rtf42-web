import React, { useState } from 'react'
import { ErrorContext } from '@/contexts/error'
import { Snackbar, Alert } from '@mui/material'

type ErrorWrapperProps = {
    children: JSX.Element
}

export const ErrorWrapper = ({ children }: ErrorWrapperProps) => {
    const [error, setError] = useState<string | null>(null)

    return (
        <ErrorContext.Provider
            value={{
                error,
                setError,
            }}
        >
            {children}
            {error && (
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open
                    autoHideDuration={6000}
                    onClose={() => setError(null)}
                >
                    <Alert severity="error">{error}</Alert>
                </Snackbar>
            )}
        </ErrorContext.Provider>
    )
}
