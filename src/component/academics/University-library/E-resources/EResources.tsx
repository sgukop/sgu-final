'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import OnlineResources from './OnlineResources';
import DigitalLibrary from './DigitalLibrary';
import NavLinks from '../Reusable-components/Navlinks';
import MenuList from '../Reusable-components/MenuList';


const EResources = () => {
  return (
    <div className="pt-50 pb-50">
      <div className="container-fluid">
      <h2 className="tl-9-section-title py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">E-Resources</h2>
      <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row">
         
          <div>
              <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                          <Nav.Link eventKey="overview-tab">Online Resources</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                          <Nav.Link eventKey="curriculum-tab">Digital Knowledge Research Center (Digitized Collection)</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                        <Tab.Pane eventKey="overview-tab">
                            <OnlineResources/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="curriculum-tab">
                            <DigitalLibrary/>
                        </Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
           </div>
        </div>
      </div>  
      </div>
      </div>  
  </div>
  )
}

export default EResources