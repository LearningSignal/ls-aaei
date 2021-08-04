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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      id
      lmsAccountID
      lmsType
      name
      status
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      id
      lmsAccountID
      lmsType
      name
      status
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      account {
        id
        lmsAccountID
        lmsType
        name
        status
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
          assignmentYN
          maxScore
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          courseID
          creatorUserID
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
          assignmentYN
          maxScore
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          courseID
          creatorUserID
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
          assignmentYN
          maxScore
          createdAt
          updatedAt
        }
        nextToken
      }
      interventions {
        items {
          id
          courseID
          creatorUserID
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
export const onCreateAttribute = /* GraphQL */ `
  subscription OnCreateAttribute {
    onCreateAttribute {
      id
      courseID
      status
      type
      name
      assignmentYN
      maxScore
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
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
export const onUpdateAttribute = /* GraphQL */ `
  subscription OnUpdateAttribute {
    onUpdateAttribute {
      id
      courseID
      status
      type
      name
      assignmentYN
      maxScore
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
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
export const onDeleteAttribute = /* GraphQL */ `
  subscription OnDeleteAttribute {
    onDeleteAttribute {
      id
      courseID
      status
      type
      name
      assignmentYN
      maxScore
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
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
export const onCreateData = /* GraphQL */ `
  subscription OnCreateData {
    onCreateData {
      id
      attributeID
      enrollmentID
      status
      score
      completed_yn
      attribute {
        id
        courseID
        status
        type
        name
        assignmentYN
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
        datas {
          nextToken
        }
        feeds {
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
export const onUpdateData = /* GraphQL */ `
  subscription OnUpdateData {
    onUpdateData {
      id
      attributeID
      enrollmentID
      status
      score
      completed_yn
      attribute {
        id
        courseID
        status
        type
        name
        assignmentYN
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
        datas {
          nextToken
        }
        feeds {
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
export const onDeleteData = /* GraphQL */ `
  subscription OnDeleteData {
    onDeleteData {
      id
      attributeID
      enrollmentID
      status
      score
      completed_yn
      attribute {
        id
        courseID
        status
        type
        name
        assignmentYN
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
        datas {
          nextToken
        }
        feeds {
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
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
      datas {
        items {
          id
          attributeID
          enrollmentID
          status
          score
          completed_yn
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
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
          courseID
          creatorUserID
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
          courseID
          creatorUserID
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
          courseID
          creatorUserID
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
export const onCreateIntervention = /* GraphQL */ `
  subscription OnCreateIntervention {
    onCreateIntervention {
      id
      courseID
      creatorUserID
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateIntervention = /* GraphQL */ `
  subscription OnUpdateIntervention {
    onUpdateIntervention {
      id
      courseID
      creatorUserID
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteIntervention = /* GraphQL */ `
  subscription OnDeleteIntervention {
    onDeleteIntervention {
      id
      courseID
      creatorUserID
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
      createdAt
      updatedAt
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
      createdAt
      updatedAt
    }
  }
`;
