import { Alert, Skeleton, Stack } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import * as React from 'react';
import { GET_ARMA3_ATTENDANCE, GetArma3AttendanceResponse } from '@/graphql/schemas';
import { useQuery } from '@apollo/client';

export function Home(): React.ReactElement {

    const { loading, error, data } = useQuery<GetArma3AttendanceResponse>(GET_ARMA3_ATTENDANCE, {
    variables: { filter: { date: "2020-01-01" } },
    });

    return (
        <>
            <span className="fs-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos
                expedita qui fugiat doloremque consectetur suscipit. Rem, quo repudiandae delectus
                suscipit ratione totam quidem nihil ducimus qui, veritatis tempora nesciunt.
            </span>
            {loading &&
                <Skeleton variant="rectangular" width={210} height={118} />
            }
            {error && <Alert icon={<ErrorIcon fontSize="inherit" />} severity="error">
                {error.message} Is the backend server running?
            </Alert>
            }
            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" width={210} height={118} />
            </Stack>
        </>
    )
}