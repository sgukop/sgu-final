'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import MtechFoodScience from './mscchemical-syllabus';
import NavLinks from '@/component/faculty/School-of-Allied-Health-Sciences/FST-FoodScience/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';

const BscFoodScience = () => {
  return (
      <div className="pt-100 pb-100">
          <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
              <div className="row">
                    <MenuList dept="Allied Health Sciences" subMenu={NavLinks}/>
                        <div data-spy="scroll" className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0">  
                            <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                                <Nav className="nav-tabs tl-course-details-navs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="overview-tab">B.sc</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="curriculum-tab">M.sc </Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                                              </Tab.Container>
                          </div>
                    </div>
            </div>
    </div>
  )
}

export default BscFoodScience