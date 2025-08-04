'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import BtechFoodScience from './BtechFoodScience';
import MtechFoodScience from './MtechFoodScience';
import PhdFoodScience from './PhdFoodScience';
import NavLinks from '@/component/faculty/School-of-Allied-Health-Sciences/MLT-FoodScience/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';


const BscFoodScience = () => {
  return (
      <div className="pt-100 pb-100">
          <div className="container-fluid">
          <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
              <div className="row">
                    <MenuList dept="Allied Health Sciences" subMenu={NavLinks}/>
                            <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"> 
                                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                                    <Nav className="nav-tabs tl-course-details-navs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="overview-tab">B.Sc. (Medical Laboratory Technology)</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    <Tab.Content id="tl-course-tab-content">
                                        <Tab.Pane eventKey="overview-tab">
                                            <BtechFoodScience/>
                                        </Tab.Pane>

                                       
                                    </Tab.Content>
                              </Tab.Container>
                          </div>
                    </div>
            </div>
        </div>
  )
}

export default BscFoodScience