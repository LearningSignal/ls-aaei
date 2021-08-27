import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
} from "@coreui/react";

import { API, graphqlOperation } from "aws-amplify";
import { getCourseWithAttributesWithEnrollmentsWithDatas } from "../../../graphql/customQueries";

import StudentAnalyticsModal from "../commons/StudentAnalyticsModal";

const testCourseID = "1"; // TEST 데이터: 디자인사(01)

const LearningAnalytics = () => {
    // const queryPage = useLocation().search.match(/page=([0-9]+)/, "");

    const [studentAnalyticsModalState, setStudentAnalyticsModalState] =
        useState(false);
    const [studentData, setStudentData] = useState({});

    const [course, setCourse] = useState({});
    const [listView, setListView] = useState([
        {
            id: 0,
            name: "",
            attendance: "",
            assignment: "",
            quiz: "",
            exam: "",
            discussion: "",
            material: "",
            lastActivityAt: "",
        },
    ]);

    async function fetchCourse() {
        const oneCourse = await API.graphql(
            graphqlOperation(getCourseWithAttributesWithEnrollmentsWithDatas, {
                id: testCourseID,
            })
        );

        setCourse(oneCourse.data.getCourse);
        setListView(
            convertStudentEnrollmentsToListView(
                oneCourse.data.getCourse.enrollments.items
            )
        );
    }

    // NEXT: 데이터 확정되면 변경!!!
    function convertStudentEnrollmentToListViewRow(student) {
        let result = {
            id: student.id,
            name: student.user.name,
            attendance: "9/9",
            assignment: "6/6",
            quiz: "4/4",
            exam: "1/1",
            discussion: "3/3",
            material: "9/9",
            lastActivityAt: student.lastActivityAt,
        };

        return result;
    }

    function showStudentAnalyticsModal(e) {
        const id = e.target.getAttribute("value");

        setStudentData(
            course.enrollments.items.filter(
                (enrollment) => enrollment.id === id
            )[0]
        );
        setStudentAnalyticsModalState(!studentAnalyticsModalState);
    }

    function closeStudentAnalyticsModal() {
        setStudentAnalyticsModalState(!studentAnalyticsModalState);
    }

    function convertStudentEnrollmentsToListView(enrollments) {
        console.log(enrollments);
        return enrollments
            .filter((item) => item.type === "STUDENT")
            .map((item) => convertStudentEnrollmentToListViewRow(item));
    }

    useEffect(() => {
        fetchCourse();
    }, []);

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        학생 목록
                        <small className="text-muted"> student list</small>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={listView}
                            sorter="{{ external: true, resetable: true }}"
                            fields={[
                                {
                                    key: "name",
                                    label: "이름",
                                    sorter: true,
                                    _classes: "font-weight-bold",
                                },
                                {
                                    key: "attendance",
                                    label: "출석",
                                    sorter: true,
                                },
                                {
                                    key: "assignment",
                                    label: "과제",
                                    sorter: true,
                                },
                                {
                                    key: "quiz",
                                    label: "퀴즈",
                                    sorter: true,
                                },
                                {
                                    key: "exam",
                                    label: "시험",
                                    sorter: true,
                                },
                                {
                                    key: "discussion",
                                    label: "토론",
                                    sorter: true,
                                },
                                {
                                    key: "material",
                                    label: "강의자료",
                                    sorter: true,
                                },
                                {
                                    key: "lastActivityAt",
                                    label: "마지막 활동일",
                                    sorter: true,
                                },
                            ]}
                            hover
                            scopedSlots={{
                                name: (item) => (
                                    <td>
                                        <Link
                                            to="#"
                                            value={item.id}
                                            onClick={showStudentAnalyticsModal}
                                        >
                                            {item.name}
                                        </Link>
                                    </td>
                                ),
                            }}
                        />
                        <StudentAnalyticsModal
                            modalState={studentAnalyticsModalState}
                            closeModal={closeStudentAnalyticsModal}
                            data={studentData}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default LearningAnalytics;
