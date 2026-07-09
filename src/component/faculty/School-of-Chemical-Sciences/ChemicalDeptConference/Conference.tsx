'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import ConferenceData from './ConferenceData';
import GuestLecture from './GuestLecture';
import InvitedTalks from './InvitedTalks';
import WorkshopAttended from './WorkshopAttended';


const Conference = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">Conference / Guest lecture / Invited talk / Workshop / FDP attended</h2>
        <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row outer-style mt-50">
          {/*  <h3 className="tl-event-details-area-title">PEO, PO and PSO (B.Sc.)</h3>   */}
   
                <div data-spy="scroll" className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12" data-target="#menu-navbar" data-offset="0">
                  <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                      <Nav className="nav-tabs tl-course-details-navs">
                        <Nav.Item>
                            <Nav.Link eventKey="overview-tab">Conference Participated </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="curriculum-tab">Guest lecture / program Organized</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="instruction-tab">Invited talk</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="workshop-tab">Workshop / FDP attended</Nav.Link>
                        </Nav.Item>
                    </Nav>

                      <Tab.Content id="tl-course-tab-content">
                          <Tab.Pane eventKey="overview-tab">
                             <ConferenceData />
                          </Tab.Pane>

                          <Tab.Pane eventKey="curriculum-tab">
                              <GuestLecture />
                          </Tab.Pane>

                          <Tab.Pane eventKey="instruction-tab">
                             <InvitedTalks />
                          </Tab.Pane>

                          <Tab.Pane eventKey="workshop-tab">
                             <WorkshopAttended />
                          </Tab.Pane>
                    </Tab.Content>
                        
                  </Tab.Container>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    )
}

export default Conference
