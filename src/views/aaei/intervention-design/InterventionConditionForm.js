import React from "react";

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import CSelectWrapper from "../base/CSelectWrapper";
import FormConditionList from "./FormConditionList";

const InterventionConditionForm = (props) => {
    return (
        props.view && (
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 조건 정하기
                            <small> condition</small>
                        </CCardHeader>
                        <CCardBody>
                            <CForm
                                action=""
                                method="post"
                                encType="multipart/form-data"
                                className="form-horizontal"
                            >
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">
                                            개입 조건
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="3" md="3">
                                        <CSelectWrapper
                                            firstOptionString={"컬럼 선택"}
                                            datas={props.attributes}
                                            onChange={props.changeAttribute}
                                        />
                                    </CCol>
                                    <CCol xs="3" md="3">
                                        <CSelectWrapper
                                            firstOptionString={"컬럼 선택"}
                                            datas={[
                                                { id: "LTE", name: "≤" },
                                                { id: "GTE", name: "≥" },
                                                { id: "LT", name: "<" },
                                                { id: "GT", name: ">" },
                                                { id: "E", name: "=" },
                                                { id: "NE", name: "≠" },
                                            ]}
                                            onChange={props.changeConditionSign}
                                        />
                                    </CCol>
                                    <CCol xs="3" md="2">
                                        <CInput
                                            placeholder="0"
                                            required
                                            onChange={
                                                props.changeConditionValue
                                            }
                                        />
                                    </CCol>
                                    <CCol xs="3" md="1">
                                        <CButton
                                            color="secondary"
                                            onClick={props.addCondition}
                                        >
                                            조건 추가
                                        </CButton>
                                    </CCol>
                                </CFormGroup>
                                <FormConditionList
                                    onChange={props.changeAos}
                                    datas={props.conditions}
                                />
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton
                                type="submit"
                                className="mr-1"
                                size="sm"
                                color="primary"
                                onClick={
                                    props.clickInterventionTimeActivationButton
                                }
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 시점
                                정하기
                            </CButton>
                            <CButton
                                type="reset"
                                className="mr-1"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 조건
                                초기화하기
                            </CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        )
    );
};

export default InterventionConditionForm;
