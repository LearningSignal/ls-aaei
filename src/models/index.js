// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Yn = {
  "Y": "Y",
  "N": "N"
};

const { Account, AccountCourse, Course, Enrollment, Feed, Data, Attribute, Intervention, History, User } = initSchema(schema);

export {
  Account,
  AccountCourse,
  Course,
  Enrollment,
  Feed,
  Data,
  Attribute,
  Intervention,
  History,
  User,
  Yn
};