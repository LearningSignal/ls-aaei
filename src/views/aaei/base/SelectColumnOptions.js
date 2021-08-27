import React from "react";

const SelectColumnOptions = (props) => {
    const options = props.datas.map((data) => (
        <option key={data.id} value={data.id}>
            {data.name}
        </option>
    ));

    if (props.firstOptionString) {
        return [
            <option key="0" value="">
                {props.firstOptionString}
            </option>,
            ...options,
        ];
    } else {
        return [...options];
    }
};

export default SelectColumnOptions;
