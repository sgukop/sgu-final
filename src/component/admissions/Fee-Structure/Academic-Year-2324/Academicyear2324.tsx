'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import Academicfees from './Academicfees';
import Hostelfees from './Hostelfees';

const Academicyear2324 = () => {
  return (
  
        <div className="schools-section pt-100 pb-100">
        <div className="container">
        <div className="row">
        <h2 className="universityobject-heading dark-mode-white-color mb-50">Fee Structure for F.Y. - Academic Year 2024-25</h2>
       
        <div className=" mt-4 p-3 mb-4 col-md-12">
       
    
        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
          <Nav className="nav-tabs tl-course-details-navs">
            <Nav.Item>
              <Nav.Link eventKey="overview-tab">Academic Fees in Rs.</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="curriculum-tab">Hostel Fees in Rs.</Nav.Link>
            </Nav.Item>
           
          </Nav>
    
          <Tab.Content id="tl-course-tab-content">
            <Tab.Pane eventKey="overview-tab">
              <Academicfees/>
            </Tab.Pane>
    
            <Tab.Pane eventKey="curriculum-tab">
              <Hostelfees/>
            </Tab.Pane>
    
           
          </Tab.Content>
        </Tab.Container>
        </div>
        </div>
         
        </div>    
      </div>
      )
    }
    
  


export default Academicyear2324