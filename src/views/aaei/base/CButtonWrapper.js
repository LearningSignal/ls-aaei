import React from "react";

import { CButton } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const CButtonWrapper = (props) => {
    return (
        props.view && (
            <CButton
                className="mr-1"
                type={props.type}
                size="sm"
                color={props.color}
                onClick={props.onClick}
            >
                <CIcon name="cil-scrubber" /> {props.label}
            </CButton>
        )
    );
};

export default CButtonWrapper;
