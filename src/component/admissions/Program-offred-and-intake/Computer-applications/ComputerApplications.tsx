"use client";
import React from "react";
import { Tab, Nav } from "react-bootstrap";
import MenuList from "@/component/admissions/Program-offred-and-intake/Reusable-components/MenuList";
import NavLinks from "@/component/admissions/Program-offred-and-intake/Reusable-components/Navlinks";
import UGPrograms from "./UGPrograms";
import PGPrograms from "./PGPrograms";

import IntakeData from "./IntakeData";
IntakeData;

const ComputerApplications = () => {
  return (
    <div className="schools-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <h2 className="universityobject-heading dark-mode-white-color mb-50">
            Programmes Offered Under School of Computer Applications
          </h2>
          <MenuList dept="Schools" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <Tab.Container id="myTab" defaultActiveKey="overview-tab">
              <Nav className="nav-tabs tl-course-details-navs">
                <Nav.Item>
                  <Nav.Link eventKey="overview-tab">UG Programmes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="curriculum-tab">PG Programmes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews-tab">School Intake</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="tl-course-tab-content">
                <Tab.Pane eventKey="overview-tab">
                  <UGPrograms />
                </Tab.Pane>

                <Tab.Pane eventKey="curriculum-tab">
                  <PGPrograms />
                </Tab.Pane>

                <Tab.Pane eventKey="reviews-tab">
                  <IntakeData />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerApplications;
