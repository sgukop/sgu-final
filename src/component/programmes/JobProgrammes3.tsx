'use client';
import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import UGProgrammes2 from './UGProgrammes2';
import UGProgrammes3 from './UGProgrammes3';
import PGProgrammes2 from './PGProgrammes2';
import PHDProgrammes2 from './PHDProgrammes2';
import SchoolIntake6 from '@/component/programmes/SchoolIntake6'
import SchoolIntake7 from '@/component/programmes/SchoolIntake7'
import Table from "react-bootstrap/Table";

const JobProgrammes2 = () => {
    return (
        <div className="schools-section pt-30 pb-50">
            <div className="container">
                <div className='accordion mt-20' id="accordionExample">
                    <div className="tl-event-details-area tl-course-details-curriculum">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"

                                aria-controls="collapseOne"
                            >
                                Programmes Offered -

                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">

                                <Table striped bordered responsive className="governing-table">
                                    <caption className="captionnn dark-mode-white-color">Programmes Offered
                                    </caption>
                                    <tbody>
                                        <tr>
                                            <th><p>D. Pharmacy</p></th>
                                            <td><p>Duration - 2 Years</p></td>
                                            <td><p>Intake - 60</p></td>
                                        </tr>
                                        <tr>
                                            <th><p>B. Pharmacy</p></th>
                                            <td><p>Duration - 4 Years</p></td>
                                            <td><p>Intake - 100</p></td>
                                        </tr>
                                    </tbody>
                                </Table>
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
                                Approvals -
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse "
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">

                                <div className="tl-event-details-left " style={{ padding: '5px' }}>
                                    <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>

                                        <div className="tl-14-about-descr col-md-6 col-12">
                            
                                            <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                                <li className="dark-mode-white-color" >Approved By Pharmacy Council of India, New Delhi</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div >
                                                <p className="tl-14-about-descr" style={{marginBottom:'3px'}}>Click here for Approval Letter </p>
                                                <span> 1. <span style={{color:'#337ab7'}}>2019-20 </span> </span> <br/>
                                                <span> 2. <span style={{color:'#337ab7'}}>2020-21 </span> </span>
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
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                    >
                        Eligibility for Admission -
                    </button>
                </h2>
                <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left col-lg-12 d-md-flex gap-5" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                
                            <div className="tl-14-about-descr col-12 descriptionnn-widthhh"> 
                            <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                            Diploma in Pharmacy (D. Pharmacy)
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >Passed 10+2/HSC Examination in Science of any recognized board with Physics, Chemistry As Compulsory subject along with one of the subject Mathematics or Biology</li>
                                    <li className="dark-mode-white-color" >Any Other Qualification approved by the Pharmacy Council of India as equivalent to any of the above Examination</li>
                                </ul>
                            </div>
                               <div className="tl-14-about-descr col-12 descriptionnn-widthhh"> 
                               <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                               Bachelor of Pharmacy (B. Pharmacy) - First Year
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >Passed 10+2 / HSC Examination in Science of any recognized board with Physics, Chemistry As Compulsory subject along with one of the subject Mathematics or Biology in the above subjects taken together</li>
                                    <li className="dark-mode-white-color" >Should have appeared in all the subjects and should obtain non zero score in CET conducted by the Competent Authority.</li>
                                    <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}> OR </h4>
                                     <li className="dark-mode-white-color no-beforeee" >Non zero score in CET conducted by the Sanjay Ghodawat University, Kolhapur</li>
                                     <li className="dark-mode-white-color">Any Other Qualification approved by the Pharmacy Council of India as equivalent to any of the above Examination.</li>
                                     <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}> Bachelor of Pharmacy (B. Pharmacy) - Direct Second Year </h4>
                                     <li className="dark-mode-white-color" >A pass in D.Pharm course from an institution approved by the Pharmacy Council of India under section 12 of Pharmacy Act.</li>
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
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                    >
                       Job Opportunities in Pharmacy -
                    </button>
                </h2>
                <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left col-lg-12 d-md-flex gap-5" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px',padding:"15px" }}>
                                
                            <div className="tl-14-about-descr "> 
                            <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                            A) Health Care Services :
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >Community or Entrepreneur - Wholesaler or Retailer chemist and druggist. To establish own pharmaceutical industry.</li>
                                    <li className="dark-mode-white-color" >Hospital or Clinic - Dispensing the drug and medicine and supervising the hospital</li>
                                    <li className="dark-mode-white-color" >Laboratory technician / Assistant</li>
                                </ul>
                            <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                            B) Government Job :
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >As a pharmacist in Government Hospital</li>
                                    <li className="dark-mode-white-color" >Food and Drug inspector</li>
                                    <li className="dark-mode-white-color" >As a graduate - Illegible to all MPSC OR UPSC examination</li>
                                </ul>
                            <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                            C) Higher Education :
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >To become post graduate in M. Pharm. L.L.B., M.B.A., M.S., etc</li>
                                    <li className="dark-mode-white-color" >Research Activity</li>
                                    <li className="dark-mode-white-color" >Clinical Research</li>
                                    <li className="dark-mode-white-color" >As a teacher- Professor/Associate Professor/Assistant Professor</li>
                                </ul>
                            <h4 className="tl-14-about-descr" style={{marginBottom:'10px', fontWeight:700, fontSize:'20px'}}>
                            D) Industry :
                                </h4>
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >Production - In Bulk drugs, Fine drugs, and Formulation</li>
                                    <li className="dark-mode-white-color" >Quality control and assurance</li>
                                    <li className="dark-mode-white-color" >Packaging and Repackaging</li>
                                    <li className="dark-mode-white-color" >Sales and Marketing</li>
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
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                    >
                        Salient Features -
                    </button>
                </h2>
                <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                      
                    <div className="tl-event-details-left col-lg-12 d-md-flex gap-5" style={{padding:'5px'}}>
                            <div className="tl-event-details-key-content col-lg-12 d-md-flex gap-5" style={{ marginTop: '8px', padding:"15px" }}>
                                
                            <div className="tl-14-about-descr "> 
                                <ul className="tl-event-details-key-content-list phd-container gap-1 mb-3">
                                    <li className="dark-mode-white-color" >Environment friendly world - class infrastructure</li>
                                    <li className="dark-mode-white-color" >Value based quality education with societal concern</li>
                                    <li className="dark-mode-white-color" >Flexible Choice based Credit System</li>
                                    <li className="dark-mode-white-color" >Collaborative Inter - Disciplinary Research</li>
                                    <li className="dark-mode-white-color" >Support for Industrial Training</li>
                                    <li className="dark-mode-white-color" >Support for Placement & Entrepreneurship</li>
                                    <li className="dark-mode-white-color" >International Transfer Program</li>
                                    <li className="dark-mode-white-color" >Well equipped laboratories and Computer Lab</li>
                                    <li className="dark-mode-white-color" >A state of art Library</li>
                                </ul>
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

export default JobProgrammes2
