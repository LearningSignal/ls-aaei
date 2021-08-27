/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAccountCourse = /* GraphQL */ `
  query GetAccountCourse($id: ID!) {
    getAccountCourse(id: $id) {
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
export const listAccountCourses = /* GraphQL */ `
  query ListAccountCourses(
    $filter: ModelAccountCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        account {
          id
          lmsAccountID
          lmsType
          name
          status
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAttribute = /* GraphQL */ `
  query GetAttribute($id: ID!) {
    getAttribute(id: $id) {
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
export const listAttributes = /* GraphQL */ `
  query ListAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData($id: ID!) {
    getData(id: $id) {
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
export const listData = /* GraphQL */ `
  query ListData(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnrollment = /* GraphQL */ `
  query GetEnrollment($id: ID!) {
    getEnrollment(id: $id) {
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
export const listEnrollments = /* GraphQL */ `
  query ListEnrollments(
    $filter: ModelEnrollmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnrollments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getAccountUser = /* GraphQL */ `
  query GetAccountUser($id: ID!) {
    getAccountUser(id: $id) {
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
export const listAccountUsers = /* GraphQL */ `
  query ListAccountUsers(
    $filter: ModelAccountUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getIntervention = /* GraphQL */ `
  query GetIntervention($id: ID!) {
    getIntervention(id: $id) {
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
export const listInterventions = /* GraphQL */ `
  query ListInterventions(
    $filter: ModelInterventionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterventions(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        feeds {
          nextToken
        }
        feedsByDate {
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
      nextToken
    }
  }
`;
export const getFeed = /* GraphQL */ `
  query GetFeed($id: ID!) {
    getFeed(id: $id) {
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
export const listFeeds = /* GraphQL */ `
  query ListFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeeds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
