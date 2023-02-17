// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Gender = {
  "MALE": "MALE",
  "FEMALE": "FEMALE"
};

const { DetailedUserInfo, UserInfo } = initSchema(schema);

export {
  DetailedUserInfo,
  UserInfo,
  Gender
};