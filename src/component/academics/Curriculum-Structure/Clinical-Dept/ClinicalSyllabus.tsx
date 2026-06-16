'use client';

import React from 'react';
import { Tab, Nav } from 'react-bootstrap';

import NavLinks from '@/component/faculty/B. Sc. Clinical Research and Technology/Navlinks';
import MenuList from '@/component/faculty/Reusable-components/MenuList';
import Clinical from '@/component/academics/Curriculum-Structure/Clinical-Dept/Clicnical'; // Import component

const ClinicalSyllabus = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">
          Curriculum Structure and Syllabus
        </h2>

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
                  <Nav.Link eventKey="overview-tab">
                   B. Sc. Clinical Research and Technology
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="tl-course-tab-content">
                <Tab.Pane eventKey="overview-tab">
                  <Clinical />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalSyllabus;