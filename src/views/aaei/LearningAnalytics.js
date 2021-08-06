import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
} from "@coreui/react";

import { CChartLine, CChartRadar } from "@coreui/react-chartjs";

import studentInterventionsData from "./StudentInterventionsData";

import { API, graphqlOperation } from "aws-amplify";
import { getCourseWithAttributesWithEnrollmentsWithDatas } from "../../graphql/customQueries";

const LearningAnalytics = () => {
    // const queryPage = useLocation().search.match(/page=([0-9]+)/, "");

    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

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
                // NEXT: LTI 과목 정보로 변경!!!
                id: "1",
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

    function convertStudentEnrollmentsToListView(enrollments) {
        console.log(enrollments);
        return enrollments
            .filter((item) => item.type === "STUDENT")
            .map((item) => convertStudentEnrollmentToListViewRow(item));
    }

    function viewModal(item) {
        setModal(true);
        setModalTitle(item.name);
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
                            // clickableRows
                            // onRowClick={(item) => viewModal(item)}
                            scopedSlots={{
                                name: (item) => (
                                    <td onClick={() => viewModal(item)}>
                                        <Link to="#">{item.name}</Link>
                                    </td>
                                ),
                            }}
                        />
                        <CModal
                            show={modal}
                            onClose={() => setModal(!modal)}
                            size="lg"
                        >
                            <CModalHeader closeButton>
                                <CModalTitle>{modalTitle}</CModalTitle>{" "}
                            </CModalHeader>
                            <CCard>
                                <CModalBody>
                                    <CButton className="mr-1" color="secondary">
                                        출석{" "}
                                        <CBadge
                                            color="primary"
                                            shape="pill"
                                            style={{ position: "static" }}
                                        >
                                            8/9
                                        </CBadge>
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="danger">
                                        결석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                    <CButton className="mr-1" color="primary">
                                        출석
                                    </CButton>
                                </CModalBody>
                            </CCard>
                            <CModalBody>
                                <CCard>
                                    <CCardHeader>점수 분포</CCardHeader>
                                    <CCardBody>
                                        <CChartRadar
                                            datasets={[
                                                {
                                                    label: "총 획득 점수",
                                                    backgroundColor:
                                                        "rgba(255,99,132,0.2)",
                                                    borderColor:
                                                        "rgba(255,99,132,1)",
                                                    pointBackgroundColor:
                                                        "rgba(255,99,132,1)",
                                                    pointBorderColor: "#fff",
                                                    pointHoverBackgroundColor:
                                                        "#fff",
                                                    pointHoverBorderColor:
                                                        "rgba(255,99,132,1)",
                                                    tooltipLabelColor:
                                                        "rgba(255,99,132,1)",
                                                    data: [
                                                        (8 / 9) * 100,
                                                        0.85 * 100,
                                                        0.6 * 100,
                                                        0.91 * 100,
                                                        0.3 * 100,
                                                        0.75 * 100,
                                                    ],
                                                },
                                                {
                                                    label: "평균 점수",
                                                    backgroundColor:
                                                        "rgba(179,181,198,0.2)",
                                                    borderColor:
                                                        "rgba(179,181,198,1)",
                                                    pointBackgroundColor:
                                                        "rgba(179,181,198,1)",
                                                    pointBorderColor: "#fff",
                                                    pointHoverBackgroundColor:
                                                        "#fff",
                                                    pointHoverBorderColor:
                                                        "rgba(179,181,198,1)",
                                                    tooltipLabelColor:
                                                        "rgba(179,181,198,1)",
                                                    data: [
                                                        (7 / 9) * 100,
                                                        (4 / 6) * 100,
                                                        (3 / 4) * 100,
                                                        (1 / 1) * 100,
                                                        (2 / 3) * 100,
                                                        (6 / 9) * 100,
                                                    ],
                                                },
                                            ]}
                                            options={{
                                                aspectRatio: 1.5,
                                                tooltips: {
                                                    enabled: true,
                                                },
                                                scales: {
                                                    r: {
                                                        angleLines: {
                                                            display: false,
                                                        },
                                                        min: 0.0,
                                                        max: 100.0,
                                                    },
                                                },
                                            }}
                                            labels={[
                                                "출석",
                                                "과제",
                                                "퀴즈",
                                                "시험",
                                                "토론",
                                                "강의자료",
                                            ]}
                                        />
                                    </CCardBody>
                                </CCard>
                                <CCard>
                                    <CCardHeader>과제</CCardHeader>
                                    <CCardBody>
                                        <CChartLine
                                            datasets={[
                                                {
                                                    label: "획득 점수",
                                                    backgroundColor:
                                                        "rgb(0,216,255,0.9)",
                                                    data: [
                                                        80, 90, 100, 70, 0, 70,
                                                    ],
                                                },
                                                {
                                                    label: "평균 점수",
                                                    // backgroundColor:
                                                    //     "rgb(0,216,255,0.9)",
                                                    data: [
                                                        39, 80, 40, 35, 40, 20,
                                                    ],
                                                },
                                            ]}
                                            options={{
                                                tooltips: {
                                                    enabled: true,
                                                },
                                            }}
                                            labels="indexes"
                                        />
                                    </CCardBody>
                                </CCard>
                                <CCard>
                                    <CCardHeader>퀴즈</CCardHeader>
                                    <CCardBody>
                                        <CChartLine
                                            datasets={[
                                                {
                                                    label: "획득 점수",
                                                    backgroundColor:
                                                        "rgb(0,216,255,0.9)",
                                                    data: [80, 0, 50, 0],
                                                },
                                                {
                                                    label: "평균 점수",
                                                    data: [40, 35, 40, 20],
                                                },
                                            ]}
                                            options={{
                                                tooltips: {
                                                    enabled: true,
                                                },
                                            }}
                                            labels="indexes"
                                        />
                                    </CCardBody>
                                </CCard>
                                <CCard>
                                    <CCardHeader>학습개입 내역</CCardHeader>
                                    <CCardBody>
                                        <CDataTable
                                            items={studentInterventionsData}
                                            sorter="{{ external: true, resetable: true }}"
                                            fields={[
                                                {
                                                    key: "interventionName",
                                                    label: "학습개입 이름",
                                                    sorter: true,
                                                    _classes:
                                                        "font-weight-bold",
                                                },
                                                {
                                                    key: "interventionDescription",
                                                    label: "설명",
                                                    sorter: false,
                                                },
                                                {
                                                    key: "lmsYn",
                                                    label: "LMS 메시지 유무",
                                                    sorter: false,
                                                },
                                                {
                                                    key: "emailYn",
                                                    label: "Email 유무",
                                                    sorter: false,
                                                },
                                                // {
                                                //     key: "smsYn",
                                                //     label: "SMS 유무",
                                                //     sorter: false,
                                                // },
                                                // {
                                                //     key: "snsYn",
                                                //     label: "SNS 유무",
                                                //     sorter: false,
                                                // },
                                                {
                                                    key: "date",
                                                    label: "보낸 날짜",
                                                    sorter: true,
                                                },
                                            ]}
                                            scopedSlots={{
                                                interventionName: (item) => (
                                                    <td>
                                                        <Link to="/interventionlist">
                                                            {
                                                                item.interventionName
                                                            }
                                                        </Link>
                                                    </td>
                                                ),
                                            }}
                                        />
                                    </CCardBody>
                                </CCard>
                            </CModalBody>
                            <CModalFooter>
                                <CButton
                                    color="secondary"
                                    onClick={() => setModal(!modal)}
                                >
                                    닫기
                                </CButton>
                            </CModalFooter>
                        </CModal>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default LearningAnalytics;
