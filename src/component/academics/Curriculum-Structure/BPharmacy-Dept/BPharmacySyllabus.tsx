'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import BPharmacy from './BPharmacy';
import DPharmacy from './DPharmacy';
import NavLinks from '@/component/faculty/School-of-Pharmaceutical-Sciences/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';
import MPharmacy from './MPharmacy';

const BPharmacySyllabus = () => {
  return (
    <div className="pt-100 pb-100">
    <div className="container-fluid">
    <h2 className="tl-9-section-title mb-50">Curriculum Structure and Syllabus</h2>
    <div className="row">
          <MenuList dept="Pharmacy" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
   

    <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">B. Pharmacy</Nav.Link>
        </Nav.Item>
        

        <Nav.Item>
          <Nav.Link eventKey="instruction-tab">M. Pharmacy</Nav.Link>
        </Nav.Item>
       
      </Nav>

      <Tab.Content id="tl-course-tab-content">
        <Tab.Pane eventKey="overview-tab">
           <BPharmacy/>
        </Tab.Pane>

        <Tab.Pane eventKey="curriculum-tab">
          <DPharmacy/>
        </Tab.Pane>

        <Tab.Pane eventKey="instruction-tab">
          <MPharmacy/>
        </Tab.Pane>

      </Tab.Content>
    </Tab.Container>
    </div>
    </div>
  </div>
  </div>
  )
}

export default BPharmacySyllabus