import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
    CModalBody,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CButton,
    CBadge,
} from "@coreui/react";

import interventionsListData from "./InterventionsListData";
import studentsInterventionsData from "./StudentsInterventionsData";

const InterventionList = () => {
    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const getBadge = (status) => {
        switch (status) {
            case "COMPLETE":
                return "success";
            case "ACTIVE":
                return "primary";
            default:
                return "secondary";
        }
    };

    function viewModal(item) {
        setModal(true);
        setModalTitle(item.name);
    }

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        학습개입 목록
                        <small className="text-muted"> intervention list</small>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={interventionsListData}
                            sorter="{{ external: true, resetable: true }}"
                            fields={[
                                {
                                    key: "name",
                                    label: "이름",
                                    sorter: true,
                                    _classes: "font-weight-bold",
                                },
                                {
                                    key: "description",
                                    label: "설명",
                                    sorter: false,
                                },
                                {
                                    key: "lmsYn",
                                    label: "LMS 개입",
                                    sorter: false,
                                },
                                {
                                    key: "emailYn",
                                    label: "EMAIL 개입",
                                    sorter: false,
                                },
                                {
                                    key: "type",
                                    label: "시점",
                                    sorter: true,
                                },
                                {
                                    key: "date",
                                    label: "최근 개입 날짜",
                                    sorter: true,
                                },
                                {
                                    key: "state",
                                    label: "상태",
                                    sorter: true,
                                },
                            ]}
                            hover
                            scopedSlots={{
                                name: (item) => (
                                    <td onClick={() => viewModal(item)}>
                                        <Link to="#">{item.name}</Link>
                                    </td>
                                ),
                                state: (item) => (
                                    <td>
                                        <CBadge color={getBadge(item.state)}>
                                            {item.state}
                                        </CBadge>
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
                            <CModalBody>
                                <CCard>
                                    <CCardHeader>학습개입 내역</CCardHeader>
                                    <CCardBody>
                                        <CDataTable
                                            items={studentsInterventionsData}
                                            sorter="{{ external: true, resetable: true }}"
                                            fields={[
                                                {
                                                    key: "studentName",
                                                    label: "학생 이름",
                                                    sorter: true,
                                                    _classes:
                                                        "font-weight-bold",
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
                                                {
                                                    key: "feed",
                                                    label: "피드",
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

export default InterventionList;
