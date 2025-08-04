"use client"
import React from 'react'
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import { Tab, Nav } from "react-bootstrap";
import Publications from './Publications';
import Patents from './Patents';
import FundReceived from './FundReceived';

const ChemicalDeptResearch = () => {
  return (
    <section className="tl-1-about pt-100 pb-100">
        <div className="container-fluid">
            <h2 className="tl-9-section-title mb-50">Research & Publications</h2>
            <div className="row">
          <MenuList dept="Chemistry" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
         
          
              <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                          <Nav.Link eventKey="overview-tab">Papers published</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="curriculum-tab">Patents</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="instruction-tab">Seed funding received from University</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                        <Tab.Pane eventKey="overview-tab">
                           <Publications/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="curriculum-tab">
                           <Patents/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="instruction-tab">
                           <FundReceived/>
                        </Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
           </div>
        
        </div>
        </div>
        </div>
</section>
  )
}

export default ChemicalDeptResearch