'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import BtechCivil from './BtechCivil';
import MtechConstruction from './MtechConstruction';
import MtechStructural from './MtechStructural';

const CivilDeptPEO = () => {
  return (
    <div className="schools-section pt-100 pb-100">
    <div className="container">
    <div className="row">
    <h2 className="universityobject-heading dark-mode-white-color mb-50 text-[#4f70b6]">PEO, PO and PSO</h2>
   
    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
     <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">B. Tech. Civil Engineering</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">M. Tech. Construction Engineering and Management</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="instructor-tab">M. Tech. Structural Engineering</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <BtechCivil/>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
         <MtechConstruction/>
        </Tab.Pane>

        <Tab.Pane eventKey="instructor-tab">
         <MtechStructural/>
        </Tab.Pane>
    </Tab.Content>
    </Tab.Container>
    </div>
    </div>
     
    </div>    
  </div>
  )
}

export default CivilDeptPEO