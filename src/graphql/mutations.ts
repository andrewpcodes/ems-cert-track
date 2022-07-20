/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSiteContent = /* GraphQL */ `
  mutation CreateSiteContent(
    $input: CreateSiteContentInput!
    $condition: ModelSiteContentConditionInput
  ) {
    createSiteContent(input: $input, condition: $condition) {
      id
      markdown
      page
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSiteContent = /* GraphQL */ `
  mutation UpdateSiteContent(
    $input: UpdateSiteContentInput!
    $condition: ModelSiteContentConditionInput
  ) {
    updateSiteContent(input: $input, condition: $condition) {
      id
      markdown
      page
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSiteContent = /* GraphQL */ `
  mutation DeleteSiteContent(
    $input: DeleteSiteContentInput!
    $condition: ModelSiteContentConditionInput
  ) {
    deleteSiteContent(input: $input, condition: $condition) {
      id
      markdown
      page
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
          hours
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          hours
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          hours
          category
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
      hours
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      hours
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      hours
      category
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
