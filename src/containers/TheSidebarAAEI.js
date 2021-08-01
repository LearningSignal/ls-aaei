import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    CCreateElement,
    CSidebar,
    CSidebarBrand,
    CSidebarNav,
    CSidebarNavDivider,
    CSidebarNavTitle,
    CSidebarMinimizer,
    CSidebarNavDropdown,
    CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

// sidebar nav config
import navigation from "./_nav_aaei";

const TheSidebarAAEI = () => {
    const dispatch = useDispatch();
    const show = useSelector((state) => state.sidebarShow);

    return (
        <CSidebar
            show={show}
            onShowChange={(val) => dispatch({ type: "set", sidebarShow: val })}
        >
            <CSidebarBrand className="d-md-down-none" to="/">
                {/* <CIcon
                    className="c-sidebar-brand-full"
                    name="logo-negative"
                    height={35}
                />
                <CIcon
                    className="c-sidebar-brand-minimized"
                    name="sygnet"
                    height={35}
                /> */}
                <h5>주식회사 러닝시그널 로고</h5>
            </CSidebarBrand>
            <CSidebarNav>
                <CCreateElement
                    items={navigation}
                    components={{
                        CSidebarNavDivider,
                        CSidebarNavDropdown,
                        CSidebarNavItem,
                        CSidebarNavTitle,
                    }}
                />
            </CSidebarNav>
            <CSidebarMinimizer className="c-d-md-down-none" />
        </CSidebar>
    );
};

export default React.memo(TheSidebarAAEI);
