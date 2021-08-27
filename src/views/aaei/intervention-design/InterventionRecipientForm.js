import React from "react";

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import SelectFormRow from "../base/SelectFormRow";
import RecipientList from "./RecipientList";

const InterventionRecipientForm = (props) => {
    return (
        props.view && (
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 대상 정하기
                            <small> recipient</small>
                        </CCardHeader>
                        <CCardBody>
                            <SelectFormRow
                                view={true}
                                firstColMd="3"
                                secondColMd="9"
                                label="대상 추가"
                                firstOptionString="대상 추가"
                                datas={props.notRecipients}
                                onChange={props.addRecipient}
                            />
                            <RecipientList
                                label="개입 대상"
                                datas={props.recipients}
                                removeRecipient={props.removeRecipient}
                                showStudentAnalyticsModal={
                                    props.showStudentAnalyticsModal
                                }
                            />
                        </CCardBody>
                        <CCardFooter>
                            <CButton
                                className="mr-1"
                                type="submit"
                                size="sm"
                                color="primary"
                                onClick={
                                    props.clickInterventionContentActivationButton
                                }
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 내용
                                정하기
                            </CButton>
                            <CButton
                                className="mr-1"
                                type="reset"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 대상
                                초기화하기
                            </CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        )
    );
};

export default InterventionRecipientForm;
