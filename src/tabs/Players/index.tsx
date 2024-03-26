import { useAppwriteContext } from '@/hooks/appwrite'
import { useErrorContext } from '@/hooks/error'
import { getDatabaseDocuments } from '@/utils/appwrite/database'
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Typography,
    Skeleton,
} from '@mui/material'
import React, { useCallback } from 'react'

type Player = {
    id: string
    created: string
    updated: string
    name: string
    group: string
    loadout: string
}

const skeletonNumber = 5

export const Users = (): React.ReactElement => {
    const { client } = useAppwriteContext()
    const { setError } = useErrorContext()
    const [players, setPlayers] = React.useState<Player[]>([])
    const [loading, setLoading] = React.useState(true)
    const loadingPlayers = Array.from({ length: skeletonNumber }).map(
        (_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableRow key={i}>
                <TableCell>
                    <Typography>
                        <Skeleton />
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography>
                        <Skeleton />
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography>
                        <Skeleton />
                    </Typography>
                </TableCell>
                <TableCell>
                    <Typography>
                        <Skeleton />
                    </Typography>
                </TableCell>
            </TableRow>
        ),
    )
    const getPlayers = useCallback(async () => {
        try {
            const response = await getDatabaseDocuments(
                client,
                'base',
                'players',
            )
            setPlayers(
                response.map(doc => ({
                    id: doc.$id,
                    created: doc.$created,
                    updated: doc.$updated,
                    name: doc.name,
                    group: doc.group,
                    loadout: doc.loadout,
                })),
            )
            setLoading(false)
        } catch (errorMessage) {
            if (errorMessage instanceof Error) {
                setError(errorMessage.message)
            }
        }
    }, [client, setError])
    React.useEffect(() => {
        getPlayers()
    }, [client, getPlayers])
    return (
        <>
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                Players
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Group</TableCell>
                        <TableCell>Loadout</TableCell>
                        <TableCell>Created (Updated)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loading
                        ? loadingPlayers
                        : players.map(row => (
                              <TableRow key={row.id}>
                                  <TableCell>{row.name}</TableCell>
                                  <TableCell>{row.group}</TableCell>
                                  <TableCell>{row.loadout}</TableCell>
                                  <TableCell>{`${row.created} (Updated ${row.updated})`}</TableCell>
                              </TableRow>
                          ))}
                </TableBody>
            </Table>
        </>
    )
}
