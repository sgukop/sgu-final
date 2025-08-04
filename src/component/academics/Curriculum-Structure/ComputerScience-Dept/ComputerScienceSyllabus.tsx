"use client";
import React from "react";
import { Tab, Nav } from "react-bootstrap";
import ComputerScience from "./ComputerScience";
import MenuList from "@/component/faculty/Reusable-components/MenuList";
import NavLinks from "@/component/faculty/Computer-Science-Engineering/Navlinks";

const ComputerScienceSyllabus = () => {
  return (
    <div className="pt-100 pb-100">
      <div className="container-fluid">
      <h2 className="universityobject-heading dark-mode-white-color py-4 rounded-tl-[40px] rounded-br-[40px] w-fit px-8 bg-[#4f70b6] font-bold text-white mx-auto mb-50">
            Curriculum Structure and Syllabus
          </h2>
        <div className="row">
         
          <MenuList dept="Computer Science & Engineering" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-8 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <Tab.Container id="myTab" defaultActiveKey="overview-tab">
              <Nav className="nav-tabs tl-course-details-navs">
                <Nav.Item>
                  <Nav.Link eventKey="overview-tab">
                    Computer Science and Engineering
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content id="tl-course-tab-content">
                <Tab.Pane eventKey="overview-tab">
                  <ComputerScience />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerScienceSyllabus;
