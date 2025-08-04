'use client'
import { useTalimContext } from '@/context/TalimContext'
import React from 'react'
import { Tab, Nav } from "react-bootstrap";
import PSO from './MechanicalPEO/PSO';
import PEOs from './MechanicalPEO/PEOs';
import POs from './MechanicalPEO/POs';
import NavLinks from './Navlinks'
import MenuList from '../Reusable-components/MenuList'

const MechanicalDeptAbout = () => {
   return (
        <section className="tl-14-about pt-100 pb-100" data-background="assets/images/tl-14/cta-bg.png">
            <div className="container-fluid">
            <div className="row">
          <MenuList dept="" subMenu={NavLinks} />
          <div
            data-spy="scroll"
            className="scrollspy-example z-depth-1 p-3 mb-4 col-lg-9 col-md-6 col-sm-12 dept-content"
            data-target="#menu-navbar"
            data-offset="0"
          >
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="tl-14-about-img">
                            <img src="assets/images/mechanical-engineering-dept/about-dept/about-dept.jpg" className="rounded-full"
                              style={{border:"10px solid #4f70b6", padding:"20px"}} alt="Image" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="tl-14-about-txt">
                            <h2 className="tl-14-section-title text-[#4f70b6]">About Us</h2>
                            <p className="dark-mode-white-color text-black">The Department of Mechanical Engineering was established to produce graduates with core knowledge and skills required by Mechanical Industries and Research Institutes. Mechanical engineering is one of the basic engineering branches. It deals with design and development of all kinds of machines. Through innovation and inventions, it has given humanity at large comfort and safety for life.<br/><br/>

                            At SGU, we have state of the art infrastructure and laboratories with total investment in equipments of more than one crore. Taking into consideration the requirements of industry and research organization we have developed all our labs.</p>
                        </div>
                    </div>
              </div>

              <div className="row tl-event-details-row g-4 mt-50">
                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#4f70b6] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Vision</h3>
                            <p className="dark-mode-white-color">To impart excellent value-based quality education in Mechanical Engineering through strong teaching and research environment to meet ever changing challenges of technical profession</p>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="rounded-[20px] bg-[#f26122] p-6 text-white flex flex-col h-full">
                            <h3 className="tl-event-details-area-title text-white">Mission</h3>
                            <ul className="course-subjects">
                            <li>To offer high quality graduate and post graduate programmes in Mechanical Engineering education and to prepare the students for professional career or higher education.</li>
		                <li>To promote excellence in teaching, research, collaborative activities and contributions to the society.</li>
                        <li>To impart quality education through co-curricular and extracurricular activities to develop leadership qualities in students.</li>
                    </ul>
                    </div>
                </div>
               
            </div>

        <div className="row outer-style mt-50">
        <h3 className="tl-event-details-area-title text-[#4f70b6]">PEO, PO and PSO</h3>
   
    <div>
     <Tab.Container id="myTab" defaultActiveKey="overview-tab">
      <Nav className="nav-tabs tl-course-details-navs">
        <Nav.Item>
          <Nav.Link eventKey="overview-tab">Program Educational Objectives (PEOs)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="curriculum-tab">Program Outcomes (POs)</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="instructor-tab">Program Specific Outcomes (PSOs)</Nav.Link>
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
    )
}

export default MechanicalDeptAbout
