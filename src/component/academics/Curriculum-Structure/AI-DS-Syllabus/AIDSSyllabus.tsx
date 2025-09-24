'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import BtechAIDSSyllabus from './BtechAIDSSyllabus';
import MtechAIDSSyllabus from './MtechAIDSSyllabus';
import NavLinks from '@/component/faculty/Artificial-Intelligence-Data-Science/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';

const AIDSSyllabus = () => {
  return (
      <div className="pt-100 pb-100">
          <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
              <div className="row">
                   
                       <MenuList dept="Artificial Intelligence and Machine Learning" subMenu={NavLinks}/>
                            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">  
                                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                                    <Nav className="nav-tabs tl-course-details-navs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="overview-tab">B.Tech AIDS</Nav.Link>
                                        </Nav.Item>
                                        {/*<Nav.Item>
                                            <Nav.Link eventKey="curriculum-tab">M.Tech AIDS</Nav.Link>
                                        </Nav.Item>*/}
                                    </Nav>

                                    <Tab.Content id="tl-course-tab-content">
                                        <Tab.Pane eventKey="overview-tab">
                                            <BtechAIDSSyllabus/>
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="curriculum-tab">
                                            <MtechAIDSSyllabus/>
                                        </Tab.Pane>

                                    </Tab.Content>
                              </Tab.Container>
                          </div>
                    </div>
               </div>
        </div>
  )
}

export default AIDSSyllabus