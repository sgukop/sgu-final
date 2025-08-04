'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import MenuList from '@/component/faculty/Reusable-components/MenuList'
import NavLinks from '@/component/faculty/Aerospace-Engineering/Navlinks';
import BtechSyllabus from './BtechSyllabus';
import MtechSyllabus from './MtechSyllabus';
import PhdSyllabus from './PhdSyllabus';


const AeronauticalSyllabus = () => {
  return (
      <div className="pt-100 pb-100">
          <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
              <div className="row">
                    <MenuList dept="Aerospace Engineering" subMenu={NavLinks}/>
                            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"> 
                                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                                    <Nav className="nav-tabs tl-course-details-navs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="overview-tab">B.Tech</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="curriculum-tab">M.Tech</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="instructor-tab">Ph.D.</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content id="tl-course-tab-content">
                                        <Tab.Pane eventKey="overview-tab">
                                            <BtechSyllabus/>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="curriculum-tab">
                                            <MtechSyllabus/>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="instructor-tab">
                                            <PhdSyllabus/>
                                        </Tab.Pane>
                                    </Tab.Content>
                              </Tab.Container>
                          </div>
                    </div>
               </div>
        </div>
  )
}

export default AeronauticalSyllabus