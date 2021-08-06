/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      lmsAccountID
      lmsType
      name
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      courses {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTerm {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTermByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      lmsAccountID
      lmsType
      name
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      courses {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTerm {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTermByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      lmsAccountID
      lmsType
      name
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      courses {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTerm {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      coursesByTermByCourseName {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAccountCourse = /* GraphQL */ `
  mutation CreateAccountCourse(
    $input: CreateAccountCourseInput!
    $condition: ModelAccountCourseConditionInput
  ) {
    createAccountCourse(input: $input, condition: $condition) {
      id
      accountID
      courseID
      lmsType
      lmsCourseAccountAssociationID
      lmsCourseID
      lmsAccountID
      courseName
      term
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        courses {
          nextToken
          startedAt
        }
        coursesByCourseName {
          nextToken
          startedAt
        }
        coursesByTerm {
          nextToken
          startedAt
        }
        coursesByTermByCourseName {
          nextToken
          startedAt
        }
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        accounts {
          nextToken
          startedAt
        }
        attributes {
          nextToken
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        interventions {
          nextToken
          startedAt
        }
        historys {
          nextToken
          startedAt
        }
        historysByDate {
          nextToken
          startedAt
        }
        historyByInterventionByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateAccountCourse = /* GraphQL */ `
  mutation UpdateAccountCourse(
    $input: UpdateAccountCourseInput!
    $condition: ModelAccountCourseConditionInput
  ) {
    updateAccountCourse(input: $input, condition: $condition) {
      id
      accountID
      courseID
      lmsType
      lmsCourseAccountAssociationID
      lmsCourseID
      lmsAccountID
      courseName
      term
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        courses {
          nextToken
          startedAt
        }
        coursesByCourseName {
          nextToken
          startedAt
        }
        coursesByTerm {
          nextToken
          startedAt
        }
        coursesByTermByCourseName {
          nextToken
          startedAt
        }
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        accounts {
          nextToken
          startedAt
        }
        attributes {
          nextToken
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        interventions {
          nextToken
          startedAt
        }
        historys {
          nextToken
          startedAt
        }
        historysByDate {
          nextToken
          startedAt
        }
        historyByInterventionByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteAccountCourse = /* GraphQL */ `
  mutation DeleteAccountCourse(
    $input: DeleteAccountCourseInput!
    $condition: ModelAccountCourseConditionInput
  ) {
    deleteAccountCourse(input: $input, condition: $condition) {
      id
      accountID
      courseID
      lmsType
      lmsCourseAccountAssociationID
      lmsCourseID
      lmsAccountID
      courseName
      term
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        courses {
          nextToken
          startedAt
        }
        coursesByCourseName {
          nextToken
          startedAt
        }
        coursesByTerm {
          nextToken
          startedAt
        }
        coursesByTermByCourseName {
          nextToken
          startedAt
        }
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        accounts {
          nextToken
          startedAt
        }
        attributes {
          nextToken
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        interventions {
          nextToken
          startedAt
        }
        historys {
          nextToken
          startedAt
        }
        historysByDate {
          nextToken
          startedAt
        }
        historyByInterventionByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      lmsCourseID
      lmsType
      name
      code
      term
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      accounts {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attributes {
        items {
          id
          courseID
          status
          type
          name
          scoreYN
          maxScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historyByInterventionByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      lmsCourseID
      lmsType
      name
      code
      term
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      accounts {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attributes {
        items {
          id
          courseID
          status
          type
          name
          scoreYN
          maxScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historyByInterventionByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      lmsCourseID
      lmsType
      name
      code
      term
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      accounts {
        items {
          id
          accountID
          courseID
          lmsType
          lmsCourseAccountAssociationID
          lmsCourseID
          lmsAccountID
          courseName
          term
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      attributes {
        items {
          id
          courseID
          status
          type
          name
          scoreYN
          maxScore
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historyByInterventionByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createAttribute = /* GraphQL */ `
  mutation CreateAttribute(
    $input: CreateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    createAttribute(input: $input, condition: $condition) {
      id
      courseID
      status
      type
      name
      scoreYN
      maxScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateAttribute = /* GraphQL */ `
  mutation UpdateAttribute(
    $input: UpdateAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    updateAttribute(input: $input, condition: $condition) {
      id
      courseID
      status
      type
      name
      scoreYN
      maxScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteAttribute = /* GraphQL */ `
  mutation DeleteAttribute(
    $input: DeleteAttributeInput!
    $condition: ModelAttributeConditionInput
  ) {
    deleteAttribute(input: $input, condition: $condition) {
      id
      courseID
      status
      type
      name
      scoreYN
      maxScore
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createData = /* GraphQL */ `
  mutation CreateData(
    $input: CreateDataInput!
    $condition: ModelDataConditionInput
  ) {
    createData(input: $input, condition: $condition) {
      id
      attributeID
      enrollmentID
      status
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
      }
      enrollment {
        id
        userID
        courseID
        lmsEnrollmentId
        lmsType
        type
        lastActivityAt
        riskProbability
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateData = /* GraphQL */ `
  mutation UpdateData(
    $input: UpdateDataInput!
    $condition: ModelDataConditionInput
  ) {
    updateData(input: $input, condition: $condition) {
      id
      attributeID
      enrollmentID
      status
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
      }
      enrollment {
        id
        userID
        courseID
        lmsEnrollmentId
        lmsType
        type
        lastActivityAt
        riskProbability
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteData = /* GraphQL */ `
  mutation DeleteData(
    $input: DeleteDataInput!
    $condition: ModelDataConditionInput
  ) {
    deleteData(input: $input, condition: $condition) {
      id
      attributeID
      enrollmentID
      status
      value
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
      }
      enrollment {
        id
        userID
        courseID
        lmsEnrollmentId
        lmsType
        type
        lastActivityAt
        riskProbability
        status
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        datas {
          nextToken
          startedAt
        }
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createEnrollment = /* GraphQL */ `
  mutation CreateEnrollment(
    $input: CreateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    createEnrollment(input: $input, condition: $condition) {
      id
      userID
      courseID
      lmsEnrollmentId
      lmsType
      type
      lastActivityAt
      riskProbability
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateEnrollment = /* GraphQL */ `
  mutation UpdateEnrollment(
    $input: UpdateEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    updateEnrollment(input: $input, condition: $condition) {
      id
      userID
      courseID
      lmsEnrollmentId
      lmsType
      type
      lastActivityAt
      riskProbability
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteEnrollment = /* GraphQL */ `
  mutation DeleteEnrollment(
    $input: DeleteEnrollmentInput!
    $condition: ModelEnrollmentConditionInput
  ) {
    deleteEnrollment(input: $input, condition: $condition) {
      id
      userID
      courseID
      lmsEnrollmentId
      lmsType
      type
      lastActivityAt
      riskProbability
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      lmsUserID
      lmsType
      name
      email
      phoneNumber
      snsType
      snsID
      lastLoggedOut
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrollmentByCourse {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      senderHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipientHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      lmsUserID
      lmsType
      name
      email
      phoneNumber
      snsType
      snsID
      lastLoggedOut
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrollmentByCourse {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      senderHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipientHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      lmsUserID
      lmsType
      name
      email
      phoneNumber
      snsType
      snsID
      lastLoggedOut
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      enrollmentByCourse {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      enrollments {
        items {
          id
          userID
          courseID
          lmsEnrollmentId
          lmsType
          type
          lastActivityAt
          riskProbability
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          condition
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          sendTime
          reserveTime
          cronTime
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      senderHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      recipientHistorys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createIntervention = /* GraphQL */ `
  mutation CreateIntervention(
    $input: CreateInterventionInput!
    $condition: ModelInterventionConditionInput
  ) {
    createIntervention(input: $input, condition: $condition) {
      id
      creatorUserID
      courseID
      name
      description
      condition
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      sendTime
      reserveTime
      cronTime
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateIntervention = /* GraphQL */ `
  mutation UpdateIntervention(
    $input: UpdateInterventionInput!
    $condition: ModelInterventionConditionInput
  ) {
    updateIntervention(input: $input, condition: $condition) {
      id
      creatorUserID
      courseID
      name
      description
      condition
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      sendTime
      reserveTime
      cronTime
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteIntervention = /* GraphQL */ `
  mutation DeleteIntervention(
    $input: DeleteInterventionInput!
    $condition: ModelInterventionConditionInput
  ) {
    deleteIntervention(input: $input, condition: $condition) {
      id
      creatorUserID
      courseID
      name
      description
      condition
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      sendTime
      reserveTime
      cronTime
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historys {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      historysByDate {
        items {
          id
          courseID
          interventionID
          senderUserID
          recipientUserID
          emailYN
          lmsYN
          smsYN
          snsYN
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createFeed = /* GraphQL */ `
  mutation CreateFeed(
    $input: CreateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    createFeed(input: $input, condition: $condition) {
      id
      enrollmentID
      interventionID
      feed
      type
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFeed = /* GraphQL */ `
  mutation UpdateFeed(
    $input: UpdateFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    updateFeed(input: $input, condition: $condition) {
      id
      enrollmentID
      interventionID
      feed
      type
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFeed = /* GraphQL */ `
  mutation DeleteFeed(
    $input: DeleteFeedInput!
    $condition: ModelFeedConditionInput
  ) {
    deleteFeed(input: $input, condition: $condition) {
      id
      enrollmentID
      interventionID
      feed
      type
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
      id
      courseID
      interventionID
      senderUserID
      recipientUserID
      emailYN
      lmsYN
      smsYN
      snsYN
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
      id
      courseID
      interventionID
      senderUserID
      recipientUserID
      emailYN
      lmsYN
      smsYN
      snsYN
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
      id
      courseID
      interventionID
      senderUserID
      recipientUserID
      emailYN
      lmsYN
      smsYN
      snsYN
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
