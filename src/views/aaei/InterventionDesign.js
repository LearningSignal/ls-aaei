import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    CTextarea,
    CInput,
    CInputRadio,
    CLabel,
    CSelect,
    CRow,
    CSwitch,
    CBadge,
    CModalBody,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalFooter,
    CDataTable,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import interventionsListData from "./InterventionsListData";

const InterventionDesign = () => {
    // const [collapsed, setCollapsed] = React.useState(true);
    // const [showElements, setShowElements] = React.useState(true);

    const [modal, setModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    function viewModal(title) {
        setModal(true);
        setModalTitle(title);
    }

    return (
        <>
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 이름 정하기
                            <small> name</small>
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
                                            이름
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput
                                            id="text-input"
                                            name="text-input"
                                            placeholder="개입 이름"
                                        />
                                        <CFormText>
                                            학습개입 이름을 입력하세요.
                                        </CFormText>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">
                                            설명
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="3"
                                            placeholder="개입에 대한 설명"
                                        />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton
                                type="submit"
                                className="mr-1"
                                size="sm"
                                color="primary"
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 조건
                                정하기
                            </CButton>
                            <CButton
                                type="reset"
                                className="mr-1"
                                size="sm"
                                color="info"
                                onClick={() => viewModal("기존 개입 불러오기")}
                            >
                                <CIcon name="cil-scrubber" /> 기존 개입 불러오기
                            </CButton>
                            <CButton
                                type="reset"
                                className="mr-1"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 이름
                                초기화하기
                            </CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
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
                                        <CSelect
                                            custom
                                            name="select"
                                            id="select"
                                        >
                                            <option value="0">컬럼 선택</option>
                                            <option value="1">과제 #1</option>
                                            <option value="2">과제 #2</option>
                                            <option value="3">과제 #3</option>
                                            <option value="4">과제 #4</option>
                                            <option value="5">과제 #5</option>
                                            <option value="6">과제 #6</option>
                                            <option value="7">과제 #7</option>
                                            <option value="8">과제 #8</option>
                                            <option value="9">과제 #9</option>
                                            <option value="10">퀴즈 #1</option>
                                            <option value="11">퀴즈 #2</option>
                                            <option value="12">퀴즈 #3</option>
                                            <option value="13">퀴즈 #4</option>
                                            <option value="14">
                                                중간고사 #1
                                            </option>
                                        </CSelect>
                                    </CCol>
                                    <CCol xs="3" md="3">
                                        <CSelect
                                            custom
                                            name="select"
                                            id="select"
                                        >
                                            <option value="0">조건 선택</option>
                                            <option value="1">이하의</option>
                                            <option value="1">초과의</option>
                                            <option value="1">미만의</option>
                                            <option value="1">초과의</option>
                                            <option value="1">같은</option>
                                        </CSelect>
                                    </CCol>
                                    <CCol xs="3" md="2">
                                        <CInput
                                            id="cvv"
                                            placeholder="0"
                                            required
                                        />
                                    </CCol>
                                    <CCol xs="3" md="1">
                                        <CButton color="secondary">
                                            추가
                                        </CButton>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel></CLabel>
                                    </CCol>
                                    <CCol md="1">
                                        <CFormGroup
                                            variant="custom-radio"
                                            inline
                                        >
                                            <CInputRadio
                                                custom
                                                id="inline-radio1"
                                                name="inline-radios"
                                                value="option1"
                                            />
                                            <CLabel
                                                variant="custom-checkbox"
                                                htmlFor="inline-radio1"
                                            >
                                                AND
                                            </CLabel>
                                        </CFormGroup>
                                        <CFormGroup
                                            variant="custom-radio"
                                            inline
                                        >
                                            <CInputRadio
                                                custom
                                                id="inline-radio2"
                                                name="inline-radios"
                                                value="option2"
                                            />
                                            <CLabel
                                                variant="custom-checkbox"
                                                htmlFor="inline-radio2"
                                            >
                                                OR
                                            </CLabel>
                                        </CFormGroup>
                                    </CCol>
                                    <CCol xs="3" md="1">
                                        <CButton color="secondary">
                                            추가
                                        </CButton>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">
                                            개입 조건 #1
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput
                                            id="text-input"
                                            name="text-input"
                                            placeholder="과제 #1 < 5"
                                            disabled
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input"></CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CButton color="info">AND</CButton>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input">
                                            개입 조건 #2
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput
                                            id="text-input"
                                            name="text-input"
                                            placeholder="중간고사 #1 <50"
                                            disabled
                                        />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
                        </CCardBody>
                        <CCardFooter>
                            <CButton
                                type="submit"
                                className="mr-1"
                                size="sm"
                                color="primary"
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
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 시점 정하기
                            <small> time</small>
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
                                        <CLabel>시점</CLabel>
                                    </CCol>
                                    <CCol md="9">
                                        <CFormGroup
                                            variant="custom-radio"
                                            inline
                                        >
                                            <CInputRadio
                                                custom
                                                id="inline-radio3"
                                                name="inline-radios"
                                                value="option1"
                                            />
                                            <CLabel
                                                variant="custom-checkbox"
                                                htmlFor="inline-radio3"
                                            >
                                                즉시
                                            </CLabel>
                                        </CFormGroup>
                                        <CFormGroup
                                            variant="custom-radio"
                                            inline
                                        >
                                            <CInputRadio
                                                custom
                                                id="inline-radio4"
                                                name="inline-radios"
                                                value="option2"
                                            />
                                            <CLabel
                                                variant="custom-checkbox"
                                                htmlFor="inline-radio4"
                                            >
                                                특정 날짜에
                                            </CLabel>
                                        </CFormGroup>
                                        <CFormGroup
                                            variant="custom-radio"
                                            inline
                                        >
                                            <CInputRadio
                                                custom
                                                id="inline-radio5"
                                                name="inline-radios"
                                                value="option3"
                                            />
                                            <CLabel
                                                variant="custom-checkbox"
                                                htmlFor="inline-radio5"
                                            >
                                                주기적으로
                                            </CLabel>
                                        </CFormGroup>
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="date-input">
                                            특정 날짜 선택
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput
                                            type="date"
                                            id="date-input"
                                            name="date-input"
                                            placeholder="date"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="select">
                                            주기 선택
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CSelect
                                            custom
                                            name="select"
                                            id="select"
                                        >
                                            <option value="0">주기 선택</option>
                                            <option value="1">1주</option>
                                            <option value="2">2주</option>
                                            <option value="3">3주</option>
                                            <option value="4">4주</option>
                                        </CSelect>
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
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 대상
                                정하기
                            </CButton>
                            <CButton
                                className="mr-1"
                                type="reset"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 시점
                                초기화하기
                            </CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
            <CRow>
                <CCol xs="12" md="12">
                    <CCard>
                        <CCardHeader>
                            학습개입 대상 정하기
                            <small> recipient</small>
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
                                            개입 대상
                                        </CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CCard>
                                            <CCardBody>
                                                <CButton
                                                    className="mr-1"
                                                    color="secondary"
                                                >
                                                    김현도{" "}
                                                    <CBadge
                                                        color="primary"
                                                        shape="pill"
                                                        style={{
                                                            position: "static",
                                                        }}
                                                    >
                                                        X
                                                    </CBadge>
                                                </CButton>
                                                <CButton
                                                    className="mr-1"
                                                    color="secondary"
                                                >
                                                    정동훈{" "}
                                                    <CBadge
                                                        color="primary"
                                                        shape="pill"
                                                        style={{
                                                            position: "static",
                                                        }}
                                                    >
                                                        X
                                                    </CBadge>
                                                </CButton>
                                            </CCardBody>
                                        </CCard>
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
                                        />
                                        <CFormText>
                                            제목을 입력하세요.
                                        </CFormText>
                                    </CCol>
                                    <CCol xs="3" md="2">
                                        <CButton color="secondary">
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
                                        <CTextarea
                                            name="textarea-input"
                                            id="textarea-input"
                                            rows="9"
                                            placeholder="학습개입 내용 작성"
                                        />
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="textarea-input"></CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CButton color="secondary">
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
                                        />
                                    </CCol>
                                </CFormGroup>
                            </CForm>
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
                                                items={interventionsListData}
                                                sorter="{{ external: true, resetable: true }}"
                                                fields={[
                                                    {
                                                        key: "name",
                                                        label: "이름",
                                                        sorter: true,
                                                        _classes:
                                                            "font-weight-bold",
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
                                                ]}
                                                scopedSlots={{
                                                    name: (item) => (
                                                        <td
                                                            onClick={() =>
                                                                setModal(!modal)
                                                            }
                                                        >
                                                            <Link to="#">
                                                                {item.name}
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
                        <CCardFooter>
                            <CButton
                                href="/#/interventionlist"
                                className="mr-1"
                                type="submit"
                                size="sm"
                                color="primary"
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 활성화
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
                    </CCard>
                </CCol>
            </CRow>
        </>
    );
};

export default InterventionDesign;
