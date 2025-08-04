'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";

import SocialScience from './SocialScience';
import NavLinks from '@/component/faculty/Department-of-English/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';

const SocialScienceSyllabus = () => {
  return (
    <div className="pt-100 pb-100">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
    <div className="row">
   
     <MenuList dept="English" subMenu={NavLinks}/>
    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"> 
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">Department of Social Science</Nav.Link>
        </Nav.Item>
        
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <SocialScience/>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </div>
    </div>
  </div>
  </div>
  )
}

export default SocialScienceSyllabus