/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAccounts = /* GraphQL */ `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        lmsAccountID
        lmsType
        name
        status
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
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
      _version
      _deleted
      _lastChangedAt
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
`;
export const syncAccountCourses = /* GraphQL */ `
  query SyncAccountCourses(
    $filter: ModelAccountCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccountCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
        _version
        _deleted
        _lastChangedAt
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
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        attributes {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        attributes {
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
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        enrollments {
          nextToken
          startedAt
        }
        attributes {
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
`;
export const syncAttributes = /* GraphQL */ `
  query SyncAttributes(
    $filter: ModelAttributeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          startedAt
        }
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
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
`;
export const syncData = /* GraphQL */ `
  query SyncData(
    $filter: ModelDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
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
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
        datas {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
`;
export const syncEnrollments = /* GraphQL */ `
  query SyncEnrollments(
    $filter: ModelEnrollmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEnrollments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
        datas {
          nextToken
          startedAt
        }
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
      _version
      _deleted
      _lastChangedAt
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
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
          nextToken
          startedAt
        }
        datas {
          nextToken
          startedAt
        }
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
        senderHistorys {
          nextToken
          startedAt
        }
        recipientHistorys {
          nextToken
          startedAt
        }
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
      _version
      _deleted
      _lastChangedAt
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
        enrollmentByCourse {
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
        senderHistorys {
          nextToken
          startedAt
        }
        recipientHistorys {
          nextToken
          startedAt
        }
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
`;
export const syncInterventions = /* GraphQL */ `
  query SyncInterventions(
    $filter: ModelInterventionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInterventions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        feeds {
          nextToken
          startedAt
        }
        feedsByDate {
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
`;
export const getIntervention = /* GraphQL */ `
  query GetIntervention($id: ID!) {
    getIntervention(id: $id) {
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
      _version
      _deleted
      _lastChangedAt
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
          nextToken
          startedAt
        }
        feedsByDate {
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
`;
export const syncFeeds = /* GraphQL */ `
  query SyncFeeds(
    $filter: ModelFeedFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFeeds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      _version
      _deleted
      _lastChangedAt
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
`;
export const syncHistories = /* GraphQL */ `
  query SyncHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHistories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      _version
      _deleted
      _lastChangedAt
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
`;
