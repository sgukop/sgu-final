'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import FashionDesign from './FashionDesign';
import ProductDesign from './ProductDesign';
import GraphicDesign from './GraphicDesign';
import SpaceDesign from './SpaceDesign';
import BDesignPrograms from './BDesignPrograms';
import NavLinks from '../Navlinks';
import MenuList from '../../Reusable-components/MenuList';
import BscDesignPrograms from './BscDesignPrograms';

const DesignDeptProgrammes = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
      <h2 className="tl-9-section-title mb-50">Program</h2>
      <div className="row">
            <MenuList dept="Design" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
        <div className="row">
            <div className="key-features-box">
        <h3 className="tl-event-details-area-title">Key Features of the Programs</h3>
                    <ul className="tl-event-details-key-content-list">
                        <li>B Design Honors with a Specialization in AI for Design Focus on integrating artificial intelligence into design processes, equipping students with cutting-edge skills.</li>
                        <li>Advanced Training in Design Business Management Offering specialized modules to build expertise in managing and scaling design-driven businesses.</li>
                        <li>Choice-Based Credit System via MOOCs Flexible learning paths allowing students to earn credits through massive open online courses (MOOCs) from diverse subjects.</li>
                        <li>Incorporation of Finishing School for Enhanced Employability Tailored programs aimed at refining soft skills and professional readiness, increasing job market competitiveness.</li>
                    </ul>
                    </div>
                <div>
                    <Tab.Container id="myTab" defaultActiveKey="fashion-tab">
                        <Nav className="nav-tabs tl-course-details-navs">
                              <Nav.Item>
                                  <Nav.Link eventKey="fashion-tab">B.Design</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                  <Nav.Link eventKey="product-tab">B.Sc</Nav.Link>
                              </Nav.Item>
                        </Nav>

                        <Tab.Content id="tl-course-tab-content">
                            <Tab.Pane eventKey="fashion-tab">
                                <BDesignPrograms />
                            </Tab.Pane>

                            <Tab.Pane eventKey="product-tab">
                                <BscDesignPrograms />
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

export default DesignDeptProgrammes