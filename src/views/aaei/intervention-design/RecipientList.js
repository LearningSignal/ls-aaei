import React from "react";

import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CFormGroup,
    CLabel,
    CBadge,
} from "@coreui/react";

const RecipientList = (props) => {
    return (
        <CFormGroup row>
            <CCol md="3">
                <CLabel htmlFor="text-input">{props.label}</CLabel>
            </CCol>
            <CCol xs="12" md="9">
                <CCard>
                    <CCardBody>
                        {props.datas.map((recipient) => {
                            return (
                                <CButton
                                    className="mr-1 mt-1 btn-sm"
                                    color="secondary"
                                >
                                    <span
                                        value={recipient.id}
                                        onClick={
                                            props.showStudentAnalyticsModal
                                        }
                                    >
                                        {recipient.name}{" "}
                                    </span>
                                    <CBadge
                                        value={recipient.id}
                                        color="danger"
                                        shape="pill"
                                        style={{
                                            position: "static",
                                        }}
                                        onClick={props.removeRecipient}
                                    >
                                        X
                                    </CBadge>
                                </CButton>
                            );
                        })}
                    </CCardBody>
                </CCard>
            </CCol>
        </CFormGroup>
    );
};

export default RecipientList;
