'use client';
import React from 'react';
import Table from "react-bootstrap/Table";

const SchoolIntake5 = () => {
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
                       Department Of Commerce -
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
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                
                            <div className="tl-14-about-descr col-md-6 col-12"> 
                                <p> 
                                Commerce program is unique with emphasis on case based learning, state of the art infrastructure, emphasis on acquiring practical and life skills, establishing long and lasting Institute-Industry interface culminating in paving successful careers for all Commerce graduates.
                                </p>
                            </div>
                               <div className="col-md-6 col-12"> 
                               <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                                    Programme Offered
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <h5 className="tl-14-about-descr" style={{marginBottom:'5px'}}> UG Programme </h5>
                                    <li className="dark-mode-white-color" >B.Com</li>
                                </ul>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <h5 className="tl-14-about-descr" style={{marginBottom:'5px'}}> PG Programme </h5>
                                    <li className="dark-mode-white-color" >M.Com</li>
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
                        Department Of Management -
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
                                
                            <div className="tl-14-about-descr col-md-6 col-12"> 
                                <p> 
                                The BBA Program offered by School of Commerce and Management is aimed to stimulate in students an interest in Business Management and Administration which will lead to employment and personal growth and making them good human beings and responsible citizens of the society
                                </p>
                            </div>
                               <div className="col-md-6 col-12"> 
                               <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                                    Programme Offered
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <h5 className="tl-14-about-descr" style={{marginBottom:'5px'}}> UG Programme </h5>
                                    <li className="dark-mode-white-color" >B.B.A.</li>
                                    <li className="dark-mode-white-color" >B.B.A. - Aviation Services & Air Cargo</li>
                                    <li className="dark-mode-white-color" >B.B.A. - Agri Storage & Supply Chain</li>
                                </ul>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <h5 className="tl-14-about-descr" style={{marginBottom:'5px'}}> PG Programme </h5>
                                    <li className="dark-mode-white-color" >M.B.A.</li>
                                    <li className="dark-mode-white-color" >M.B.A. - Agribusiness Management</li>
                                    <li className="dark-mode-white-color" >M.B.A. - Pharmaceutical Management</li>
                                </ul>
                               </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
           
        

            

           
        </div>

    )
}

export default SchoolIntake5;