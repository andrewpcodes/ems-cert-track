/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createChecklist = /* GraphQL */ `
  mutation CreateChecklist(
    $input: CreateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    createChecklist(input: $input, condition: $condition) {
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
export const updateChecklist = /* GraphQL */ `
  mutation UpdateChecklist(
    $input: UpdateChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    updateChecklist(input: $input, condition: $condition) {
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
export const deleteChecklist = /* GraphQL */ `
  mutation DeleteChecklist(
    $input: DeleteChecklistInput!
    $condition: ModelChecklistConditionInput
  ) {
    deleteChecklist(input: $input, condition: $condition) {
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
