'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import DiplomaPrograms from './DiplomaPrograms';
import UGProgramsOffered from './UGProgramsOffered';
import PGProgramsOffered from './PGProgramsOffered';
import PhDProgramsOffered from './PhDProgramsOffered';

const ProgramUniversity = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container">
        <div className="row">
          <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50
">Programmes Offered</h2>
          <div>
              <Tab.Container id="myTab" defaultActiveKey="diploma-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                          <Nav.Link eventKey="diploma-tab">Diploma</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="ug-tab">UG</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="pg-tab">PG</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="pgd-tab">PGD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="phd-tab">PhD</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                        <Tab.Pane eventKey="diploma-tab">
                            <DiplomaPrograms/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="ug-tab">
                            <UGProgramsOffered/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="pg-tab">
                            <PGProgramsOffered/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="pgd-tab">
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="phd-tab">
                            <PhDProgramsOffered/>
                        </Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
           </div>
        </div>
      </div>    
  </div>
  )
}

export default ProgramUniversity