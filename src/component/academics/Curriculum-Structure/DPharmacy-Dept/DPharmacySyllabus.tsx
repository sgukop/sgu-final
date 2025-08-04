'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import MenuList from '@/component/academics/Curriculum-Structure/Reusable-components/MenuList'
import NavLinks from '@/component/academics/Curriculum-Structure/Reusable-components/Navlinks';
import DPharmacy from './DPharmacy';


const DPharmacySyllabus = () => {
  return (
    <div className="schools-section pt-100 pb-100">
    <div className="container">
    <div className="row">
    <h2 className="universityobject-heading dark-mode-white-color mb-100">Curriculum Structure and Syllabus</h2>
   {/*  <MenuList dept="Schools" subMenu={NavLinks}/>
    <div data-spy="scroll" className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-4 col-sm-12 dept-content" data-target="#menu-navbar" data-offset="0"> */}
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">D. Pharmacy</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
          <DPharmacy/>
        </Tab.Pane>
        </Tab.Content>
    </Tab.Container>
    </div>
   </div>    
  </div>
  )
}

export default DPharmacySyllabus