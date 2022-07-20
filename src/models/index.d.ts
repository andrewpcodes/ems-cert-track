import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Pages {
  RECERTIFICATION = "RECERTIFICATION",
  HOME = "HOME",
  CHECKLIST = "CHECKLIST",
  COURSES = "COURSES",
  PROFILE = "PROFILE"
}



type SiteContentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChecklistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class SiteContent {
  readonly id: string;
  readonly markdown?: string | null;
  readonly page?: Pages | keyof typeof Pages | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SiteContent, SiteContentMetaData>);
  static copyOf(source: SiteContent, mutator: (draft: MutableModel<SiteContent, SiteContentMetaData>) => MutableModel<SiteContent, SiteContentMetaData> | void): SiteContent;
}

export declare class User {
  readonly id: string;
  readonly emsID?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly stateCode?: string | null;
  readonly password?: string | null;
  readonly Checklist?: (Checklist | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Checklist {
  readonly id: string;
  readonly userID: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly courseNumber?: number | null;
  readonly dateStarted?: string | null;
  readonly dateCompleted?: string | null;
  readonly isComplete?: boolean | null;
  readonly hours?: number | null;
  readonly category?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Checklist, ChecklistMetaData>);
  static copyOf(source: Checklist, mutator: (draft: MutableModel<Checklist, ChecklistMetaData>) => MutableModel<Checklist, ChecklistMetaData> | void): Checklist;
}