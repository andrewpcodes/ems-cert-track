/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      emsID
      firstName
      lastName
      email
      stateCode
      password
      Checklist {
        items {
          id
          userID
          name
          description
          courseNumber
          dateStarted
          dateCompleted
          isComplete
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        emsID
        firstName
        lastName
        email
        stateCode
        password
        Checklist {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        emsID
        firstName
        lastName
        email
        stateCode
        password
        Checklist {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChecklist = /* GraphQL */ `
  query GetChecklist($id: ID!) {
    getChecklist(id: $id) {
      id
      userID
      name
      description
      courseNumber
      dateStarted
      dateCompleted
      isComplete
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listChecklists = /* GraphQL */ `
  query ListChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChecklists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        name
        description
        courseNumber
        dateStarted
        dateCompleted
        isComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChecklists = /* GraphQL */ `
  query SyncChecklists(
    $filter: ModelChecklistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChecklists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        name
        description
        courseNumber
        dateStarted
        dateCompleted
        isComplete
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
