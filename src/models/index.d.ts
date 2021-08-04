import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Yn {
  Y = "Y",
  N = "N"
}



type AccountMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AccountCourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EnrollmentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeedMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AttributeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InterventionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HistoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Account {
  readonly id: string;
  readonly lmsAccountID: string;
  readonly lmsType: string;
  readonly name: string;
  readonly status: string;
  readonly courses?: (AccountCourse | null)[];
  readonly coursesByCourseName?: (AccountCourse | null)[];
  readonly coursesByTerm?: (AccountCourse | null)[];
  readonly coursesByTermByCourseName?: (AccountCourse | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Account, AccountMetaData>);
  static copyOf(source: Account, mutator: (draft: MutableModel<Account, AccountMetaData>) => MutableModel<Account, AccountMetaData> | void): Account;
}

export declare class AccountCourse {
  readonly id: string;
  readonly lmsType: string;
  readonly lmsCourseAccountAssociationID: string;
  readonly lmsCourseID: string;
  readonly lmsAccountID: string;
  readonly courseName: string;
  readonly term: string;
  readonly account: Account;
  readonly course: Course;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<AccountCourse, AccountCourseMetaData>);
  static copyOf(source: AccountCourse, mutator: (draft: MutableModel<AccountCourse, AccountCourseMetaData>) => MutableModel<AccountCourse, AccountCourseMetaData> | void): AccountCourse;
}

export declare class Course {
  readonly id: string;
  readonly lmsCourseID: string;
  readonly lmsType: string;
  readonly name: string;
  readonly code: string;
  readonly term: string;
  readonly status: string;
  readonly accounts?: (AccountCourse | null)[];
  readonly enrollments?: (Enrollment | null)[];
  readonly attributes?: (Attribute | null)[];
  readonly interventions?: (Intervention | null)[];
  readonly historys?: (History | null)[];
  readonly historysByDate?: (History | null)[];
  readonly historyByInterventionByDate?: (History | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}

export declare class Enrollment {
  readonly id: string;
  readonly userID: string;
  readonly courseID: string;
  readonly lmsEnrollmentId: string;
  readonly lmsType: string;
  readonly type: string;
  readonly lastActivityAt?: string;
  readonly riskProbability?: number;
  readonly status: string;
  readonly feeds?: (Feed | null)[];
  readonly feedsByDate?: (Feed | null)[];
  readonly datas?: (Data | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Enrollment, EnrollmentMetaData>);
  static copyOf(source: Enrollment, mutator: (draft: MutableModel<Enrollment, EnrollmentMetaData>) => MutableModel<Enrollment, EnrollmentMetaData> | void): Enrollment;
}

export declare class Feed {
  readonly id: string;
  readonly enrollmentID: string;
  readonly interventionID: string;
  readonly feed: string;
  readonly type: string;
  readonly date: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Feed, FeedMetaData>);
  static copyOf(source: Feed, mutator: (draft: MutableModel<Feed, FeedMetaData>) => MutableModel<Feed, FeedMetaData> | void): Feed;
}

export declare class Data {
  readonly id: string;
  readonly status: string;
  readonly value?: string;
  readonly attribute: Attribute;
  readonly enrollment: Enrollment;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Data, DataMetaData>);
  static copyOf(source: Data, mutator: (draft: MutableModel<Data, DataMetaData>) => MutableModel<Data, DataMetaData> | void): Data;
}

export declare class Attribute {
  readonly id: string;
  readonly courseID: string;
  readonly status: string;
  readonly type: string;
  readonly name: string;
  readonly scoreYN: Yn | keyof typeof Yn;
  readonly maxScore?: number;
  readonly datas?: (Data | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Attribute, AttributeMetaData>);
  static copyOf(source: Attribute, mutator: (draft: MutableModel<Attribute, AttributeMetaData>) => MutableModel<Attribute, AttributeMetaData> | void): Attribute;
}

export declare class Intervention {
  readonly id: string;
  readonly creatorUserID: string;
  readonly courseID: string;
  readonly name: string;
  readonly description?: string;
  readonly condition?: string;
  readonly content: string;
  readonly emailYN: Yn | keyof typeof Yn;
  readonly lmsYN: Yn | keyof typeof Yn;
  readonly smsYN: Yn | keyof typeof Yn;
  readonly snsYN: Yn | keyof typeof Yn;
  readonly sendTime?: string;
  readonly reserveTime?: string;
  readonly cronTime?: string;
  readonly status: string;
  readonly feeds?: (Feed | null)[];
  readonly feedsByDate?: (Feed | null)[];
  readonly historys?: (History | null)[];
  readonly historysByDate?: (History | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Intervention, InterventionMetaData>);
  static copyOf(source: Intervention, mutator: (draft: MutableModel<Intervention, InterventionMetaData>) => MutableModel<Intervention, InterventionMetaData> | void): Intervention;
}

export declare class History {
  readonly id: string;
  readonly courseID: string;
  readonly interventionID: string;
  readonly senderUserID: string;
  readonly recipientUserID: string;
  readonly emailYN: Yn | keyof typeof Yn;
  readonly lmsYN: Yn | keyof typeof Yn;
  readonly smsYN: Yn | keyof typeof Yn;
  readonly snsYN: Yn | keyof typeof Yn;
  readonly date: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<History, HistoryMetaData>);
  static copyOf(source: History, mutator: (draft: MutableModel<History, HistoryMetaData>) => MutableModel<History, HistoryMetaData> | void): History;
}

export declare class User {
  readonly id: string;
  readonly lmsUserID: string;
  readonly lmsType: string;
  readonly name: string;
  readonly email?: string;
  readonly phoneNumber?: string;
  readonly snsType?: string;
  readonly snsID?: string;
  readonly lastLoggedOut?: string;
  readonly status: string;
  readonly enrollmentByCourse?: (Enrollment | null)[];
  readonly enrollments?: (Enrollment | null)[];
  readonly interventions?: (Intervention | null)[];
  readonly senderHistorys?: (History | null)[];
  readonly recipientHistorys?: (History | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}