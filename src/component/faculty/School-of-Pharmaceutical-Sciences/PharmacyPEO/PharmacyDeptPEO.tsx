'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PEOsBpharmacy from './PEOsBpharmacy';
import PEOsDpharmacy from './PEOsDpharmacy';
import POs from './POBPharmacy';

const PharmacyDeptPEO = () => {
  return (
    <div className="schools-section pt-100 pb-100">
        <div className="container">
            <div className="row">
            <h2 className="tl-9-section-title mb-50">PEO & PO</h2>
   
                <div>
                      <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs) B.Pharmacy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">Program Educational Objectives (PEOs) D. Pharmacy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">Program Outcomes (POs)</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                    <Tab.Pane eventKey="overview-tab">
                                          <PEOsBpharmacy/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="curriculum-tab">
                                          <PEOsDpharmacy/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="instructor-tab">
                                        <POs/>
                                    </Tab.Pane>
                            </Tab.Content>
                      </Tab.Container>
                  </div>
              </div>
          </div>    
  </div>
  )
}

export default PharmacyDeptPEO