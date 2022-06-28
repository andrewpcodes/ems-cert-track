/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateChecklist = /* GraphQL */ `
  subscription OnCreateChecklist($owner: String) {
    onCreateChecklist(owner: $owner) {
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
export const onUpdateChecklist = /* GraphQL */ `
  subscription OnUpdateChecklist($owner: String) {
    onUpdateChecklist(owner: $owner) {
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
export const onDeleteChecklist = /* GraphQL */ `
  subscription OnDeleteChecklist($owner: String) {
    onDeleteChecklist(owner: $owner) {
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
