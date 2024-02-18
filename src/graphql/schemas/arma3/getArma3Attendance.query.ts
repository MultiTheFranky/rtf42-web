
import gql from "graphql-tag";
import type { Arma3Attendance } from "../../__generated__/schema";

export const GET_ARMA3_ATTENDANCE = gql`
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

export type GetArma3AttendanceResponse = {
    getArma3Attendance: Arma3Attendance;
}