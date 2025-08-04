'use client';
import React from 'react';
import Table from "react-bootstrap/Table";

const SchoolIntake2 = () => {
    return (
        <div className="accordion mt-20" id="accordionExample">
            <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"

                        aria-controls="collapseOne"
                    >
                        Services and Solutions Includes -
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <div className="tl-event-details-left" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content" style={{ marginTop: '8px', padding:"15px" }}>
                                {/* <h4 className="tab-titleee dark-mode-white-color">Master of Technology (M.Tech)</h4> */}
                                <ul className="tl-event-details-key-content-list phd-container">

                                    <li className="dark-mode-white-color" >Engineering Research & Development with following Line of Service :<br /> Mechanical  <br />
                                        Electrical <br />
                                        Embedded <br />
                                        Manufacturing</li>
                                    <li className="dark-mode-white-color" >CAE / FEA & CFD</li>
                                    <li className="dark-mode-white-color" >Wiring Harness Design and Development</li>
                                    <li className="dark-mode-white-color" >Vehicle Electrical Integration</li>
                                    <li className="dark-mode-white-color" >Digital Manufacturing Simulation</li>
                                    <li className="dark-mode-white-color" >Manufacturing Automation and Control Solutions</li>
                                    <li className="dark-mode-white-color" >Customer Relationship Management</li>
                                    <li className="dark-mode-white-color" >System Integration</li>
                                    <li className="dark-mode-white-color" >Product Lifecycle Management (PLM) & Solution Integration</li>
                                    <li className="dark-mode-white-color" >Optimization of the Digital Product Development Process</li>
                                    <li className="dark-mode-white-color" >Product Development IT</li>
                                    <li className="dark-mode-white-color" >Connected Enterprise IT & Enterprise Resource Planning</li>
                                    <li className="dark-mode-white-color" >Application Lifecycle Management & Support</li>
                                    <li className="dark-mode-white-color" >Education Service & Engineering Training</li>
                                    <li className="dark-mode-white-color" >Knowledge Lifecycle Management & Support</li>
                                    <li className="dark-mode-white-color" >Helpdesk Support</li>

                                </ul>
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
                        Benefits of Partnership -
                    </button>
                </h2>
                <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <div className="tl-event-details-left" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content" style={{ marginTop: '8px', padding:"15px" }}>
                                {/* <h4 className="tab-titleee dark-mode-white-color">Doctor of Philosophy (Ph.D.)</h4> */}
                                <ul className="tl-event-details-key-content-list phd-container">

                                    <li className="dark-mode-white-color" >Training Centers</li>
                                    <li className="dark-mode-white-color" >Consultancy</li>
                                    <li className="dark-mode-white-color" >Student Placement</li>
                                </ul>
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
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Competency Centres -
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <div className="tl-event-details-left" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content" style={{ marginTop: '8px', padding:"15px" }}>
                                {/* <h4 className="tab-titleee dark-mode-white-color">Doctor of Philosophy (Ph.D.)</h4> */}
                                <ul className="tl-event-details-key-content-list phd-container">

                                    <li className="dark-mode-white-color" >Technology Competency Centre</li>
                                    <li className="dark-mode-white-color" >Advance Manufacturing Centre</li>
                                    <li className="dark-mode-white-color" >Innovation Srujan Centre</li>
                                    <li className="dark-mode-white-color" >Mechatronics Centre</li>
                                    <li className="dark-mode-white-color" >Teardown & Benchmarking Centre</li>
                                    <li className="dark-mode-white-color" >Automotive Learning Centre</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default SchoolIntake2;