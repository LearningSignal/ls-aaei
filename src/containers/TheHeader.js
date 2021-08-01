import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    CHeader,
    CToggler,
    CHeaderBrand,
    CHeaderNav,
    CHeaderNavItem,
    CHeaderNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

// routes config
// import routes from "../routes";

const TheHeader = () => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarShow);

    const toggleSidebar = () => {
        const val = [true, "responsive"].includes(sidebarShow)
            ? false
            : "responsive";
        dispatch({ type: "set", sidebarShow: val });
    };

    const toggleSidebarMobile = () => {
        const val = [false, "responsive"].includes(sidebarShow)
            ? true
            : "responsive";
        dispatch({ type: "set", sidebarShow: val });
    };

    return (
        <CHeader withSubheader>
            <CToggler
                inHeader
                className="ml-md-3 d-lg-none"
                onClick={toggleSidebarMobile}
            />
            <CToggler
                inHeader
                className="ml-3 d-md-down-none"
                onClick={toggleSidebar}
            />
            <CHeaderBrand className="mx-auto d-lg-none" to="/">
                {/* <CIcon name="logo" height="48" alt="Logo" /> */}
                <h2>주식회사 러닝시그널 로고</h2>
            </CHeaderBrand>

            <CHeaderNav className="d-md-down-none mr-auto">
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/learninganalytics">
                        학습활동 분석
                    </CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/interventiondesign">
                        학습개입 설계
                    </CHeaderNavLink>
                </CHeaderNavItem>
                <CHeaderNavItem className="px-3">
                    <CHeaderNavLink to="/interventionlist">
                        학습개입 목록
                    </CHeaderNavLink>
                </CHeaderNavItem>
            </CHeaderNav>
        </CHeader>
    );
};

export default TheHeader;
