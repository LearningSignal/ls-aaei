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
      users {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      users {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      users {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        accounts {
          nextToken
        }
        enrollments {
          nextToken
        }
        attributes {
          nextToken
        }
        interventions {
          nextToken
        }
        historys {
          nextToken
        }
        historysByDate {
          nextToken
        }
        historyByInterventionByDate {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        accounts {
          nextToken
        }
        enrollments {
          nextToken
        }
        attributes {
          nextToken
        }
        interventions {
          nextToken
        }
        historys {
          nextToken
        }
        historysByDate {
          nextToken
        }
        historyByInterventionByDate {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      course {
        id
        lmsCourseID
        lmsType
        name
        code
        term
        status
        accounts {
          nextToken
        }
        enrollments {
          nextToken
        }
        attributes {
          nextToken
        }
        interventions {
          nextToken
        }
        historys {
          nextToken
        }
        historysByDate {
          nextToken
        }
        historyByInterventionByDate {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        datas {
          nextToken
        }
        createdAt
        updatedAt
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
        user {
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
          createdAt
          updatedAt
        }
        feeds {
          nextToken
        }
        feedsByDate {
          nextToken
        }
        datas {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        datas {
          nextToken
        }
        createdAt
        updatedAt
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
        user {
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
          createdAt
          updatedAt
        }
        feeds {
          nextToken
        }
        feedsByDate {
          nextToken
        }
        datas {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      attribute {
        id
        courseID
        status
        type
        name
        scoreYN
        maxScore
        datas {
          nextToken
        }
        createdAt
        updatedAt
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
        user {
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
          createdAt
          updatedAt
        }
        feeds {
          nextToken
        }
        feedsByDate {
          nextToken
        }
        datas {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAccountUser = /* GraphQL */ `
  mutation CreateAccountUser(
    $input: CreateAccountUserInput!
    $condition: ModelAccountUserConditionInput
  ) {
    createAccountUser(input: $input, condition: $condition) {
      id
      accountID
      userID
      lmsType
      lmsAccountUserID
      lmsAccountID
      lmsUserID
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAccountUser = /* GraphQL */ `
  mutation UpdateAccountUser(
    $input: UpdateAccountUserInput!
    $condition: ModelAccountUserConditionInput
  ) {
    updateAccountUser(input: $input, condition: $condition) {
      id
      accountID
      userID
      lmsType
      lmsAccountUserID
      lmsAccountID
      lmsUserID
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAccountUser = /* GraphQL */ `
  mutation DeleteAccountUser(
    $input: DeleteAccountUserInput!
    $condition: ModelAccountUserConditionInput
  ) {
    deleteAccountUser(input: $input, condition: $condition) {
      id
      accountID
      userID
      lmsType
      lmsAccountUserID
      lmsAccountID
      lmsUserID
      account {
        id
        lmsAccountID
        lmsType
        name
        status
        users {
          nextToken
        }
        courses {
          nextToken
        }
        coursesByCourseName {
          nextToken
        }
        coursesByTerm {
          nextToken
        }
        coursesByTermByCourseName {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
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
        accounts {
          nextToken
        }
        enrollmentByCourse {
          nextToken
        }
        enrollments {
          nextToken
        }
        interventions {
          nextToken
        }
        senderHistorys {
          nextToken
        }
        recipientHistorys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      accounts {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      accounts {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      accounts {
        items {
          id
          accountID
          userID
          lmsType
          lmsAccountUserID
          lmsAccountID
          lmsUserID
          createdAt
          updatedAt
        }
        nextToken
      }
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          creatorUserID
          courseID
          name
          description
          conditions
          type
          sendTime
          recipientIDs
          title
          content
          emailYN
          lmsYN
          smsYN
          snsYN
          status
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      conditions
      type
      sendTime
      recipientIDs
      title
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      status
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      conditions
      type
      sendTime
      recipientIDs
      title
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      status
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      conditions
      type
      sendTime
      recipientIDs
      title
      content
      emailYN
      lmsYN
      smsYN
      snsYN
      status
      feeds {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      feedsByDate {
        items {
          id
          enrollmentID
          interventionID
          feed
          type
          date
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
