const DataMap = {
    signMap: {
        LTE: "≤",
        GTE: "≥",
        LT: "<",
        GT: ">",
        E: "=",
        NE: "≠",
    },
    operateSign: function (sign, enrollmentValue, conditionValue) {
        switch (sign) {
            case "LTE":
                return enrollmentValue <= conditionValue;
            case "GTE":
                return enrollmentValue >= conditionValue;
            case "LT":
                return enrollmentValue < conditionValue;
            case "GT":
                return enrollmentValue > conditionValue;
            case "E":
                return enrollmentValue === conditionValue;
            case "NE":
                return enrollmentValue !== conditionValue;
            default:
                console.log(
                    "error: " +
                        enrollmentValue +
                        " " +
                        this.signMap[sign] +
                        " " +
                        conditionValue
                );
        }
    },
};

export default DataMap;
