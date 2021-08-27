import React, { useState, useEffect, useRef } from "react";

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
    CLabel,
    CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { API, graphqlOperation } from "aws-amplify";
import * as customQueries from "../../../graphql/customQueries";
import * as mutations from "../../../graphql/mutations";

import InterventionConditionForm from "../intervention-design/InterventionConditionForm";
import InterventionTimeForm from "../intervention-design/InterventionTimeForm";
import InterventionRecipientForm from "../intervention-design/InterventionRecipientForm";
import InterventionContentForm from "../intervention-design/InterventionContentForm";
import StudentAnalyticsModal from "../commons/StudentAnalyticsModal";

import DataMap from "../utils/DataMap";

const testCreatorUserID = "4"; // TEST 데이터: 류호경
const testCourseID = "1"; // TEST 데이터: 디자인사(01)

const InterventionDesign = () => {
    // Fetch Data
    const [course, setCourse] = useState({});
    const [enrollments, setEnrollments] = useState([]);
    const [attributes, setAttributes] = useState([]);
    const [recipients, setRecipients] = useState([]);
    const [notRecipients, setNotRecipients] = useState([]);
    const [studentData, setStudentData] = useState({});

    // Modal
    const [
        replaceStringSelectorModalState,
        setReplaceStringSelectorModalState,
    ] = useState(false);
    const [studentAnalyticsModalState, setStudentAnalyticsModalState] =
        useState(false);
    const [replaceStringSelectorType, setReplaceStringSelectorType] =
        useState("");
    const [replaceStringSelectorValue, setReplaceStringSelectorValue] =
        useState("");

    // View
    const [interventionConditionFormView, setInterventionConditionFormView] =
        useState(false);
    const [interventionTimeFormView, setInterventionTimeFormView] =
        useState(false);
    const [interventionRecipientFormView, setInterventionRecipientFormView] =
        useState(false);
    const [interventionContentFormView, setInterventionContentFormView] =
        useState(false);

    const [datePickerView, setDatePickerView] = useState(false);
    const [periodPickerView, setPeriodPickerView] = useState(false);
    const [recipientActivationButton, setRecipientActivationButton] =
        useState(true);
    const [contentActivationButton, setContentActivationButton] =
        useState(false);

    const [interventionListView, setInterventionListView] = useState(false);

    // Data
    const [currentConditionAttributeID, setCurrentConditionAttributeID] =
        useState("");
    const [currentConditionAttributeName, setCurrentConditionAttributeName] =
        useState("");
    const [currentConditionSign, setCurrentConditionSign] = useState("");
    const [currentConditionValue, setCurrentConditionValue] = useState(0);

    // Form
    const [interventionFormData, setInterventionFormData] = useState({
        creatorUserID: testCreatorUserID,
        courseID: testCourseID,
        name: "",
        description: "",
        conditions: [],
        recipientIDs: [],
        title: "",
        content: "",
        emailYN: "Y",
        lmsYN: "Y",
        smsYN: "N",
        snsYN: "N",
        type: "NOW",
        sendTime: "",
        status: "ACTIVE", // ACTIVE/INACTIVE/COMPLETED
    });

    // Function
    async function fetchCourse() {
        const oneCourse = await API.graphql(
            graphqlOperation(
                customQueries.getCourseWithAttributesWithEnrollmentsWithDatas,
                {
                    // NEXT: LTI 과목 정보로 변경!!!
                    id: testCourseID,
                }
            )
        );

        setCourse(oneCourse.data.getCourse);
        setAttributes(
            oneCourse.data.getCourse.attributes.items.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                if (a.name === b.name) {
                    if (a.createdAt < b.createdAt) return 1;
                    if (a.createdAt > b.createdAt) return -1;
                }
                return 0;
            })
        );
        setEnrollments(oneCourse.data.getCourse.enrollments.items);
    }

    function showStudentAnalyticsModal(e) {
        const id = e.target.getAttribute("value");
        setStudentData(
            enrollments.filter((enrollment) => enrollment.id === id)[0]
        );
        setStudentAnalyticsModalState(!studentAnalyticsModalState);
    }

    function closeStudentAnalyticsModal() {
        setStudentAnalyticsModalState(!studentAnalyticsModalState);
    }

    function addCondition() {
        let newFormData = {
            ...interventionFormData,
        };

        const currentCond = {
            attributeID: currentConditionAttributeID,
            attributeName: currentConditionAttributeName,
            sign: currentConditionSign,
            value: currentConditionValue,
        };

        let currentAos;
        if (newFormData.conditions.length >= 1) {
            currentAos = "AND";
        }

        newFormData.conditions.push({
            aos: currentAos,
            cond: currentCond,
        });

        setInterventionFormData(newFormData);
    }

    function addRecipient(e) {
        const id = e.target.value;

        setRecipients([
            ...recipients,
            ...notRecipients.filter((notRecipient) => notRecipient.id === id),
        ]);
        setNotRecipients(
            notRecipients.filter((notRecipient) => notRecipient.id !== id)
        );
    }

    function removeRecipient(e) {
        const id = e.target.getAttribute("value");

        setNotRecipients([
            ...notRecipients,
            ...recipients.filter((recipient) => recipient.id === id),
        ]);

        setRecipients(recipients.filter((recipient) => recipient.id !== id));
    }

    function changeName(e) {
        setInterventionFormData({
            ...interventionFormData,
            name: e.target.value,
        });
    }

    function changeTitle(e) {
        setInterventionFormData({
            ...interventionFormData,
            title: e.target.value,
        });
    }

    function changeContent(text) {
        setInterventionFormData({
            ...interventionFormData,
            content: text,
        });
    }

    function changeAos(e) {
        let newFormData = {
            ...interventionFormData,
        };

        newFormData.conditions[e.target.name].aos = e.target.value;

        setInterventionFormData(newFormData);
    }

    function changeAttribute(e) {
        setCurrentConditionAttributeID(e.target.value);
        setCurrentConditionAttributeName(
            attributes.filter((attr) => attr.id === e.target.value)[0].name
        );
    }

    function changeConditionSign(e) {
        setCurrentConditionSign(e.target.value);
    }

    function changeConditionValue(e) {
        setCurrentConditionValue(e.target.value);
    }

    function changeTimeType(e) {
        let newFormData = {
            ...interventionFormData,
        };

        newFormData.type = e.target.value;
        newFormData.sendTime = "";

        if (e.target.value === "NOW") {
            setRecipientActivationButton(true);
            setDatePickerView(false);
            setPeriodPickerView(false);
            setInterventionRecipientFormView(false);
            setContentActivationButton(false);
        } else if (e.target.value === "BOOK") {
            setRecipientActivationButton(false);
            setDatePickerView(true);
            setPeriodPickerView(false);
            setInterventionRecipientFormView(false);
            setContentActivationButton(true);
        } else {
            setRecipientActivationButton(false);
            setDatePickerView(false);
            setPeriodPickerView(true);
            setInterventionRecipientFormView(false);
            setContentActivationButton(true);

            newFormData.sendTime = "1";
        }

        setInterventionFormData(newFormData);
    }

    function changePeriod(e) {
        let newFormData = {
            ...interventionFormData,
        };

        newFormData.sendTime = e.target.value;
        setInterventionFormData(newFormData);
    }

    function changeSendDate(e) {
        let newFormData = {
            ...interventionFormData,
        };

        newFormData.sendTime = e.target.value;
        setInterventionFormData(newFormData);
    }

    function clickInterventionConditionActivationButton(e) {
        setInterventionConditionFormView(true);
    }

    function clickInterventionTimeActivationButton(e) {
        setInterventionTimeFormView(true);
    }

    function clickInterventionRecipientActivationButton(e) {
        const conditions = [...interventionFormData.conditions];
        const students = enrollments.filter(
            (enrollment) => enrollment.type !== "TEACHER"
        );
        let filteredEnrollments = [];

        if (conditions.length === 0) {
            filteredEnrollments = [...students];
        } else {
            conditions.forEach((condition) => {
                const aos = condition.aos;
                const attrID = condition.cond.attributeID;
                const sign = condition.cond.sign;
                const val = condition.cond.value;

                if (aos === "AND") {
                    filteredEnrollments = filteredEnrollments.filter(
                        (recipient) =>
                            DataMap.operateSign(
                                sign,
                                recipient.datas.items.filter(
                                    (item) => item.attributeID === attrID
                                )[0].value,
                                val
                            )
                    );
                } else {
                    filteredEnrollments = [
                        ...filteredEnrollments,
                        ...students.filter((student) =>
                            DataMap.operateSign(
                                sign,
                                student.datas.items.filter(
                                    (item) => item.attributeID === attrID
                                )[0].value,
                                val
                            )
                        ),
                    ];
                }
            });
        }

        const recipientIDs = Array.from(
            new Set(filteredEnrollments.map((enrollment) => enrollment.id))
        );

        const recipients = students
            .filter((student) => recipientIDs.includes(student.id))
            .map((student) => ({
                id: student.id,
                name: student.user.name,
            }));

        const notRecipients = students
            .filter((student) => !recipientIDs.includes(student.id))
            .map((student) => ({
                id: student.id,
                name: student.user.name,
            }));

        setRecipients(recipients);
        setNotRecipients(notRecipients);
        setInterventionRecipientFormView(true);
    }

    function clickInterventionContentActivationButton(e) {
        setInterventionContentFormView(true);
    }

    function clickReplaceStringSelectorButton(e) {
        setReplaceStringSelectorType(e.target.value);
        setReplaceStringSelectorModalState(!replaceStringSelectorModalState);
    }

    function closeReplaceStringSelectorModal(e) {
        setReplaceStringSelectorModalState(!replaceStringSelectorModalState);
    }

    function inputReplaceStringByStudentData(e) {
        let newFormData = {
            ...interventionFormData,
        };

        if (replaceStringSelectorType === "title") {
            newFormData.title += e.target.value;
        } else if (replaceStringSelectorType === "content") {
            newFormData.content =
                newFormData.content.substring(
                    0,
                    newFormData.content.length - 4
                ) +
                e.target.value +
                "</p>";
        }

        setReplaceStringSelectorModalState(!replaceStringSelectorModalState);
        setInterventionFormData(newFormData);
    }

    function selectReplaceStringByColumnData(e) {
        setReplaceStringSelectorValue("${attribute_" + e.target.value + "}");
    }

    function inputReplaceStringByColumnData(e) {
        let newFormData = {
            ...interventionFormData,
        };

        if (replaceStringSelectorType === "title") {
            newFormData.title += replaceStringSelectorValue;
        } else if (replaceStringSelectorType === "content") {
            newFormData.content =
                newFormData.content.substring(
                    0,
                    newFormData.content.length - 4
                ) +
                replaceStringSelectorValue +
                "</p>";
        }

        setInterventionFormData(newFormData);
        setReplaceStringSelectorModalState(!replaceStringSelectorModalState);
    }

    function changeLmsIntervention(e) {
        let newFormData = {
            ...interventionFormData,
        };

        if (newFormData.lmsYN === "Y") {
            newFormData.lmsYN = "N";
        } else {
            newFormData.lmsYN = "Y";
        }
        setInterventionFormData(newFormData);
    }

    function changeEmailIntervention(e) {
        let newFormData = {
            ...interventionFormData,
        };

        if (newFormData.emailYN === "Y") {
            newFormData.emailYN = "N";
        } else {
            newFormData.emailYN = "Y";
        }
        setInterventionFormData(newFormData);
    }

    async function clickInterventionActivationButton(e) {
        const newIntervention = await API.graphql(
            graphqlOperation(mutations.createIntervention, {
                input: {
                    ...interventionFormData,
                    conditions: JSON.stringify(interventionFormData.conditions),
                    recipientIDs: JSON.stringify(
                        interventionFormData.recipientIDs
                    ),
                },
            })
        );

        setInterventionListView(true);
    }

    useEffect(() => {
        fetchCourse();
    }, []);

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
                                            name="text-input"
                                            placeholder="개입 이름"
                                            onChange={changeName}
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
                                            onChange={(e) =>
                                                setInterventionFormData({
                                                    ...interventionFormData,
                                                    description: e.target.value,
                                                })
                                            }
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
                                onClick={
                                    clickInterventionConditionActivationButton
                                }
                            >
                                <CIcon name="cil-scrubber" /> 학습개입 조건
                                정하기
                            </CButton>
                            <CButton
                                type="reset"
                                className="mr-1"
                                size="sm"
                                color="info"
                                // onClick={() => viewModal("기존 개입 불러오기")}
                            >
                                <CIcon name="cil-scrubber" /> 기존 개입 불러오기
                            </CButton>
                            <CButton
                                type="reset"
                                className="mr-1"
                                size="sm"
                                color="danger"
                            >
                                <CIcon name="cil-ban" /> 학습개입 초기화하기
                            </CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
            <InterventionConditionForm
                view={interventionConditionFormView}
                attributes={attributes}
                changeAttribute={changeAttribute}
                changeConditionSign={changeConditionSign}
                changeConditionValue={changeConditionValue}
                addCondition={addCondition}
                changeAos={changeAos}
                conditions={interventionFormData.conditions}
                clickInterventionTimeActivationButton={
                    clickInterventionTimeActivationButton
                }
            />
            <InterventionTimeForm
                view={interventionTimeFormView}
                changeTimeType={changeTimeType}
                datePickerView={datePickerView}
                changeSendDate={changeSendDate}
                periodPickerView={periodPickerView}
                changePeriod={changePeriod}
                recipientActivationButton={recipientActivationButton}
                clickInterventionRecipientActivationButton={
                    clickInterventionRecipientActivationButton
                }
                contentActivationButton={contentActivationButton}
                clickInterventionContentActivationButton={
                    clickInterventionContentActivationButton
                }
            />
            <InterventionRecipientForm
                view={interventionRecipientFormView}
                clickInterventionContentActivationButton={
                    clickInterventionContentActivationButton
                }
                notRecipients={notRecipients}
                recipients={recipients}
                addRecipient={addRecipient}
                removeRecipient={removeRecipient}
                showStudentAnalyticsModal={showStudentAnalyticsModal}
            />
            <InterventionContentForm
                view={interventionContentFormView}
                clickReplaceStringSelectorButton={
                    clickReplaceStringSelectorButton
                }
                onChangeTitle={changeTitle}
                onChangeContent={changeContent}
                clickInterventionActivationButton={
                    clickInterventionActivationButton
                }
                replaceStringSelectorModal={replaceStringSelectorModalState}
                closeReplaceStringSelectorModal={
                    closeReplaceStringSelectorModal
                }
                attributes={attributes}
                changeEmailIntervention={changeEmailIntervention}
                changeLmsIntervention={changeLmsIntervention}
                replaceStringSelectorType={replaceStringSelectorType}
                title={interventionFormData.title}
                content={interventionFormData.content}
                inputReplaceStringByStudentData={
                    inputReplaceStringByStudentData
                }
                selectReplaceStringByColumnData={
                    selectReplaceStringByColumnData
                }
                inputReplaceStringByColumnData={inputReplaceStringByColumnData}
                interventionListView={interventionListView}
            />
            <StudentAnalyticsModal
                modalState={studentAnalyticsModalState}
                closeModal={closeStudentAnalyticsModal}
                data={studentData}
            />
        </>
    );
};

export default InterventionDesign;
