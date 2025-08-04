'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import UGProgrammes2 from './UGProgrammes2';
import UGProgrammes3 from './UGProgrammes3';
import PGProgrammes2 from './PGProgrammes2';
import PHDProgrammes2 from './PHDProgrammes2';
import SchoolIntake6 from '@/component/programmes/SchoolIntake6'
import SchoolIntake7 from '@/component/programmes/SchoolIntake7'

const JobProgrammes2 = () => {
    return (
        <div className="schools-section pt-30 pb-50">
        <div className="container">
        <div className="row">
       
        <div className=" mt-4 p-3 col-md-12">
       
    
        <Tab.Container id="myTab" defaultActiveKey="ug-tab">
          <Nav className="nav-tabs tl-course-details-navs">
            <Nav.Item>
              <Nav.Link eventKey="ug-tab">Key Features</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pg-tab">Intellectual Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="phd-tab">Transferable Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="school-tab">Practical Skills</Nav.Link>
            </Nav.Item>
           
          </Nav>
    {/* overview-tab         curriculum-tab */}
          <Tab.Content id="tl-course-tab-content">
            <Tab.Pane eventKey="ug-tab">
              <UGProgrammes2/>
            </Tab.Pane>
            <Tab.Pane eventKey="pg-tab">
              <PGProgrammes2/>
            </Tab.Pane>
            <Tab.Pane eventKey="phd-tab">
              <PHDProgrammes2/>
            </Tab.Pane>
               <Tab.Pane eventKey="school-tab">
              <UGProgrammes3/>
            </Tab.Pane>
           
          </Tab.Content>
        </Tab.Container>
        </div>
        </div>
         
        <SchoolIntake6/> 
        <SchoolIntake7/> 
        </div>  
      </div>
      )
}

export default JobProgrammes2
