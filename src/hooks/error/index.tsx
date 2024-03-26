import React from 'react'
import { ErrorContext } from '@/contexts/error'

export const useErrorContext = () => {
    const errorContext = React.useContext(ErrorContext)
    if (errorContext === undefined) {
        throw new Error('useErrorContext must be inside a ErrorContext')
    }
    return errorContext
}
