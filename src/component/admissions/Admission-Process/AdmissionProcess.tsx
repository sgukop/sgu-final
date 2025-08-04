'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PhdAdmissionProcess from './PhdAdmissionProcess';
import UGAdmissionProcess from './UGAdmissionProcess';

const AdmissionProcess = () => {
  return (
    <div className="pt-100 pb-100">
        <div className="container">
            <div className="row">
                  <h2 className="universityobject-heading py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50
">Admission Process</h2>
                  <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                              <Nav className="nav-tabs tl-course-details-navs">
                                  <Nav.Item>
                                      <Nav.Link eventKey="overview-tab">UG</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="curriculum-tab">PG</Nav.Link>
                                  </Nav.Item>
                                  <Nav.Item>
                                      <Nav.Link eventKey="instructor-tab">Phd</Nav.Link>
                                  </Nav.Item>
                              </Nav>

                              <Tab.Content id="tl-course-tab-content">
                                  <Tab.Pane eventKey="overview-tab">
                                     <UGAdmissionProcess />
                                  </Tab.Pane>

                                  <Tab.Pane eventKey="curriculum-tab">
                                     
                                  </Tab.Pane>

                                  <Tab.Pane eventKey="instructor-tab">
                                      <PhdAdmissionProcess/>
                                  </Tab.Pane>
                              </Tab.Content>
                          </Tab.Container>
                    </div>
              </div>
          </div>    
    </div>
  )
}

export default AdmissionProcess