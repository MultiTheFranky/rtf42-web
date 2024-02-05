import { gql } from "graphql-tag";
import type { Arma3Attendance, Arma3AttendanceFilter } from "../../__generated__/schema";
import client from "../../../api/apollo-client";

const GET_ARMA3_ATTENDANCE = gql`
query GetArma3Attendance($filter: Arma3AttendanceFilter!) {
    getArma3Attendance(filter: $filter) {
      date
      attendance {
        name
        status
      }
    }
  }
`;

type GetArma3AttendanceResponse = {
    getArma3Attendance: Arma3Attendance;
}

export const QUERY_GET_ARMA3_ATTENDANCE = async (filter: Arma3AttendanceFilter) => {
    return await client.query<GetArma3AttendanceResponse>({
        query: GET_ARMA3_ATTENDANCE,
        variables: {
            filter
        }
    });
}