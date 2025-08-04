"use client";
import React from "react";
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'
import { Tab, Nav } from "react-bootstrap";
import PEOs from "./BiotechDeptPEO/PEOs"
import POs from "./BiotechDeptPEO/POs"
import PSO from "./BiotechDeptPEO/PSO"

const BiotechDeptAbout = () => {
  return (
    <section
      className="pt-100 pb-100"
      data-background="assets/images/tl-14/cta-bg.png"
    >
      <div className="container-fluid">
        <h2 className="tl-9-section-title mb-50">About Department</h2>

        <div className="row">
          <MenuList dept="Biotechnology" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 mt-4 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
            <div className="row">
              <div className="col-lg-5">
                <div className="tl-14-about-img">
                  <img
                    src="assets/images/biotechnology/about-department/about-image.png"
                    alt="About Department Image"
                    className="rounded-full"
                    style={{border:"10px solid #4f70b6", padding:"20px"}}
                  />
                </div>
              </div>

              <div className="col-lg-7">
               
                <p className="dark-mode-white-color">
                  The last few decades have witnessed a significant, if not revolutionary, shift in our understanding of living things and our capacity to control biological systems. This has resulted in significant advancements in biotechnology, which have a broad influence on a variety of fields, including consumer goods, agriculture, food, diagnostics, health care, and the environment. Until and unless the general public benefits from these biotechnological advancements, they are pointless. <br/> Only if such technologies are adopted for production on an industrial scale would this be possible. The Department provides a special combination of applied biological sciences skills. It aims to apply this knowledge to advance different biotechnological processes and products. Achieving this goal is thought to be possible through: <br/><br/> </p>
                  <ul className="tl-event-details-key-content-list phd-container">
                      <li>
                      (a) producing highly skilled human resources with the ability to quantitatively analyse biological systems, which will enable them to play a part in staffing contemporary bioprocess industries and offer an integrated approach to biotechnology research and development.
                      </li>
                      <li>
                      (b) To keep improving research and development initiatives for bio-industrial goods and services that are environmentally sustainable, such as bio-energy, biopolymers, clean environment, and medicines.
                      </li>
                      <li>
                      (c) Taking the lead in worldwide advancements in applied biological sciences and bioprocess technology, as well as facilitating involvement in sponsored research and industrial consultancy.
                      </li>
                      <li>
                      (d) Sharing information produced by conferences, workshops, and short-term courses
                      </li>
                    </ul>
                </div>
            </div>
           
            <div className="row tl-event-details-row g-4 mt-50">
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Vision</h3>
                    <h6 className="vision-info">
                    A center of excellence in Biotechnology education, research and innovation, fostering sustainable solutions for the benefit of humankind and the environment.
                    </h6>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                    <h3 className="tl-event-details-area-title text-white">Mission</h3>
                    <ul className="course-subjects">
                      <li>
                      To engage in cutting-edge BT research with global relevance such as Medical Biotechnology, genetic engineering and bioinformatics.
                      </li>
                      <li>
                      To establish collaborations with reputed national and international institutions via student exchange programs and knowledge transfer.
                      </li>
                      <li>
                      Contribute to the global scientific community by carrying out research published in the most reputed journals.
                      </li>
                      <li>
                      Encourage the spirit of entrepreneurship and innovation through research.
                      </li>
                      <li>
                      Engage in community service and outreach programs and align with the UN SDGs.
                      </li>
                    </ul>
                    </div>
                </div>
           </div>

            <div className="row outer-style mt-50">
             <h3 className="tl-event-details-area-title">PEO, PO and PSO</h3>
              <div
                data-spy="scroll"
                className="scrollspy-example z-depth-1 p-3 mb-4 col-md-12"
                data-target="#menu-navbar"
                data-offset="0"
              >
                <Tab.Container id="myTab" defaultActiveKey="overview-tab">
                  <Nav className="nav-tabs tl-course-details-navs">
                    <Nav.Item>
                      <Nav.Link eventKey="overview-tab">
                        Program Educational Objectives (PEOs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="curriculum-tab">
                        Program Outcomes (POs)
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="instructor-tab">
                        Program Specific Outcomes (PSO)
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="tl-course-tab-content">
                    <Tab.Pane eventKey="overview-tab">
                        <PEOs/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="curriculum-tab">
                        <POs/>
                    </Tab.Pane>

                    <Tab.Pane eventKey="instructor-tab">
                        <PSO/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiotechDeptAbout;
