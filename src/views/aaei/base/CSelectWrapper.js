import React from "react";

import { CSelect } from "@coreui/react";
import SelectColumnOptions from "../base/SelectColumnOptions";

const CSelectWrapper = (props) => {
    return (
        <CSelect custom name={props.name} onChange={props.onChange}>
            <SelectColumnOptions
                firstOptionString={props.firstOptionString}
                datas={props.datas}
            />
        </CSelect>
    );
};

export default CSelectWrapper;
