'use client';
import React from 'react';
import Table from "react-bootstrap/Table";
import { Tab, Nav } from "react-bootstrap";
import UGProgrammes2 from './UGProgrammes2';
import UGProgrammes3 from './UGProgrammes3';
import PGProgrammes2 from './PGProgrammes2';
import PHDProgrammes2 from './PHDProgrammes2';
import SchoolIntake from '@/component/programmes/SchoolIntake'

const SchoolIntake6 = () => {
    return (
        <div className="accordion mt-10" id="accordionExample">
            <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                    >
                       Scope of Employment -
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12" style={{ marginTop: '8px', padding:"15px" }}>

                            <div className="schools-section">
        <div className="container">
        <div className="row">
       
        <div className="p-3 col-md-12">
       
    
        <Tab.Container id="myTab" defaultActiveKey="ug-tab">
          <Nav className="nav-tabs tl-course-details-navs">
            <Nav.Item>
              <Nav.Link eventKey="ug-tab">After UG</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pg-tab">After PG</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content id="tl-course-tab-content">
            <Tab.Pane eventKey="ug-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
            <div className="tl-event-details-left">
                <div className="tl-event-details-key-content" style={{marginTop:'8px', padding:"15px"}}>
                    <h4 className="tab-titleee dark-mode-white-color">After UG</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Industries/pharmaceutical companies</li>
                            <li className="dark-mode-white-color" >Post graduation in different institutes/Universities</li>
                            <li className="dark-mode-white-color" >Competitive exams: MPSC/UPSC etc</li>
                          
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="pg-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
            {/* <div className="tl-event-details-left"> */}
                <div className="tl-event-details-key-content tl-event-details-area" style={{marginTop:'8px'}}>
                    <h4 className="tab-titleee dark-mode-white-color">After PG</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Industries/pharmaceutical companies</li>
                            <li className="dark-mode-white-color" >Ph. D. in different institutes/Universities</li>
                            <li className="dark-mode-white-color" >Competitive exams: MPSC/UPSC etc</li>
                            <li className="dark-mode-white-color" >Qualifying exams like SET/NET/GATE etc</li>
                            <li className="dark-mode-white-color" >Research scholar in different research institutes</li>
                          
                           
                        </ul>
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
</div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </div>
        </div>
        </div>  
      </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


     <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingTwo">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                    >
                      Program Content (At UG Level) -
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12" style={{ marginTop: '8px', padding:"15px"}}>

                            <div className="schools-section">
        <div className="container">
        <div className="row">
       
        <div className="p-3 col-md-12">
       
    
        <Tab.Container id="myTab" defaultActiveKey="ug-tab">
          <Nav className="nav-tabs tl-course-details-navs">
            <Nav.Item>
              <Nav.Link eventKey="ug-tab">Core Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="pg-tab">Elective Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="phd-tab">
              Ability Enhanced Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="school-tab">Companies for Placement</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content id="tl-course-tab-content">
            <Tab.Pane eventKey="ug-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
            <div className="tl-event-details-left">
                <div className="tl-event-details-key-content" style={{marginTop:'8px', padding:"15px"}}>
                    <h4 className="tab-titleee dark-mode-white-color">Core Courses</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Physics</li>
                            <li className="dark-mode-white-color" >Chemistry</li>
                            <li className="dark-mode-white-color" >Mathematics</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="pg-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
        <div className="tl-event-details-left">
                <div className="tl-event-details-key-content" style={{marginTop:'8px', padding:"15px"}}>
                    <h4 className="tab-titleee dark-mode-white-color">Elective Courses</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Electronics/Statistics/Geology</li>
                            <li className="dark-mode-white-color" >Interdisciplinary courses</li>
                            <li className="dark-mode-white-color" >Skill enhancement courses</li>
                            <li className="dark-mode-white-color" >Subject specific elective courses at final year</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="phd-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
            <div className="tl-event-details-left">
                <div className="tl-event-details-key-content" style={{marginTop:'8px', padding:"15px"}}>
                    <h4 className="tab-titleee dark-mode-white-color">Ability Enhanced Courses</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Communication and Soft Skill development Courses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </Tab.Pane>
            <Tab.Pane eventKey="school-tab">
            <div className="tl-event-details-container pb-50" style={{padding:'20px'}}>
<div className="container">
    <div className="row tl-event-details-row g-0">
        <div className="col-lg-12">
            <div className="tl-event-details-left">
                <div className="tl-event-details-key-content" style={{marginTop:'8px',padding:"15px"}}>
                    <h4 className="tab-titleee dark-mode-white-color">Companies for Placement</h4>
                       <ul className="tl-event-details-key-content-list phd-container">

                            <li className="dark-mode-white-color" >Callidus Laboratories</li>
                            <li className="dark-mode-white-color" >Lavender Pharma</li>
                            <li className="dark-mode-white-color" >JSONS Laboratories</li>
                            <li className="dark-mode-white-color" >Emcure Pharma</li>
                            <li className="dark-mode-white-color" >US Vitamines</li>
                            <li className="dark-mode-white-color" >Mistaire Health & Hygiene</li>
                            <li className="dark-mode-white-color" >Unichem Pharma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        </div>
        </div>
        </div>  
      </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
           
        

            

           
        </div>

    )
}

export default SchoolIntake6;