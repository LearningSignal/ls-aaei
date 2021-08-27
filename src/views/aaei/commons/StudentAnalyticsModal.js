import React from "react";
import { Link } from "react-router-dom";
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable,
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
} from "@coreui/react";

import { CChartLine, CChartRadar } from "@coreui/react-chartjs";

import studentInterventionsData from "../StudentInterventionsData";

const StudentAnalyticsModal = (props) => {
    return (
        props.modalState && (
            <CModal
                show={props.modalState}
                onClose={props.closeModal}
                size="lg"
            >
                <CModalHeader closeButton>
                    <CModalTitle>{props.data.user.name}</CModalTitle>{" "}
                </CModalHeader>
                <CCard>
                    <CModalBody>
                        <CButton className="mr-1 mt-1 mb-1" color="secondary">
                            출석{" "}
                            <CBadge
                                color="primary"
                                shape="pill"
                                style={{ position: "static" }}
                            >
                                8/9
                            </CBadge>
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            1주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            2주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            3주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            4주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            5주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            6주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="danger">
                            7주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            8주차
                        </CButton>
                        <CButton className="mr-1 mt-1 mb-1" color="primary">
                            9주차
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
                                        backgroundColor: "rgba(255,99,132,0.2)",
                                        borderColor: "rgba(255,99,132,1)",
                                        pointBackgroundColor:
                                            "rgba(255,99,132,1)",
                                        pointBorderColor: "#fff",
                                        pointHoverBackgroundColor: "#fff",
                                        pointHoverBorderColor:
                                            "rgba(255,99,132,1)",
                                        tooltipLabelColor: "rgba(255,99,132,1)",
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
                                        borderColor: "rgba(179,181,198,1)",
                                        pointBackgroundColor:
                                            "rgba(179,181,198,1)",
                                        pointBorderColor: "#fff",
                                        pointHoverBackgroundColor: "#fff",
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
                                        backgroundColor: "rgb(0,216,255,0.9)",
                                        data: [80, 90, 100, 70, 0, 70],
                                    },
                                    {
                                        label: "평균 점수",
                                        // backgroundColor:
                                        //     "rgb(0,216,255,0.9)",
                                        data: [39, 80, 40, 35, 40, 20],
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
                                        backgroundColor: "rgb(0,216,255,0.9)",
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
                        <CCardHeader>시험</CCardHeader>
                        <CCardBody>
                            <CChartLine
                                datasets={[
                                    {
                                        label: "획득 점수",
                                        backgroundColor: "rgb(0,216,255,0.9)",
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
                                        _classes: "font-weight-bold",
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
                                                {item.interventionName}
                                            </Link>
                                        </td>
                                    ),
                                }}
                            />
                        </CCardBody>
                    </CCard>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={props.closeModal}>
                        닫기
                    </CButton>
                </CModalFooter>
            </CModal>
        )
    );
};

export default StudentAnalyticsModal;
