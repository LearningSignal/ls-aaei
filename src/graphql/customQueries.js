/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCourseWithAttributesWithEnrollmentsWithDatas = /* GraphQL */ `
    query GetCourseWithAttributesWithEnrollmentsWithDatas($id: ID!) {
        getCourse(id: $id) {
            id
            lmsCourseID
            lmsType
            name
            status
            term
            code
            enrollments(sortDirection: ASC) {
                items {
                    id
                    lastActivityAt
                    lmsEnrollmentId
                    lmsType
                    riskProbability
                    status
                    type
                    userID
                    datas {
                        items {
                            id
                            enrollmentID
                            attributeID
                            status
                            updatedAt
                            value
                        }
                        nextToken
                    }
                    user {
                        name
                    }
                }
            }
            attributes {
                nextToken
                items {
                    id
                    maxScore
                    name
                    scoreYN
                    status
                    type
                }
            }
        }
    }
`;
