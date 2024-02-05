import { gql } from "graphql-tag";
import client from "../../../api/apollo-client";
import type { Arma3Attendance, Arma3AttendanceInput } from "../../__generated__/schema";

export const ADD_ARMA3_ATTENDANCE = gql`
    mutation AddArma3Attendance($input: Arma3AttendanceInput!) {
        addArma3Attendance(input: $input) {
        attendance {
            name
            status
        }
        date
        }
    }
`;

type AddArma3AttendanceResponse = {
    addArma3Attendance: Arma3Attendance | null;
}

export const MUTATION_ADD_ARMA3_ATTENDANCE = async (input: Arma3AttendanceInput) => {
    return await client.mutate<AddArma3AttendanceResponse>({
        mutation: ADD_ARMA3_ATTENDANCE,
        variables: {
            input
        }
    });
}