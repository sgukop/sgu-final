'use client'
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import PSOs from "./MCADeptPEO/PSOs";
import PEOs from "./MCADeptPEO/PEOs";
import POs from "./MCADeptPEO/POs";
import MCANavLinks from './MCANavlink';
import MenuList from '../Reusable-components/MenuList';

const MCADeptAbout = () => {
   return (
    <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
        <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>
        <div className="row">
          <MenuList dept="Bachelor of Computer Applications" subMenu={MCANavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row gy-4 align-items-center">
           
            <p className="dark-mode-white-color key-features-box">Established in 2021, the Department of Computer Applications is dedicated to developing skilled, creative IT professionals equipped to thrive in the fast-paced global IT industry and research fields. We offer comprehensive BCA and MCA programs taught by a team of highly qualified faculty, seasoned industry experts, and renowned researchers.<br/><br/>
            Our state-of-the-art laboratories are equipped with advanced software and high-performance computing systems, creating an ideal environment for technical training, research, and innovation. To ensure our students are always at the forefront of technology, we regularly host knowledge-sharing sessions led by industry experts, accomplished alumni, and global tech leaders. Join us to gain the core knowledge and skills necessary to excel in a dynamic, ever-evolving field.
            </p>
                <div className="col-lg-6">
                    <div className="tl-14-about-img">
                      <img src="assets/images/BCA-dept/about/about-dept.png" alt="About Department" className="rounded-full"
                          style={{border:"10px solid #4f70b6", padding:"20px"}} />
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="tl-14-about-txt">
                        <h2 className="tl-14-section-title">HOD's DESK</h2>
                        <p className="dark-mode-white-color">Department of Computer Applications is established with an aim of building creative IT professionals to acquire core knowledge and skills required by IT industry or research institutes to meet global challenges. The courses are taught by the experienced, qualified faculty, industry experts and the global researchers. <br/><br/> The laboratories are well equipped with advanced software, high configuration computer systems for technical training and research work. Knowledge sharing sessions are conducted by experts and alumni to keep up with the rapidly evolving technology on regular basis.</p>
                         <span style={{fontWeight:"bold"}} className="dark-mode-white-color mt-4"> Head of Department <br/> Dr. Chetan Arage   </span>
                    </div>
                </div>
            </div>

            <div className="row outer-style mt-50">
             <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-md-12"
                data-target="#menu-navbar"
                data-offset="0"
              >
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">
                        Program Educational Objectives (PEOs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">
                        Program Outcomes (POs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="instructor-tab">
                        Program Specific Outcomes (PSOs)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                    <Tab.Pane eventKey="overview-tab">
                      <PEOs />
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                      <POs />
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                      <PSOs />
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

export default MCADeptAbout
