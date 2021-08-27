import React from "react";

import {
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CFormGroup,
    CLabel,
    CRow,
} from "@coreui/react";

import CSelectWrapper from "../base/CSelectWrapper";
import SelectFormRow from "../base/SelectFormRow";
import CButtonWrapper from "../base/CButtonWrapper";
import DatePickerFormRow from "../base/DatePickerFormRow";

const InterventionTimeForm = (props) => {
    return (
        props.view && (
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 시점 정하기
                            <small> time</small>
                        </CCardHeader>
                        <CCardBody>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel>시점</CLabel>
                                </CCol>
                                <CCol md="9">
                                    <CSelectWrapper
                                        datas={[
                                            {
                                                id: "NOW",
                                                name: "즉시 발송",
                                            },
                                            {
                                                id: "BOOK",
                                                name: "예약 발송",
                                            },
                                            {
                                                id: "CYCLE",
                                                name: "주기 발송",
                                            },
                                        ]}
                                        onChange={props.changeTimeType}
                                    />
                                </CCol>
                            </CFormGroup>
                            <DatePickerFormRow
                                label="날짜 선택"
                                view={props.datePickerView}
                                onChange={props.changeSendDate}
                            />
                            <SelectFormRow
                                label="주기 선택"
                                view={props.periodPickerView}
                                datas={[
                                    { id: "1", name: "1주" },
                                    { id: "2", name: "2주" },
                                    { id: "3", name: "3주" },
                                    { id: "4", name: "4주" },
                                ]}
                                firstColMd="3"
                                secondColMd="9"
                                onChange={props.changePeriod}
                            />
                        </CCardBody>
                        <CCardFooter>
                            <CButtonWrapper
                                type="submit"
                                color="primary"
                                view={props.recipientActivationButton}
                                onClick={
                                    props.clickInterventionRecipientActivationButton
                                }
                                label="학습개입 대상 정하기"
                            />
                            <CButtonWrapper
                                type="submit"
                                color="primary"
                                view={props.contentActivationButton}
                                onClick={
                                    props.clickInterventionContentActivationButton
                                }
                                label="학습개입 내용 정하기"
                            />
                            <CButtonWrapper
                                type="reset"
                                color="danger"
                                view={true}
                                // onClick={
                                //     clickInterventionRecipientActivationButton
                                // }
                                label="학습개입 시점 초기화하기"
                            />
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        )
    );
};

export default InterventionTimeForm;
