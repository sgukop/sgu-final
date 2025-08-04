"use client";
import React from "react";
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import NavLinks from "../Navlinks";
import MenuList from "../../Reusable-components/MenuList";
import BOSMemberList from "./BOSMemberList";
import SchoolAdvisoryBoard from "./SchoolAdvisoryBoard";

function ManagementDeptBOS() {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
            <div className="governing-body">
                <div className="d-flex justify-content-center"><h2 className="tl-9-section-title mb-50">BOS Members List & School Advisory Board</h2></div>
            </div>
            <div className="row">
                <MenuList dept="School of Management" subMenu={NavLinks} />
            <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
             <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">BOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">SAB</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                    <Tab.Pane eventKey="overview-tab">
                        <BOSMemberList/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                        <SchoolAdvisoryBoard/>
                    </Tab.Pane>
                  </Tab.Content>
              </Tab.Container>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ManagementDeptBOS;
