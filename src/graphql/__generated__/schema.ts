export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Arma3Attendance = {
  __typename?: 'Arma3Attendance';
  /** The attendance information */
  attendance: Array<Arma3AttendanceInfo>;
  /** The date of the attendance */
  date: Scalars['Date']['output'];
};

export type Arma3AttendanceFilter = {
  /** The date to get attendance for */
  date: Scalars['Date']['input'];
};

export type Arma3AttendanceInfo = {
  __typename?: 'Arma3AttendanceInfo';
  /** The name of the player */
  name: Scalars['String']['output'];
  /** The attendance status of the player */
  status: Arma3AttendanceStatus;
};

export type Arma3AttendanceInfoInput = {
  /** The name of the player */
  name: Scalars['String']['input'];
  /** The attendance status of the player */
  status: Arma3AttendanceStatus;
};

export type Arma3AttendanceInput = {
  /** The attendance information */
  attendance: Array<Arma3AttendanceInfoInput>;
  /** The date to add attendance for */
  date: Scalars['Date']['input'];
};

export enum Arma3AttendanceStatus {
  /** The player attended */
  Attended = 'ATTENDED',
  /** The player did not attend */
  DidNotAttend = 'DID_NOT_ATTEND',
  /** The player was excused */
  Excused = 'EXCUSED',
  /** The player was late */
  Late = 'LATE'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Add Arma 3 attendance information */
  addArma3Attendance?: Maybe<Arma3Attendance>;
  empty: Scalars['String']['output'];
};


export type MutationAddArma3AttendanceArgs = {
  input: Arma3AttendanceInput;
};

export type Query = {
  __typename?: 'Query';
  empty: Scalars['String']['output'];
  /** Get Arma 3 attendance information */
  getArma3Attendance: Arma3Attendance;
};


export type QueryGetArma3AttendanceArgs = {
  filter: Arma3AttendanceFilter;
};
