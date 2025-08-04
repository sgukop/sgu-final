'use client';
import React from 'react';
import Table from "react-bootstrap/Table";

const BeyondStudiesData = () => {
    return (
        <div className="accordion mt-10" id="accordionExample">
            <div className="tl-event-details-area tl-course-details-curriculum">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"

                        aria-controls="collapseOne"
                    >
                      Extra / Co / Curricular Activities
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">

                        <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                <div className="col-md-12 col-12"> 
                                 <ul className="tl-event-details-key-content-list phd-container">
                                    <li>Knowledge Hub</li>
                                    <li>Picasso and Da-Vinci</li>
                                    <li>ShutterBug CLUB (I Came.. I Saw.. I Captured..!!)</li>
                                    <li>Debate Club (A journey towards excellence)</li>
                                    <li>Avni Club (Step towards aspiration)</li>
                                    <li>Spiritual Club (a divine path for truth)</li>
                                    <li>Environment Club</li>
                                    <li>Personality Development Club</li>
                                    <li>Business Club</li>
                                </ul>
                               
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
                      CSR: Corporate Social Responsibility - Women Empowerment Cell
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
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                            <div className="col-md-12 col-12"> 
                            <p className="dark-mode-white-color">SGU has dedicated and devoted women empowerment cell which has core function to provide wide ranging consultation to empower women in and outside the Campus. It provides skill training for the needy women from surrounding areas of the university. It conducts regular health awareness camp.</p>
                               
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
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                     NSS: National Service Scheme
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                            <div className="col-md-12 col-12"> 
                            <p className="dark-mode-white-color">SGU has a National Service Scheme unit. The NSS unit promotes personality development and leadership qualities among the students through the wide ranging activities engaging the communities surrounding the University. The NSS unit through special camps reaches out to the people and students in rural areas. The activities involving training in computer use, health camps, blood Donation, financial literacy, village surveying, and tree plantation are conducted by the unit.</p>
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
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                    Rotract Club
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left " style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                            <div className="col-md-12 col-12"> 
                            <p className="dark-mode-white-color">SGU students have set up Rotract Club Rotaract which focuses on the development of young adults as leaders in their communities and workplaces. The purpose of Rotaract is to provide an opportunity for young men and women to enhance the knowledge and skills that will assist them in personal development, to address the physical and social needs of their communities, and to promote better relations between all people worldwide through a framework of friendship and service.</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default BeyondStudiesData;