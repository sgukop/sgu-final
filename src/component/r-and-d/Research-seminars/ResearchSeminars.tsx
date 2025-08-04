'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import AboutCell from './AboutCell';
import FundingAgencies from './FundingAgencies';
import ProgramsActivities from './ProgramsActivities';

const ResearchSeminars = () => {
  return (
    <div className="schools-section pt-100 pb-100">
        <div className="container">
            <div className="row">
                <h2 className="universityobject-heading dark-mode-white-color mb-50">Seminars / Workshops / Conferences Cell</h2>
                    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                        <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                            <Nav className="nav-tabs tl-course-details-navs">
                                <Nav.Item>
                                    <Nav.Link eventKey="overview-tab">About Cell</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="curriculum-tab">Funding Agencies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="instructor-tab">Programs</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="tl-course-tab-content">
                                <Tab.Pane eventKey="overview-tab"><AboutCell/></Tab.Pane>
                                <Tab.Pane eventKey="curriculum-tab"><FundingAgencies/></Tab.Pane>
                                <Tab.Pane eventKey="instructor-tab"><ProgramsActivities/></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </div>
            </div>
        </div>    
  </div>
  )
}

export default ResearchSeminars