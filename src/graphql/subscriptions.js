/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
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
export const onCreateAccountCourse = /* GraphQL */ `
  subscription OnCreateAccountCourse {
    onCreateAccountCourse {
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
export const onUpdateAccountCourse = /* GraphQL */ `
  subscription OnUpdateAccountCourse {
    onUpdateAccountCourse {
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
export const onDeleteAccountCourse = /* GraphQL */ `
  subscription OnDeleteAccountCourse {
    onDeleteAccountCourse {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute {
    onCreateAttribute {
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
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute {
    onUpdateAttribute {
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
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute {
    onDeleteAttribute {
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
export const onCreateData = /* GraphQL */ `
  subscription OnCreateData {
    onCreateData {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData {
    onUpdateData {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData {
    onDeleteData {
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
export const onCreateEnrollment = /* GraphQL */ `
  subscription OnCreateEnrollment {
    onCreateEnrollment {
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
export const onUpdateEnrollment = /* GraphQL */ `
  subscription OnUpdateEnrollment {
    onUpdateEnrollment {
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
export const onDeleteEnrollment = /* GraphQL */ `
  subscription OnDeleteEnrollment {
    onDeleteEnrollment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateIntervention = /* GraphQL */ `
  subscription OnCreateIntervention {
    onCreateIntervention {
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
export const onUpdateIntervention = /* GraphQL */ `
  subscription OnUpdateIntervention {
    onUpdateIntervention {
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
export const onDeleteIntervention = /* GraphQL */ `
  subscription OnDeleteIntervention {
    onDeleteIntervention {
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
export const onCreateFeed = /* GraphQL */ `
  subscription OnCreateFeed {
    onCreateFeed {
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
export const onUpdateFeed = /* GraphQL */ `
  subscription OnUpdateFeed {
    onUpdateFeed {
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
export const onDeleteFeed = /* GraphQL */ `
  subscription OnDeleteFeed {
    onDeleteFeed {
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
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
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
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
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
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
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
