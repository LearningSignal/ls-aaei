import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
    CBadge,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CDataTable,
    CRow,
} from "@coreui/react";

import usersData from "../users/UsersData";

const InterventionList = () => {
    const history = useHistory();
    const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
    const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        currentPage !== page && setPage(currentPage);
    }, [currentPage, page]);

    return (
        <CRow>
            <CCol xl={12}>
                <CCard>
                    <CCardHeader>
                        학습개입 목록
                        <small className="text-muted"> intervention list</small>
                    </CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={usersData}
                            fields={[
                                { key: "name", _classes: "font-weight-bold" },
                                "registered",
                                "role",
                                "status",
                            ]}
                            hover
                            // striped
                            clickableRows
                            onRowClick={(item) =>
                                history.push(`/learninganalytics/${item.id}`)
                            }
                            scopedSlots={{}}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
};

export default InterventionList;
