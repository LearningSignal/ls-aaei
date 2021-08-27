import React from "react";

import { CFormGroup } from "@coreui/react";

import SelectFormRow from "../base/SelectFormRow";
import DisabledInputFormRowCondition from "./DisabledInputFormRowCondition";
import DataMap from "../utils/DataMap";

const FormConditionList = (props) => {
    return props.datas.map((data, index) => {
        return (
            <CFormGroup key={index}>
                {data.aos && (
                    <SelectFormRow
                        view={true}
                        name={index}
                        firstColMd="3"
                        secondColMd="3"
                        datas={[
                            { id: "AND", name: "AND" },
                            { id: "OR", name: "OR" },
                        ]}
                        onChange={props.onChange}
                    />
                )}
                {data.cond && (
                    <DisabledInputFormRowCondition
                        num={index + 1}
                        conditionString={
                            data.cond.attributeName +
                            " " +
                            DataMap.signMap[data.cond.sign] +
                            " " +
                            data.cond.value
                        }
                    />
                )}
            </CFormGroup>
        );
    });
};

export default FormConditionList;
