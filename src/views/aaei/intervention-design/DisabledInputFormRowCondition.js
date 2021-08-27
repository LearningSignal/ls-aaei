import React from "react";

import { CFormGroup, CInput, CLabel, CCol } from "@coreui/react";

const DisabledInputFormRowCondition = (props) => {
    return (
        <CFormGroup row>
            <CCol md="3">
                <CLabel htmlFor="textarea-input">{`조건 #${props.num}`}</CLabel>
            </CCol>
            <CCol xs="12" md="9">
                <CInput
                    id="text-input"
                    name="text-input"
                    placeholder={props.conditionString}
                    disabled
                />
            </CCol>
        </CFormGroup>
    );
};

export default DisabledInputFormRowCondition;
