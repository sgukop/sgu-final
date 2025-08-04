'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import UGProgrammes from './UGProgrammes';
import PGProgrammes from './PGProgrammes';
import PHDProgrammes from './PHDProgrammes';
import SchoolIntake from './SchoolIntake';

const JobProgrammes = () => {
    return (
  
        <div className="pt-50 pb-50">
        <div className="container">
        <h2 className="tl-9-section-title mb-50">Job Oriented Programmes</h2>
        <div className="row">
       
       
        <div className=" mt-4 p-3 mb-4 col-md-12">
       
    
        <Tab.Container id="myTab" defaultActiveKey="ug-tab">
          <Nav className="nav-tabs tl-course-details-navs">
            <Nav.Item>
              <Nav.Link eventKey="ug-tab">UG Programmes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pg-tab">PG Programmes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="phd-tab">Ph.D. Programmes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="school-tab">School Intake</Nav.Link>
            </Nav.Item>
           
          </Nav>
    {/* overview-tab         curriculum-tab */}
          <Tab.Content id="tl-course-tab-content">
            <Tab.Pane eventKey="ug-tab">
              <UGProgrammes/>
            </Tab.Pane>
            <Tab.Pane eventKey="pg-tab">
              <PGProgrammes/>
            </Tab.Pane>
            <Tab.Pane eventKey="phd-tab">
              <PHDProgrammes/>
            </Tab.Pane>
               <Tab.Pane eventKey="school-tab">
              <SchoolIntake/>
            </Tab.Pane>
           
          </Tab.Content>
        </Tab.Container>
        </div>
        </div>
         
        </div>    
      </div>
      )
}

export default JobProgrammes
