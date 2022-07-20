// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Pages = {
  "RECERTIFICATION": "RECERTIFICATION",
  "HOME": "HOME",
  "CHECKLIST": "CHECKLIST",
  "COURSES": "COURSES",
  "PROFILE": "PROFILE"
};

const { SiteContent, User, Checklist } = initSchema(schema);

export {
  SiteContent,
  User,
  Checklist,
  Pages
};