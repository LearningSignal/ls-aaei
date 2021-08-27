import React from "react";

import { CCol, CFormGroup, CInput, CLabel } from "@coreui/react";

const DatePickerFormRow = (props) => {
    return (
        props.view && (
            <CFormGroup row>
                <CCol md="3">
                    <CLabel htmlFor="date-input">{props.label}</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                    <CInput
                        type="date"
                        id="date-input"
                        name="date-input"
                        placeholder="date"
                        onChange={props.onChange}
                    />
                </CCol>
            </CFormGroup>
        )
    );
};

export default DatePickerFormRow;
