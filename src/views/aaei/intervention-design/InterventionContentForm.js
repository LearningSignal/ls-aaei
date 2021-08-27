import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

import {
    CButton,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CForm,
    CFormGroup,
    CFormText,
    CInput,
    CLabel,
    CSelect,
    CRow,
    CSwitch,
    CModalBody,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CCollapse,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import SelectColumnOptions from "../base/SelectColumnOptions";
import { Redirect } from "react-router-dom";

const InterventionContentForm = (props) => {
    const [accordion, setAccordion] = useState(0);

    const titleRef = useRef(null);
    const editorRef = useRef(null);

    function moveEnd(e) {
        const temp = e.target.value;
        e.target.value = "";
        e.target.value = temp;
    }

    return (
        props.view && (
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 내용 정하기
                            <small> content</small>
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
                                        <CLabel htmlFor="text-input">
                                            제목
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="7">
                                        <CInput
                                            id="text-input"
                                            name="text-input"
                                            placeholder="학습개입 제목 작성"
                                            innerRef={titleRef}
                                            value={props.title}
                                            onChange={props.onChangeTitle}
                                            onFocus={moveEnd}
                                        />
                                        <CFormText>
                                            제목을 입력하세요.
                                        </CFormText>
                                    </CCol>
                                    <CCol xs="3" md="2">
                                        <CButton
                                            color="secondary"
                                            value="title"
                                            onClick={
                                                props.clickReplaceStringSelectorButton
                                            }
                                            onFocus={(e) =>
                                                titleRef.current.focus()
                                            }
                                        >
                                            대체 문자열 입력
                                        </CButton>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">
                                            내용
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        {/* <TinyMCE
                                            moveEnd={moveEnd}
                                            value={props.content}
                                            onChange={props.onChangeContent}
                                            editorRef={editorRef}
                                        /> */}
                                        <Editor
                                            apiKey="9nl2qho2tsix9aff1fsuj07zsvbssq517gduivkkq7b0v7ag"
                                            onInit={(evt, editor) =>
                                                (editorRef.current = editor)
                                            }
                                            initialValue="<p></p>"
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    "advlist autolink lists link image charmap print preview anchor",
                                                    "searchreplace visualblocks code fullscreen",
                                                    "insertdatetime media table paste code help wordcount",
                                                ],
                                                toolbar:
                                                    "undo redo | formatselect | " +
                                                    "bold italic backcolor | alignleft aligncenter " +
                                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                                    "removeformat | help",
                                                content_style:
                                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                                            }}
                                            value={props.content}
                                            onEditorChange={
                                                props.onChangeContent
                                            }
                                            onFocus={props.moveEnd}
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input"></CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CButton
                                            color="secondary"
                                            value="content"
                                            onClick={
                                                props.clickReplaceStringSelectorButton
                                            }
                                            onFocus={(e) => {
                                                editorRef.current.focus();
                                            }}
                                        >
                                            대체 문자열 입력
                                        </CButton>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol
                                        tag="label"
                                        sm="3"
                                        className="col-form-label"
                                    >
                                        LMS 개입
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className={"mx-1"}
                                            color={"primary"}
                                            labelOn={"\u2713"}
                                            labelOff={"\u2715"}
                                            size={"lg"}
                                            defaultChecked
                                            onChange={
                                                props.changeLmsIntervention
                                            }
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol
                                        tag="label"
                                        sm="3"
                                        className="col-form-label"
                                    >
                                        EMAIL 개입
                                    </CCol>
                                    <CCol sm="9">
                                        <CSwitch
                                            className={"mx-1"}
                                            color={"primary"}
                                            labelOn={"\u2713"}
                                            labelOff={"\u2715"}
                                            size={"lg"}
                                            defaultChecked
                                            onChange={
                                                props.changeEmailIntervention
                                            }
                                        />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton
                                className="mr-1"
                                type="submit"
                                size="sm"
                                color="primary"
                                onClick={
                                    props.clickInterventionActivationButton
                                }
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 활성화
                                {props.interventionListView && (
                                    <Redirect to="/interventionlist" />
                                )}
                            </CButton>
                            <CButton
                                className="mr-1"
                                type="reset"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 내용
                                초기화하기
                            </CButton>
                        </CCardFooter>

                        <CModal
                            show={props.replaceStringSelectorModal}
                            onClose={props.closeReplaceStringSelectorModal}
                            size="lg"
                        >
                            <CModalHeader>
                                <CModalTitle>대체 문자열 입력</CModalTitle>{" "}
                            </CModalHeader>
                            <CModalBody>
                                <CCard>
                                    <div id="accordion">
                                        <CCard className="mb-0">
                                            <CCardHeader id="headingOne">
                                                <CButton
                                                    block
                                                    color="link"
                                                    className="text-left m-0 p-0"
                                                    onClick={() =>
                                                        setAccordion(
                                                            accordion === 0
                                                                ? null
                                                                : 0
                                                        )
                                                    }
                                                >
                                                    <h5 className="m-0 p-0">
                                                        학생 데이터
                                                    </h5>
                                                </CButton>
                                            </CCardHeader>
                                            <CCollapse show={accordion === 0}>
                                                <CCardBody>
                                                    <CButton
                                                        className="mr-1"
                                                        color="primary"
                                                        value="${student_name}"
                                                        onClick={
                                                            props.inputReplaceStringByStudentData
                                                        }
                                                    >
                                                        이름
                                                    </CButton>
                                                    <CButton
                                                        className="mr-1"
                                                        color="primary"
                                                        value="${student_id}"
                                                        onClick={
                                                            props.inputReplaceStringByStudentData
                                                        }
                                                    >
                                                        학번
                                                    </CButton>
                                                    <CButton
                                                        className="mr-1"
                                                        color="primary"
                                                        value="${student_email}"
                                                        onClick={
                                                            props.inputReplaceStringByStudentData
                                                        }
                                                    >
                                                        이메일
                                                    </CButton>
                                                </CCardBody>
                                            </CCollapse>
                                        </CCard>
                                        <CCard className="mb-0">
                                            <CCardHeader id="headingThree">
                                                <CButton
                                                    block
                                                    color="link"
                                                    className="text-left m-0 p-0"
                                                    onClick={() =>
                                                        setAccordion(
                                                            accordion === 1
                                                                ? null
                                                                : 1
                                                        )
                                                    }
                                                >
                                                    <h5 className="m-0 p-0">
                                                        컬럼 데이터
                                                    </h5>
                                                </CButton>
                                            </CCardHeader>
                                            <CCollapse show={accordion === 1}>
                                                <CCardBody>
                                                    <CSelect
                                                        custom
                                                        defaultValue={""}
                                                        name="select"
                                                        onChange={
                                                            props.selectReplaceStringByColumnData
                                                        }
                                                    >
                                                        <SelectColumnOptions
                                                            firstOptionString="컬럼 선택"
                                                            datas={
                                                                props.attributes
                                                            }
                                                        />
                                                    </CSelect>
                                                    <CButton
                                                        className="mt-2"
                                                        color="primary"
                                                        onClick={
                                                            props.inputReplaceStringByColumnData
                                                        }
                                                    >
                                                        선택 완료
                                                    </CButton>
                                                </CCardBody>
                                            </CCollapse>
                                        </CCard>
                                    </div>
                                </CCard>
                            </CModalBody>
                            <CModalFooter>
                                <CButton
                                    color="secondary"
                                    onClick={
                                        props.closeReplaceStringSelectorModal
                                    }
                                >
                                    닫기
                                </CButton>
                            </CModalFooter>
                        </CModal>
                    </CCard>
                </CCol>
            </CRow>
        )
    );
};

export default InterventionContentForm;
