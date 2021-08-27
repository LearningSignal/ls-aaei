import React from "react";

import { CFormGroup, CLabel, CCol } from "@coreui/react";
import CSelectWrapper from "./CSelectWrapper";

const SelectFormRow = (props) => {
    return (
        props.view && (
            <CFormGroup row>
                <CCol md={props.firstColMd}>
                    <CLabel>{props.label}</CLabel>
                </CCol>
                <CCol md={props.secondColMd}>
                    <CSelectWrapper
                        name={props.name}
                        firstOptionString={props.firstOptionString}
                        onChange={props.onChange}
                        datas={props.datas}
                    />
                </CCol>
            </CFormGroup>
        )
    );
};

export default SelectFormRow;
