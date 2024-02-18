import { Stack } from '@mui/material';
import { Item } from '@/components';
import { MediaCard } from '@/components/common/card';
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
            <Stack direction="row" spacing={2} sx={{ marginTop: 3 }}>
                {data?.getArma3Attendance.attendance.map((content) => (
                    <>
                        <Item>
                            <MediaCard title={content.name} body={content.status} image="https://dummyimage.com/600x400/000/fff" alt="test" height='100' maxWidth={400} />
                        </Item>
                    </>
                ))}
            </Stack>
        </>
    )
}