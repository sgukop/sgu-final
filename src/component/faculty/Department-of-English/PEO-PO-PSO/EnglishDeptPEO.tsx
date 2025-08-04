'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PSO from './PSO';
import PEOs from './PEOs';
import POs from './POs';

const EnglishDeptPEO = () => {
  return (
    <div className="schools-section pt-100 pb-100">
        <div className="container">
            <div className="row">
            <h2 className="tl-9-section-title mb-50">PEO, PO and PSO</h2>
                  <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="instructor-tab">Program Specific Outcomes (PSO)</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content id="tl-course-tab-content">
                                  <Tab.Pane eventKey="overview-tab"><PEOs/></Tab.Pane>
                                  <Tab.Pane eventKey="curriculum-tab"><POs/></Tab.Pane>
                                  <Tab.Pane eventKey="instructor-tab"><PSO/></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
              </div>
        </div>    
  </div>
  )
}

export default EnglishDeptPEO