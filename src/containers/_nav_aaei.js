import React from "react";
import CIcon from "@coreui/icons-react";

const _nav_aaei = [
    {
        _tag: "CSidebarNavTitle",
        _children: ["학습개입"],
    },
    {
        _tag: "CSidebarNavItem",
        name: "학습활동 분석",
        to: "/learninganalytics",
        icon: "cil-chart-pie",
    },
    {
        _tag: "CSidebarNavItem",
        name: "학습개입 설계",
        to: "/interventiondesign",
        icon: "cil-pencil",
    },
    {
        _tag: "CSidebarNavItem",
        name: "학습개입 목록",
        to: "/interventionlist",
        icon: "cil-cursor",
    },
];

export default _nav_aaei;
