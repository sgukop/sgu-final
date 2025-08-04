'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import BBA from './BBA';
import MBA from './MBA';
import NavLinks from '@/component/faculty/School-of-Management/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';

const BBASyllabus = () => {
  return (
    <div className="pt-100 pb-100">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
    <div className="row">
    
     <MenuList dept="School of Management" subMenu={NavLinks}/>
    <div data-spy="scroll" className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"> 
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">BBA</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">MBA</Nav.Link>
        </Nav.Item>
       </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <BBA/>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
         <MBA/>
        </Tab.Pane>

      </Tab.Content>
    </Tab.Container>
    </div>
    </div>
  </div>
  </div>
  )
}

export default BBASyllabus